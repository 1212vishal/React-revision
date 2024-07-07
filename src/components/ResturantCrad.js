import { CDN_URL } from "../utils/Constant";

const ResturantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData.info;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt="" />
      <h1>{name}</h1>
      <h1>{cuisines.join(",")}</h1>
      <h1>Rating {avgRating}</h1>
      <h1>Delivery Time {sla.deliveryTime}</h1>
    </div>
  );
};

export const withPromotedLevel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="isOpen">Open</label>

        <ResturantCard {...props} />
      </div>
    );
  };
};
export default ResturantCard;
