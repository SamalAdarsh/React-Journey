import { useState } from "react";
import Itemlists from "./Itemlists";

const RestaurentCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const HandClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-8  bg-gray-100 shadow-lg p-4  "  onClick={HandClick}>
        <div className="flex justify-between">
          <span
            className="font-bold text-xl cursor-pointer"
           
          >
            {data.title} ({data.itemCards.length})
          </span>

          <span>🔽</span>
        </div>
        {showItems && <Itemlists items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurentCategory;
