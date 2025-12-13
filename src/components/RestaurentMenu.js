import { useEffect } from "react";

const RestaurentMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const data = await fetch(
    //   "cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5246091&lng=73.8786239&restaurantId=323532&catalog_qa=undefined&submitAction=ENTER"
    // );

    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/123456"
    );

    // console.log(data);
    const json = await data.json();

    console.log(json);
  };
  return (
    <div>
      <h1>Name of the restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Pizza</li>
        <li>Biryani</li>
        <li>Rolls</li>
      </ul>
    </div>
  );
};

export default RestaurentMenu;
