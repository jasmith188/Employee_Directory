import React from "react";

function Table(props) {
    return <div className={`table${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
  }




export default Table;