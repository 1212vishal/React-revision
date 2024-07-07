import useResturantMenu from "../utils/useResturantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ResturantCategories from "./ResturantCategories";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setshowIndex] = useState(null);

  const infoRes = useResturantMenu(resId);

  if (infoRes === null) {
    return <Shimmer />;
  }

  const { name, costForTwo, cuisines } = infoRes.cards[2].card.card.info;

  const { itemCards } =
    infoRes.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  // console.log(infoRes.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const itemCategory =
    infoRes.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(itemCategory);

  return (
    <div className="res-menu">
      <h1 className="res-name">{name}</h1>
      <h1 className="res-details">
        {cuisines.join(",")} : {costForTwo}
      </h1>
      {itemCategory.map((item, index) => (
        <ResturantCategories
          key={index}
          data={item.card.card}
          isOpen={showIndex === index ? true : false}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
