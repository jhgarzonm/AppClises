import React from "react";
import { HeaderApp } from "../../Components/HeaderApp";
import { CheckList } from "../../Components/CheckList";

function OrdersList() {
  return (
    <>
      <HeaderApp />
      <h1>Órdenes Pendientes</h1>
      <CheckList />
    </>
  );
}

export { OrdersList };
