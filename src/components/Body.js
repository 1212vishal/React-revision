import ResturantCard from "./ResturantCrad";
import resInfo from "../utils/mockData";
import { useState } from "react";


const Body=()=>{ 
   const [resList,setresList]=useState(resInfo);
    return(
        <div className="body">

            <div className="search">
             <input className="Serach-box" type="Serach Resturant" />
             <button className="Search-Button" 
             onClick={()=>{
                const filterResturant=resList.filter((res)=>(res.info.avgRating>=4));
                setresList(filterResturant);
               }}
             >Top Rated Resturant</button>
            </div>

            <div className="card-items">
              {
                resList.map((resturant)=>(<ResturantCard key={resturant.info.id} resData={resturant}/>))
              }
            </div>
        </div>
    )
}
export default Body;