import React from "react";

function Button(props){
    return (
        <button id={props.id} name={props.data} value={props.data} onClick={props.onClick}>{props.data}</button>
    );
}

export default Button;