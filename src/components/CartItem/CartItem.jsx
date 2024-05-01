import { useContext } from "react";
import styles from "./CartItem.module.css";
import { ProductsContext } from "../../Context/ProductContext";
import { useParams } from "react-router-dom";

const CartItem = ({ thumbnail, id, title, price }) => {
  // const product = props.product;
  const { products, removeFromCart } = useContext(ProductsContext);
  const { productId } = useParams();
  const product = products.find((e) => e.id === Number(productId));

  console.log(id);

  return (
    <div className={styles.cart}>
      <div className={styles["cart-item"]}>
        <div className={styles.input}>
          <label className={styles.container}>
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={thumbnail} className={styles["card-img"]} />
          </div>

          <p className={styles.title}>{title}</p>
          <p className={styles.price}> &#8358;{price}</p>
          <div>
            <a
              className={styles.remove}
              onClick={() => {
                removeFromCart(product);
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
