import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import "./Navigation.css";

export const Navigation = () => {
  return (
    <Fragment>
      <div className="header">
        <img
          src="https://spoonacular.com/application/frontend/images/logo-simple-framed-green-gradient.svg"
          alt=""
        />
        <h1>
          Spoonacular <span>API</span>
        </h1>
      </div>
      <Outlet />
    </Fragment>
  );
};
