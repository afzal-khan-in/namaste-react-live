import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = (
  <h1 className="title" key="h1">
    Hello React World
  </h1>
);

const heading2 = (
  <h2 className="sub-title" key="h2">
    Hello to the world
  </h2>
);

// const container = React.createElement("div", { id: "container" }, [
//   heading1,
//   heading2,
// ]);

const container = (
  <div className="container">
    {heading1}
    {heading2}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
