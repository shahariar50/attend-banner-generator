"use client";
import { FC } from "react";
import Button from "./Button";
import ImageUploader from "./ImageUploader";
import TextInput from "./TextInput";

type FormProps = {
  onChange: (name: string, val: string) => void;
  data: { name: string; batch: string; image: string };
  onSubmit: () => void;
  loading: boolean;
  count: number;
};
const Form: FC<FormProps> = ({ onChange, data, onSubmit, loading, count }) => {
  return (
    <div>
      <div className="flex gap-3 sm:gap-4 mb-4 flex-wrap sm:flex-nowrap">
        <TextInput
          placeholder="ex: Abdullah Al Sahariar"
          label="Name"
          value={data.name}
          onChange={({ target }) => onChange("name", target.value)}
          className="w-full"
        />
        <TextInput
          placeholder="ex: 2009"
          label="Batch"
          value={data.batch}
          onChange={({ target }) => onChange("batch", target.value)}
          className="w-full"
        />
      </div>
      <div>
        <ImageUploader
          label="Profile Image (Crop the image to squire size before upload)"
          className="mb-4"
          id="imgUploader"
          onChange={(url) => onChange("image", url)}
        />
      </div>
      <div className="flex justify-between items-center">
        <Button onClick={onSubmit} disabled={loading}>
          Download
        </Button>
        {count > 0 && <span>Total Downloaded: {count}</span>}
      </div>
    </div>
  );
};

export default Form;
