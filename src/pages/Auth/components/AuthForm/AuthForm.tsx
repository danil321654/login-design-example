import "./AuthForm.scss";

import { FC, useState } from "react";
import { AuthFormProps } from "./types";
import { Button, Input } from "components";
import {
  AppleIcon,
  ClearIcon,
  FacebookIcon,
  GoogleIcon,
  UnhideIcon,
} from "icons";
import { Link } from "react-router-dom";
import { authText } from "consts";

export const AuthForm: FC<AuthFormProps> = ({ variant }) => {
  const [email, setEmail] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowRepeatedPassword, setIsShowRepeatedPassword] = useState(false);
  return (
    <form
      className="auth-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="auth-form__input-group">
        <Input
          placeholder="Enter email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          endAdornment={email && <ClearIcon onClick={() => setEmail("")} />}
        />
        <Input
          placeholder="Enter password"
          type={isShowPassword ? "text" : "password"}
          autoComplete="current-password"
          endAdornment={
            <UnhideIcon onClick={() => setIsShowPassword((st) => !st)} />
          }
        />
        {variant === "login" && (
          <Link to="/recover-password" className="auth-form__recover-password">
            Recover Password ?
          </Link>
        )}
        {variant === "register" && (
          <Input
            placeholder="Repeat password"
            type={isShowRepeatedPassword ? "text" : "password"}
            autoComplete="current-password"
            endAdornment={
              <UnhideIcon
                onClick={() => setIsShowRepeatedPassword((st) => !st)}
              />
            }
          />
        )}
      </div>
      <Button variant="filled" className="auth-form__submit">
        {authText.submitButtonText[variant]}
      </Button>
      <div className="auth-form__divider">
        <div className="auth-form__divider-line" />
        <span>Or continue with</span>
        <div className="auth-form__divider-line" />
      </div>
      <div className="auth-form__buttons">
        <Button variant="icon">
          <GoogleIcon />
        </Button>
        <Button variant="icon">
          <AppleIcon />
        </Button>
        <Button variant="icon">
          <FacebookIcon />
        </Button>
      </div>
    </form>
  );
};
