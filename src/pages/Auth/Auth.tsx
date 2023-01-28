import "./Auth.scss";

import { Button } from "components";
import { AuthForm } from "./components";
import { AuthProps } from "./types";
import { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authText } from "consts";
import { characterImage } from "images";

const links = ["Home", "About", "Blog", "Pages", "Contact"];

export const Auth: FC<AuthProps> = ({ variant }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [, ...startPathName] = pathname.split("/").reverse();
  const rightPath = startPathName.reverse().join("/");
  const path = {
    login: `${rightPath}/login`,
    register: `${rightPath}/register`,
  } as const;

  console.log(path);

  return (
    <div className="auth">
      <header className="auth__header">
        <nav className="auth__navigation">
          {links.map((link) => (
            <Link key={link} to={path.login} className="auth__navigation-link">
              {link}
            </Link>
          ))}
        </nav>
        <div className="auth__settings">
          <Button
            {...(variant === "login"
              ? { variant: "active" }
              : { onClick: () => navigate(path.login) })}
          >
            Sign in
          </Button>
          <Button
            {...(variant === "register"
              ? { variant: "active" }
              : { onClick: () => navigate(path.register) })}
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
              <Link
                to={path[variant === "login" ? "register" : "login"]}
                className="auth__page-subtitle-link"
              >
                {authText.subTitleLink[variant]}
              </Link>
            </span>
          </div>
          <picture className="auth__logo">
            <img src={characterImage} alt="" />
          </picture>
        </div>
        <div className="auth__interactive">
          <AuthForm variant={variant} />
        </div>
      </main>
    </div>
  );
};
