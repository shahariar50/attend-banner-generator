import clsx from "clsx";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        (className =
          "inline-flex items-center gap-2 rounded-md bg-blue-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
