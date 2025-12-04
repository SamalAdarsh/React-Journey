import React from "react";
import ReactDOM from "react-dom/client";



// const heading1 = React.createElement("h1", {id:"heading"}, "Hello World from React");


// console.log(heading1);

// const parent = React.createElement("div",{id:"Parent"},

//     [
//         React.createElement("div",{id:"Child"},[

//     React.createElement("h1",{},"Hi, I'm h1 tag super"),
//     React.createElement("h2",{},"Hi, I'm h2 tag"),
// ]
//     ),
//     React.createElement("div",{id:"Child2"},[

//     React.createElement("h1",{},"Hi, I'm h1 tag"),
//     React.createElement("h2",{},"Hi, I'm h2 tag"),
// ]
//     )
//     ]
// )

// console.log(parent);

// const root3 = ReactDOM.createRoot(document.getElementById("root3"));

// root3.render(parent);


// {/* <div id="Parent">

//     <div id="Child">
//         <h1>"I'm a h1 tag"</h1>
//     </div>
// </div> */}

const heading = React.createElement("h1",{id: "heading"},"Hello Everyone");
const root  = ReactDOM.createRoot(document.getElementById("root"));


// root.render(heading);

// const HeadingComponent = ()=>{
//     return <h1 id= "heading2">Good Evening from FC</h1>;
// }

// const HeadingComponent2 = ()=> <h1 id= "heading2">Good Evening from FC</h1>;

// const Title = ()=> (

//      <h1 id= "heading2">Good Evening from Title</h1>

// );

const demo =  (

     <h1 id= "heading2">Good Evening from Demo</h1>

);

const Title = ()=> (
    <div>
        {demo}
     <h1 id= "heading2">Good Evening from Title</h1>
     </div>

);
const number = 1000;

const HeadingComponent3 = ()=> (
<div className="container">
    {/* <Title /> */}
    {Title()}
    {number}
    {/* {demo} */}
<h1 id= "heading3">Good Evening from FC</h1>
</div>
);


const JSXheading = <h1 id= "heading2">Good Evening from JSX</h1>
const JSXheading2 = <h1 id= "heading5">Good Evening from JSX</h1>

root.render(JSXheading);
root.render(<HeadingComponent3/>);

// root.render(JSXheading2);