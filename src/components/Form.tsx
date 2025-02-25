import * as htmlToImage from "html-to-image";
import { FC } from "react";
import Button from "./Button";
import ImageUploader from "./ImageUploader";
import TextInput from "./TextInput";

type FormProps = {
  onChange: (name: string, val: string) => void;
};

const Form: FC<FormProps> = ({ onChange }) => {
  const handleImageDownload = () => {
    const banner = document.getElementById("banner");

    if (banner) {
      const originalWidth = banner.offsetWidth;
      const originalHeight = banner.offsetHeight;

      const newWidth = originalWidth * (1200 / originalWidth);
      const newHeight = originalHeight * (1200 / originalHeight);

      setTimeout(() => {
        htmlToImage
          .toBlob(banner, {
            width: newWidth,
            height: newHeight,
            style: {
              transform: `scale(${1200 / originalWidth})`,
              transformOrigin: "top left",
            },
          })
          .then((blob) => {
            const link = document.createElement("a");
            const url = window.URL.createObjectURL(blob as Blob);
            link.href = url;
            link.download = "export_qs.png";
            link.click();
            window.URL.revokeObjectURL(url);
          });
        banner.style.scale = "1";
      }, 200);
    }
  };

  return (
    <div>
      <div className="flex gap-3 sm:gap-4 mb-4 flex-wrap sm:flex-nowrap">
        <TextInput
          placeholder="ex: Sahariar"
          label="Name"
          onChange={({ target }) => onChange("name", target.value)}
          className="w-full"
        />
        <TextInput
          placeholder="ex: 2009"
          label="Batch"
          onChange={({ target }) => onChange("batch", target.value)}
          className="w-full"
        />
      </div>
      <div>
        <ImageUploader
          label="Profile Image (Crop to squire size before upload)"
          className="mb-4"
          onChange={(url) => onChange("image", url)}
        />
      </div>
      <Button onClick={handleImageDownload}>Download</Button>
    </div>
  );
};

export default Form;
