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

  console.log(formVal);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white/5 max-w-lg w-full p-4 rounded-md">
        <div>
          <Banner
            name={formVal.name}
            batch={formVal.batch}
            image={formVal.image}
          />
        </div>
        <span className="block w-11/12 h-[2px] rounded-sm bg-white/5 my-8 mx-auto" />
        <div>
          <Form onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
