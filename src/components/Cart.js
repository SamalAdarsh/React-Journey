import { useSelector } from "react-redux";
import Itemlists from "./Itemlists";

const Cart = () => {
const cartItems = useSelector((store)=>store.cart.items);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div><Itemlists items={cartItems}/></div>
    </div>
  );
};

export default Cart;
