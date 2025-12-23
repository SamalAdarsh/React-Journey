import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestaurentMenu";
const RestaurentMenu = () => {
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const [count, setcount] = useState(0);
  // console.log(useState());

  // const [resInfo, setresInfo] = useState(null);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);

  //   //https://api.allorigins.win/raw?url=

  //   //    const data = await fetch(
  //   //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5246091&lng=73.8786239&restaurantId=236455&catalog_qa=undefined&submitAction=ENTER"
  //   // );

  //   const json = await data.json();

  //   setresInfo(json.data);
  // };
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);
  
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines?.join(",")} - {costForTwo}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {" "}
            {item.card.info.name} - {"Rs."} {item.card.info.price / 100}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>  */}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
