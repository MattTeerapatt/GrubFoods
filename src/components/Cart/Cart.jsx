import { useContext } from "react";

import Modal from "../UI/Modal.jsx";
import classes from "./Cart.module.css";
import CartContext from "../../Store/cart-content.jsx";
import CartItem from "./CartItem.jsx";


const Cart = (props) => {
    const cartCtx = useContext(CartContext);
  
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
  
    const cartItemRemovehandler = (id) => {
      cartCtx.removeItem(id);
    };
  
    const cartItemAddhandler = (item) => {
      cartCtx.addItem(item);
    };
  
    const cartItems = (
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemovehandler.bind(null, item.id)}
            onAdd={cartItemAddhandler.bind(null, item)}
          />
        ))}
      </ul>
    );
  
    return (
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
    );
  };
  
  export default Cart;
  