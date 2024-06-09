import ResturantCard from "./ResturantCrad";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Body = () => {
  // console.log("body Render")
  const [resList, setresList] = useState([]);
  const [dupResList, setdupResList] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    //console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle);
    setresList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setdupResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //  if(resList.length===0)
  //   {
  //     return <Shimmer/>
  //   }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          className="Serach-box"
          type="Serach Resturant"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />

        <button
          className="Fiter-Resturant"
          onClick={() => {
            const filterResList = resList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setdupResList(filterResList);
          }}
        >
          Search
        </button>

        <button
          className="Search-Button"
          onClick={() => {
            const filterResturant = resList.filter(
              (res) => res.info.avgRating >= 4
            );
            setdupResList(filterResturant);
          }}
        >
          Top Rated Resturant
        </button>
      </div>

      <div className="card-items">
        {dupResList.map((resturant) => (
          <Link to={"/resturants/" + resturant.info.id}>
            <ResturantCard key={resturant.info.id} resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
