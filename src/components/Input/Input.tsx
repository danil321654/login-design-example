import "./Input.scss";
import { FC } from "react";
import { InputProps } from "./types";

export const Input: FC<InputProps> = ({
  children,
  className,
  endAdornment,
  ...props
}) => (
  <div className="input">
    <input
      {...props}
      className={["input__element", ...(className ? [className] : [])].join(
        " "
      )}
    ></input>
    <div className="input__end-adornment">{endAdornment}</div>
  </div>
);
