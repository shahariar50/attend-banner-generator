"use client";

import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";

type ImageUploader = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  label: string;
  onChange: (url: string) => void;
};

const ImageUploader: FC<ImageUploader> = ({
  className,
  label,
  onChange,
  ...props
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange(URL.createObjectURL(file));
    }
  };

  return (
    <Field className={clsx(className)}>
      <Label className="text-xs sm:text-sm font-medium text-white mb-1 block">
        {label}
      </Label>
      <Input
        type="file"
        className="block w-full rounded-lg border-none bg-white/5 p-2 sm:p-4 text-sm"
        onChange={handleFileChange}
        {...props}
      />
    </Field>
  );
};

export default ImageUploader;
