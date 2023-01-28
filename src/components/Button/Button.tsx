import "./Button.scss";
import { FC } from "react";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({
  children,
  variant = "normal",
  className,
  ...props
}) => (
  <button
    {...props}
    className={[
      `button button--${variant}`,
      ...(className ? [className] : []),
    ].join(" ")}
  >
    {children}
  </button>
);
