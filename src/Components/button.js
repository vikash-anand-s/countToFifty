import React from "react";

function Button(props){
    return (
        <button className="button" name={props.data} value={props.data} onClick={props.onClick}>{props.data}</button>
    );
}

export default Button;