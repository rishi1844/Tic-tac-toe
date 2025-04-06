import React from "react";

const Square = (props) =>{
    return(
        <div onClick={props.onClick} className="sqr">
            <h2>{props.val}</h2>
        </div>
    )
}

export default Square;