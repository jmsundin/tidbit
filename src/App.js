import React from "react";
import { render } from "react-dom";

{
  /* The following line can be included in your src/index.js or App.js file*/
}
import "bootstrap/dist/css/bootstrap.min.css";

import HomeNavigation from "./HomeNavigation";
import TidbitCard from "./TidbitCard";
// import Button from "react-bootstrap/Button";

const App = () => {
  return (
    <div>
      <HomeNavigation></HomeNavigation>
      <TidbitCard
        title="Good Shit"
        text="Nadal Ravikant's Podcast on 'Good Shit'"
        url="https://www.instagram.com/marisssaloren/guide/tidbits/18023476921386740/"
      />
    </div>
  );
};

render(<App />, document.getElementById("root"));
