import styles from "./Cart.module.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import CartItem from "../../components/CartItem/CartItem";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../Context/ProductContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart, counter, setCounter } = useContext(ProductsContext);
  const [getTotalCost, setGetTotalCost] = useState(0);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
    setCounter(data ? data.length : 0);

    // Calculate total cost price
    if (data && data.length > 0) {
      const getTotalCost = data.reduce(
        (acc, current) => acc + current.price,
        0
      );
      setGetTotalCost(getTotalCost);
    } else {
      setGetTotalCost(0);
    }
  }, [setCart, setCounter]);

  return (
    <div className={styles.cart}>
      <h3 className={styles.title}>Cart</h3>

      {counter > 0 ? (
        <>
          {cart.map((currentProduct, idx) => (
            <li key={idx}>
              <CartItem
                id={currentProduct.id}
                title={currentProduct.title}
                thumbnail={currentProduct.thumbnail}
                price={currentProduct.price}
              />
            </li>
          ))}

          <div className={styles.all}>
            <div className={styles.input}>
              <label className={styles.container}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
              </label>
            </div>

            <div className={styles.payment}>
              <p>All</p>
              <div className={styles["payment-inner"]}>
                <h3> Total Price: &#8358;{getTotalCost.toFixed(2)}</h3>
                <Link to="/pay">
                  <CustomButton
                    text="Check Out"
                    type="orange"
                    buttonStyle={styles["small-btn"]}
                  />
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>There is no item in your cart!</h1>
      )}
    </div>
  );
};

export default Cart;
