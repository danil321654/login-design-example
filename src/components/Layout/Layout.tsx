import "./Layout.scss";

import { FC } from "react";
import { LayoutProps } from "./types";

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="layout">
    <div className="layout__background-circle layout__background-circle--yellow"></div>
    <div className="layout__background-circle layout__background-circle--blue"></div>
    {children}
  </div>
);
