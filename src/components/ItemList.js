import React from "react";
import { CDN_URL } from "../utils/Constant";
// Make sure to import the CSS file

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((c) => (
        <div key={c.card.info.id} className="item">
          <div className="add-label">
            <button>Add+</button>
          </div>
          <img src={CDN_URL + c.card.info.imageId} alt={c.card.info.name} />
          <div className="item-name">{c.card.info.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
