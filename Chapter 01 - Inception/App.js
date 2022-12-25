const heading1 = React.createElement("h1", {
    className: "title"
}, 
"Hello React World!!!");

const heading2 = React.createElement("h2", {
    className: "sub-title"
},
"Hello to the world!!!"
)

const container = React.createElement("div", {id:"container"}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container)

