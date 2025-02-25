import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";

type FormProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const TextInput: FC<FormProps> = ({ label, className, ...props }) => {
  return (
    <Field className={clsx(className)}>
      <Label className="text-sm/6 font-medium text-white">{label}</Label>
      <Input
        className={clsx(
          "mt-1 block w-full rounded-lg border-none bg-white/5 py-1.5 px-2 sm:px-3 text-sm/6 text-white",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        )}
        {...props}
      />
    </Field>
  );
};

export default TextInput;
