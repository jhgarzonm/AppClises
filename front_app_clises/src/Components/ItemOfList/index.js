import React from "react";
import "./style.css";

function ItemOfList(props) {
  return (
    <React.Fragment>
      <div className="Container">
      <li className="Título">
        {props.task}   
        <div className="checkbox"><input className="input1" type="checkbox" /></div>
      </li>
      <p className="Descripción">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
        <p className="Fecha">20/12/20</p>
        </div>
    </React.Fragment>
  );
}

export { ItemOfList };
