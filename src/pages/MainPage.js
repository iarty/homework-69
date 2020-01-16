import React from "react";
import DishesList from "../components/DishesList/DishesList";
import Orders from "../components/Orders/Orders";

const MainPage = () => {
  return (
    <div className="container">
      <h1 className="text-center my-3">Menu</h1>
      <div className="row">
        <DishesList />
        <Orders />
      </div>
    </div>
  );
};

export default MainPage;
