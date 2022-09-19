import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import uuid from "react-uuid";

const Cart = () => {

    const { cartItems, setCartItems } = useContext(CartContext);


    const deleteItem = (e) => {
        let newCartList = cartItems.filter( item => item.name !== e.target.value)
        setCartItems(newCartList)
    }
   
    return (
        <>
            <h1>Cart</h1>
            <ul>
            {
                cartItems.map( item => 
                <li key={uuid()}>
                    {item.name}
                    <button onClick={deleteItem} value={item.name}>delete from cart</button>
                </li>)
            }
            </ul>
            
        </>
    )
}

export default Cart;