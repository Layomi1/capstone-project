import { useContext } from "react";
import styles from "./CartItem.module.css";
import { ProductsContext } from "../../Context/ProductContext";

const CartItem = ({ thumbnail, id, price }) => {
  // const product = props.product;
  const cart = useContext(ProductsContext);

  console.log(cart.items);

  return (
    <div className={styles.cart}>
      <div className={styles["cart-item"]}>
        <div className={styles.input}>
          <label htmlFor="checkbox"></label>
          <input type="checkbox" />
        </div>

        <div className={styles.card}>
          <div>
            <img src={thumbnail} alt={id} className={styles["card-img"]} />

            <p> &#8358;{price}</p>
            <a
              onClick={() => {
                cart.deleteFromCart(id);
              }}
            >
              Remove item
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
