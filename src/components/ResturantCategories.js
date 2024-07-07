import React, { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategories = ({ data, isOpen, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };
  return (
    <div className="restaurant-category">
      <h1 onClick={handleClick}>
        {data.title} ({data.itemCards.length})
      </h1>
      <div>{isOpen && <ItemList items={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategories;
