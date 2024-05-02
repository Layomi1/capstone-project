import styles from "./Subscription.module.css";
import banner_four from "../../assets/banner_four.png";
import Subscribe from "../../utilities/subscribe";
import { useState } from "react";
import BigModal from "../../components/BigModal/BigModal";

// import Backdrop from "../../components/Backdrop/Backdrop";

const Subscription = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <section className={styles.subscribe}>
      <div className="banner">
        <img src={banner_four} alt="advert banner" />
      </div>

      <main>
        <h3>Select a plan to proceed</h3>
        <ul className={styles.card} onClick={() => setModalIsOpen(true)}>
          {Subscribe.map((item, index) => {
            return (
              <li key={index}>
                <p>{item.title}</p>
                <p> &#8358;{item.price}</p>
              </li>
            );
          })}
          {modalIsOpen && (
            <BigModal className={styles["modal-content"]}>
              <p>Your post is under review.</p>
              <p>
                You would be notified after approval this takes us 2-4 hours on
                weekdays, 4-8 hours on Saturdays. All post made on Sunday would
                be treated on Monday
              </p>
            </BigModal>
          )}
          {/* {modalIsOpen && <Backdrop onClick={() => setModalIsOpen(false)} />} */}
        </ul>
      </main>
    </section>
  );
};

export default Subscription;
