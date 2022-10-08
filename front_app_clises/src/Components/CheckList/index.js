import React from "react";
import "./style.css";
import { ItemOfList } from "../ItemOfList";

let taskBox = ["Primera", "Segunda", "Tercera", "Cuarta", "Quinta"];
function CheckList() {
  
  return (
    <React.Fragment>
      <ul className="list-container">
       {
        taskBox.map((task) => <ItemOfList task={task + " tarea"}/>) 
       }
       
      </ul>
    </React.Fragment>
  );
}

export { CheckList };
