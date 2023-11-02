import React from "react";
import {Simulate} from "react-dom/test-utils";
import "./componentStyle.css"
const Inputbar = () => {
    return(
        <div className={"input"}>
            <input type={"email"} placeholder={"Neue Email"} className={"inputbar"} />
                 <button type={"submit"} className={"addToList"}>+</button>

        </div>
        );
};
export default Inputbar;