"use client";
import Banner from "@/components/Banner";
import { useState } from "react";
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
          <Form onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
