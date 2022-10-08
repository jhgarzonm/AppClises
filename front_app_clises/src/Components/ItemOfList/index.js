import React from "react";

function ItemOfList(props) {
  return (
    <React.Fragment>
      <li className="">
        {props.task}
        <input type="checkbox" />
      </li>
    </React.Fragment>
  );
}

export { ItemOfList };
