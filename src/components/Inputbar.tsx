import React from "react";
import {Simulate} from "react-dom/test-utils";
import "./componentStyle.css"

interface stateTypes{
    email: String;
    setEmail: React.Dispatch<React.SetStateAction<String>>;
}
const Inputbar:React.FC <stateTypes> = ({email, setEmail}) => {
    const handelAdd = () => {
        return console.log(1);
    }
    return (
        <div className={"input"}>
            <input type={"email"} placeholder={"Neue Email"} className={"inputbar"}
                onChange={(e)=> {
                    setEmail(e.target.value);
                    console.log(email);
                }
            }
            />
            <button type={"submit"} className={"addToList"} onClick={handelAdd}>+</button>
        </div>
    );
};
export default Inputbar;