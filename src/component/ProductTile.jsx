import { useDispatch, useSelector } from "react-redux"
import { addtoCart, removeFromCart } from "../store/slices/cart-slice";

export default function ProductTile({product}){

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    function handleAddFunctionCart(){
        dispatch(addtoCart(product))
    }
    function handleRemoveFunction(){
        dispatch(removeFromCart(product.id))
    }
    console.log(product)
    return(
        <div>
            <div className="shadow-[0_2px_10px_rgba(0,0,0,0.25)] group flex flex-col items-center border-2 border-white gap-3 p-4 h-[360px] mt-10 ml-5 bg-white rounded-xl">
                <div className="h-[180px]">
                    <img 
                    src={product?.image}
                    alt={product?.title}
                    className="object-cover h-full w-full"/>
                </div>
                <div >
                    <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
                        {product?.title}
                    </h1>
                </div>
                <div className="flex items-center justify-center w-full mt-5 ">
                    <button onClick={cart.some(item => item.id === product.id)? handleRemoveFunction : handleAddFunctionCart} className="bg-[#8F8658] text-white border-2 rounded-lg font-bold p-4 cursor-pointer">
                        { 
                            cart.some(item => item.id === product.id)? 'Remove from cart':'Add to cart'
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}