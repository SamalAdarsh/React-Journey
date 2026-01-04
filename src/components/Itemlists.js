import { useDispatch } from "react-redux";
import { ITEM_IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const Itemlists = ({ items, dummy }) => {
  // console.log(dummy);

  const dispatcher = useDispatch();
  const handAddItem = () => {
    dispatcher(addItem("roll"));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-10/12">
            <div className="font-bold">{item.card.info.name}</div>
            <div>₹ {item.card.info.price / 100}</div>
            <div>{item.card.info.description}</div>
          </div>
          <div className="w-2/12 relative ">
            <img src={ITEM_IMG_URL + item.card.info.imageId} />
            <div className="absolute bottom-0 ">
              <button
                className="bg-black text-white p-1 mx-7 rounded-lg shadow-lg"
                onClick={handAddItem}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlists;
