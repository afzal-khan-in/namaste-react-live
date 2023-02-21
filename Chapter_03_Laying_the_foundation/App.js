import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    className: "title",
    key: "h1",
  },
  "Hello React World!!!"
);

const heading2 = React.createElement(
  "h2",
  {
    className: "sub-title",
    key: "h2",
  },
  "Hello to the world!!!"
);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
