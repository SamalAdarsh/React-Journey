import React from "react";
import ReactDOM from "react-dom/client";



const heading1 = React.createElement("h1", {id:"heading"}, "Hello World from React");


console.log(heading1);

const parent = React.createElement("div",{id:"Parent"},

    [
        React.createElement("div",{id:"Child"},[

    React.createElement("h1",{},"Hi, I'm h1 tag super"),
    React.createElement("h2",{},"Hi, I'm h2 tag"),
]
    ),
    React.createElement("div",{id:"Child2"},[

    React.createElement("h1",{},"Hi, I'm h1 tag"),
    React.createElement("h2",{},"Hi, I'm h2 tag"),
]
    )
    ]
)

console.log(parent);

const root3 = ReactDOM.createRoot(document.getElementById("root3"));

root3.render(parent);


{/* <div id="Parent">

    <div id="Child">
        <h1>"I'm a h1 tag"</h1>
    </div>
</div> */}