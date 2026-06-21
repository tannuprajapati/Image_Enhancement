return (
    <div className="w-full flex flex-col items-center">
        <ImageUpload UploadImageHandler={UploadImageHandler} />

        <ImagePreview
            loading={loading}
            uploaded={uploadImage}
            enhanced={enhancedImage?.image}
        />
    </div>
);