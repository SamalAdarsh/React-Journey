import { use, useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurentCard = ({ resData }) => {
  // const { resData } = props;
  // console.log(resData);
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  const { loggedInUser } = useContext(UserContext);
  return (
    <div
      className="m-4 p-4  w-[80%] h-[90%] bg-gray-200 hover:bg-gray-400 rounded-lg"
      // style={{
      //   backgroundColor: "#f0f0f0",
      // }}
    >
      <img
        className="res-logo w-full h-[70%] py-4 rounded-lg "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-2xl font-bold">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} mins </h4>
      <h4>User: {loggedInUser} </h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurentCard) => {
  return (resData) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurentCard {...resData} />
      </div>
    );
  };
};

export default RestaurentCard;
