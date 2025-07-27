"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && <CldImage src={publicId} width={270} height={180} alt="" />}
      <CldUploadWidget
        uploadPreset="teywdt"
        onSuccess={(result, widget) => {
          if (result.event !== "success") return;
          setPublicId((result.info as CloudinaryResult).public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
