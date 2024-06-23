import { useEffect, useState } from "react";
import { RES_MENU } from "../utils/Constant";

const useResturantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_MENU + resId);
    const json = await data.json();
    setresInfo(json.data);
  };

  return resInfo;
};
export default useResturantMenu;
