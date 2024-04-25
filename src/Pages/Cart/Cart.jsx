import styles from "./Cart.module.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import CartItem from "../../components/CartItem/CartItem";
import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductContext";
const AddToCart = () => {
  const cart = useContext(ProductsContext);

  return (
    <div className={styles.cart}>
      <h3 className={styles.title}>Cart</h3>

      {cart.cartItemsCount > 0 ? (
        <>
          {cart.items.map((currentProduct, index) => (
            <CartItem
              key={index}
              id={currentProduct.id}
              thumbnail={currentProduct.thumbnail}
              price={currentProduct.price}
            />
          ))}

          <div className={styles.all}>
            <div className={styles.input}>
              <label htmlFor="checkbox"></label>
              <input type="checkbox" />
            </div>

            <div className={styles.payment}>
              <p>All</p>
              <div className={styles["payment-inner"]}>
                <h3> Total Price: &#8358;{cart.getTotalCost().toFixed(2)}</h3>
                <CustomButton
                  text="Check Out"
                  type="orange"
                  buttonStyle={styles["small-btn"]}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>Thre is no item in your cart!</h1>
      )}
    </div>
  );
};

export default AddToCart;
