"use client";
import Banner from "@/components/Banner";
import axios from "axios";
import * as htmlToImage from "html-to-image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Form from "../components/Form";

type FormValProps = {
  name: string;
  batch: string;
  image: string;
};

export default function Home() {
  const [formVal, setFormVal] = useState<FormValProps>({
    name: "",
    batch: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

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

    if (banner && formVal?.name && formVal?.batch) {
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
    } else {
      toast.error("Name of batch field can't be blank");
    }

    if (formVal?.name || formVal?.batch) {
      axios
        .post("/api/data")
        .then((res) => {
          setCount(res.data.value);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .post("/api/submissionData", formVal)
        .then((res) => {
          toast.success("Downloaded successfully.");
          setCount(res.data.value);
          setLoading(false);
          setFormVal({
            name: "",
            batch: "",
            image: "",
          });
          const imgInput = document.getElementById(
            "imgUploader"
          ) as HTMLInputElement;
          imgInput.value = "";
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoading(false);
    }
  };

  const handleChange = (name: string, val: string) => {
    setFormVal((prev) => ({ ...prev, [name]: val }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white/5 max-w-[320px] sm:max-w-lg w-full p-4 rounded-md overflow-auto">
        <div>
          <Banner
            name={formVal.name}
            batch={formVal.batch}
            image={formVal.image}
          />
        </div>
        <span className="block w-11/12 h-[2px] rounded-sm bg-white/5 my-4 sm:my-8 mx-auto" />
        <div>
          <Form
            onChange={handleChange}
            data={formVal}
            loading={loading}
            count={count}
            onSubmit={handleImageDownload}
          />
        </div>
      </div>
    </div>
  );
}
