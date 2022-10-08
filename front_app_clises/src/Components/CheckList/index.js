import React from "react";
import "./style.css";
import { ItemOfList } from "../ItemOfList";

function CheckList() {
  return (
    <React.Fragment>
      <ul className="list-container">
        <ItemOfList task="Primera tarea" />
        <ItemOfList task="Segunda tarea" />
        <ItemOfList task="Tercera tarea" />
        <ItemOfList task="Cuarta tarea" />
      </ul>
    </React.Fragment>
  );
}

export { CheckList };
