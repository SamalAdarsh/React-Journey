import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating,} =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div
      className="m-4 p-4  w-[80%] h-[90%] bg-gray-200 hover:bg-gray-400 rounded-lg"
      // style={{
      //   backgroundColor: "#f0f0f0",
      // }}
    >
      <img
        className="res-logo w-[100%] h-[70%] py-4 rounded-lg "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-2xl font-bold">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} mins </h4>
    </div>
  );
};

export default RestaurentCard;
