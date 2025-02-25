import { FC } from "react";
import Button from "./Button";
import ImageUploader from "./ImageUploader";
import TextInput from "./TextInput";

type FormProps = {
  onChange: (name: string, val: string) => void;
};

const Form: FC<FormProps> = ({ onChange }) => {
  return (
    <div>
      <div className="flex gap-4 mb-4">
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
      <Button>Download</Button>
    </div>
  );
};

export default Form;
