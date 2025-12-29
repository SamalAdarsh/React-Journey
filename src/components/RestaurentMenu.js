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

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="font-bold text-lg ">
        {cuisines?.join(",")} - {costForTwo}
      </p>
      
    </div>
  );
};

export default RestaurentMenu;
