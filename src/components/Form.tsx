import axios from "axios";
import * as htmlToImage from "html-to-image";
import { FC, useEffect, useState } from "react";
import Button from "./Button";
import ImageUploader from "./ImageUploader";
import TextInput from "./TextInput";

type FormProps = {
  onChange: (name: string, val: string) => void;
  data: { name: string; batch: string };
};

const Form: FC<FormProps> = ({ onChange, data }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((res) => {
        setCount(res.data.value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleImageDownload = () => {
    setLoading(true);
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
            link.download = "banner.png";
            link.click();
            window.URL.revokeObjectURL(url);
          });
        banner.style.scale = "1";
      }, 200);
    }
    axios
      .post("/api/data")
      .then((res) => {
        setCount(res.data.value);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post("/api/submissionData", data)
      .then((res) => {
        setCount(res.data.value);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex gap-3 sm:gap-4 mb-4 flex-wrap sm:flex-nowrap">
        <TextInput
          placeholder="ex: Abdullah Al Sahariar"
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
          label="Profile Image (Crop the image to squire size before upload)"
          className="mb-4"
          onChange={(url) => onChange("image", url)}
        />
      </div>
      <div className="flex justify-between items-center">
        <Button onClick={handleImageDownload} disabled={loading}>
          Download
        </Button>
        {count > 0 && <span>Total Downloaded: {count}</span>}
      </div>
    </div>
  );
};

export default Form;
