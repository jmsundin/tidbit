import React from "react";
import { render } from "react-dom";

{
  /* The following line can be included in your src/index.js or App.js file*/
}
import "bootstrap/dist/css/bootstrap.min.css";

import HomeNavigation from "./HomeNavigation";
// import Button from "react-bootstrap/Button";

const App = () => {
  return (
    <div>
      <HomeNavigation></HomeNavigation>
    </div>
  );
};

render(<App />, document.getElementById("root"));
