import { useState } from "react";
import styles from "./Paystack.module.css";
import PaystackPop from "@paystack/inline-js";

const Paystack = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  // const publicKey = "pk_test_ebed95db8e8916621f8a60682603fa27a3e3c44f";

  // const config = {
  //   reference: new Date().getTime(),
  //   email: email,
  //   amount: amount * 100, // Paystack requires amount in kobo (100 kobo = 1 NGN)
  //   publicKey: publicKey,
  // };

  // Initialize payment using usePaystackPayment hook
  // const initializePayment = usePaystackPayment(config);

  function handleSubmit(e) {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_ebed95db8e8916621f8a60682603fa27a3e3c44f",
      amount: amount * 100,
      email,
      firstname,
      lastname,
    });
    alert("me");
  }

  return (
    <div className={styles.pay}>
      <h1>Make Payment </h1>
      <form id="paymentForm" onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email-address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="amount">Amount</label>
          <input
            type="tel"
            name="amount"
            id="amount"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        <button className={styles.btn} type="submit">
          Pay with Paystack
        </button>
      </form>
    </div>
  );
};

export default Paystack;
