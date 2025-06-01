import axios from "axios";

const API_KEY = "wxbysq3fdv7zco2nd";
const BASE_URL = "https://techhk.aoscdn.com";

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    const enhancedImageData = await pollForEnhancedImage(taskId);
    return enhancedImageData;
  } catch (error) {
    console.log("Error enhancing:", error.message);
    throw error;
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image! Task ID not found.");
  }

  return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data) {
    throw new Error("Failed to fetch enhanced image! Image not found.");
  }

  return data.data;
};

const pollForEnhancedImage = async (taskId, retries = 0) => {
  const result = await fetchEnhancedImage(taskId);

  if (result.state === 4) {
    console.log("Processing...");
    if (retries >= 20) {
      throw new Error("Max retries reached. Please try again later.");
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return pollForEnhancedImage(taskId, retries + 1);
  }

  return result;
};
