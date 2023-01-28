import "./Auth.scss";

import { Button } from "components";
import { AuthForm } from "./components";
import { AuthProps } from "./types";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authText } from "consts";

const links = ["Home", "About", "Blog", "Pages", "Contact"];

export const Auth: FC<AuthProps> = ({ variant }) => {
  const navigate = useNavigate();
  return (
    <div className="auth">
      <header className="auth__header">
        <nav className="auth__navigation">
          {links.map((link) => (
            <Link key={link} to="/login" className="auth__navigation-link">
              {link}
            </Link>
          ))}
        </nav>
        <div className="auth__settings">
          <Button
            {...(variant === "login"
              ? { variant: "active" }
              : { onClick: () => navigate("/login") })}
          >
            Sign in
          </Button>
          <Button
            {...(variant === "register"
              ? { variant: "active" }
              : { onClick: () => navigate("/register") })}
          >
            Register
          </Button>
        </div>
      </header>
      <main className="auth__main">
        <div className="auth__presentational">
          <div className="auth__page-titles">
            <span className="auth__page-title">{authText.title[variant]}</span>
            <span className="auth__page-subtitle">
              {authText.subTitle[variant]}{" "}
              <Link to="/register" className="auth__page-subtitle-link">
                {authText.subTitleLink[variant]}
              </Link>
            </span>
          </div>
          <picture className="auth__logo">
            <img src="/images/character.png" alt="" />
          </picture>
        </div>
        <div className="auth__interactive">
          <AuthForm variant={variant} />
        </div>
      </main>
    </div>
  );
};
