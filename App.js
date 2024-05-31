import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading=<h1 id="heading">Namaste React JSX</h1>
const Heading=()=>{
    return(
        <div id="heading">
            <h1>Functional Component in React</h1>
            <h1 >Namaste React JSX</h1>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);