import { useEffect, useState } from "react";

const uselistofRestaurents = () => {
  const [listofRestaurents, setlistofRestaurents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();

    console.log(json);

    setlistofRestaurents(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listofRestaurents;
};

export default uselistofRestaurents;
