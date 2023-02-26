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
const Container = () => {
  return (
    <div className="container">
      {heading1}
      {heading2}
    </div>
  );
};
const Title = () => {
  return <h3>title</h3>;
};
// const container = (
//   <div className="container">
//     {heading1}
//     {heading2}
//   </div>
// );
const HeaderComponent = () => (
  <div>
    <Container />
    <Title />
    <h1>Namaste React functional componenent</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
