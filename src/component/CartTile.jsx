import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice.js";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFunction() {
    dispatch(removeFromCart(cartItem.id));
  }
  
  
  return (
    <div>
      <div className="flex shadow-[0_2px_10px_rgba(0,0,0,0.25)] items-center p-5 justify-between bg-white mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
            <img
                src={cartItem?.image}
                className="h-28 rounded-lg"
                alt={cartItem.title}
            />
            <div className="ml-10 self-start space-y-5">
                <h1 className="text-xl  font-bold">{cartItem.title}</h1>
                <p className=" font-extrabold">Price :{cartItem.price}</p>
            </div>
        </div>
        <div>
            <button
                onClick={handleRemoveFunction}
                className="bg-[#8F8658] text-white border-2 rounded-2xl font-bold p-4 cursor-pointer"
            >
            Remove From cart
          </button>
        </div>
      </div>
    </div>
  );
}