const heading = React.createElement("div",{className:"Parent"},[
   React.createElement("div",{className:"child"},[
    React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag")
   ]),
   React.createElement("div",{className:"Parent"},
   React.createElement("div",{className:"child"},[
    React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag")]))]);



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(heading);

