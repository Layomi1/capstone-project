import { useState } from "react";
import styles from "./Paystack.module.css";

const Paystack = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [payresult, setPayresult] = useState("");

  return (
    <div className={styles.pay}>
      <h1>Payment Form</h1>
      <form id="paymentForm">
        <div className={styles["form-group"]}>
          <label htmlFor="first-name">First Name*</label>
          <input type="text" id="first-name" />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="last-name">Last Name*</label>
          <input type="text" id="last-name" />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email Address*</label>
          <input type="email" id="email-address" required />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="amount">Amount*</label>
          <input type="tel" id="amount" required />
        </div>

        {/* <div className="form-submit"> */}
        <button
          className={styles.btn}
          type="submit"
          onClick="payWithPaystack()"
        >
          Pay
        </button>
        {/* </div> */}
      </form>
    </div>
  );
};

export default Paystack;
