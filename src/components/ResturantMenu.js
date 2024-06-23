import useResturantMenu from "../utils/useResturantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const { resId } = useParams();

  const infoRes = useResturantMenu(resId);

  // const [infoRes, setinfoRes] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(RES_MENU + resId);
  //   const json = await data.json();
  //   setinfoRes(json.data);
  //   console.log(json);
  // };

  if (infoRes === null) {
    return <Shimmer />;
  }

  const { name, costForTwo, cuisines } = infoRes.cards[2].card.card.info;
  const { itemCards } =
    infoRes.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <h1>
        {cuisines.join(",")} : {costForTwo}
      </h1>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((res) => (
          <h3>
            {res.card.info.name} : Rs -{" "}
            {res.card.info.defaultPrice / 100 || res.card.info.price / 100}
          </h3>
        ))}
      </ul>
    </div>
  );
};
export default ResturantMenu;
