import CustomButton from "../CustomButton/CustomButton";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { useState, useRef, useEffect, useContext } from "react";
import { ProductsContext } from "../../Context/ProductContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openNote, setIsOpenNote] = useState(false);
  const cart = useContext(ProductsContext);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function showNote() {
    setIsOpenNote(!openNote);
  }

  const noteListRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (noteListRef.current && !noteListRef.current.contains(e.target)) {
        setIsOpenNote(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.navbar}>
      <ul
        className={`${styles["nav-lists"]} ${
          isMenuOpen ? styles["show-menu"] : styles[""]
        }`}
      >
        <li>
          <Link to="/sell">
            <CustomButton
              type="orange"
              text="Sell Something?"
              className={styles.button}
              buttonStyle={styles["sell-btn"]}
            />
          </Link>
        </li>

        <li>
          <Link to="/donate">
            <CustomButton
              type="orange"
              text="Donate"
              buttonStyle={styles["donate-btn"]}
            />
          </Link>
        </li>

        <li>
          <Link to="/login">
            <CustomButton
              type="teal"
              text="Login"
              buttonStyle={styles["login-btn"]}
            />
          </Link>
        </li>

        <li>
          <Link to="/account">
            <CustomButton
              type="teal"
              text="Account"
              buttonStyle={styles["account-btn"]}
            />
          </Link>
        </li>
      </ul>

      {/* menu icon */}
      <RiMenuLine className={styles.menu} onClick={toggleMenu} />

      <div className={styles["nav-icons"]}>
        <Link to="/cart" className={styles.basket}>
          <svg
            width="56"
            height="66"
            viewBox="0 0 56 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8 7.16503V10.0296H52.2667V15.7002L48.125 25.785H15.6254L10.9587 0H0V2.86461H7.70793L12.3746 28.6496H50.8629L56 16.1408V7.16503H16.8ZM18.7815 31.5415C16.8019 31.5433 14.904 32.1474 13.5042 33.2215C12.1044 34.2956 11.3171 35.7518 11.3148 37.2708C11.3148 38.7903 12.1015 40.2475 13.5017 41.322C14.902 42.3964 16.8012 43 18.7815 43C20.7617 43 22.6609 42.3964 24.0612 41.322C25.4615 40.2475 26.2481 38.7903 26.2481 37.2708C26.2459 35.7518 25.4585 34.2956 24.0587 33.2215C22.659 32.1474 20.7611 31.5433 18.7815 31.5415ZM18.7815 40.1354C18.0431 40.1354 17.3213 39.9674 16.7073 39.6526C16.0934 39.3378 15.6149 38.8905 15.3323 38.367C15.0498 37.8436 14.9758 37.2676 15.1199 36.7119C15.2639 36.1562 15.6195 35.6458 16.1416 35.2452C16.6637 34.8446 17.3289 34.5717 18.0531 34.4612C18.7773 34.3507 19.528 34.4074 20.2102 34.6242C20.8923 34.841 21.4754 35.2082 21.8856 35.6793C22.2958 36.1504 22.5148 36.7042 22.5148 37.2708C22.5136 38.0302 22.1199 38.7583 21.42 39.2954C20.7202 39.8324 19.7712 40.1345 18.7815 40.1354ZM44.9148 31.5415C42.9352 31.5433 41.0373 32.1474 39.6376 33.2215C38.2378 34.2956 37.4504 35.7518 37.4481 37.2708C37.4481 38.7903 38.2348 40.2475 39.6351 41.322C41.0353 42.3964 42.9345 43 44.9148 43C46.8951 43 48.7943 42.3964 50.1945 41.322C51.5948 40.2475 52.3815 38.7903 52.3815 37.2708C52.3792 35.7518 51.5919 34.2956 50.1921 33.2215C48.7923 32.1474 46.8944 31.5433 44.9148 31.5415ZM44.9148 40.1354C44.1764 40.1354 43.4546 39.9674 42.8407 39.6526C42.2267 39.3378 41.7482 38.8905 41.4657 38.367C41.1831 37.8436 41.1092 37.2676 41.2532 36.7119C41.3973 36.1562 41.7528 35.6458 42.2749 35.2452C42.7971 34.8446 43.4623 34.5717 44.1865 34.4612C44.9107 34.3507 45.6613 34.4074 46.3435 34.6242C47.0257 34.841 47.6087 35.2082 48.019 35.6793C48.4292 36.1504 48.6481 36.7042 48.6481 37.2708C48.647 38.0302 48.2533 38.7583 47.5534 39.2954C46.8535 39.8324 45.9046 40.1345 44.9148 40.1354Z"
              fill="black"
            />
            <path
              d="M16.151 62.33C14.567 62.33 13.2177 61.9853 12.103 61.296C10.9883 60.5993 10.134 59.6313 9.54 58.392C8.95333 57.1527 8.66 55.7153 8.66 54.08C8.66 52.4447 8.95333 51.0073 9.54 49.768C10.134 48.5287 10.9883 47.5643 12.103 46.875C13.2177 46.1783 14.567 45.83 16.151 45.83C17.977 45.83 19.4877 46.292 20.683 47.216C21.8857 48.14 22.7217 49.383 23.191 50.945L20.859 51.572C20.551 50.4647 20.001 49.5957 19.209 48.965C18.4243 48.3343 17.405 48.019 16.151 48.019C15.029 48.019 14.094 48.272 13.346 48.778C12.598 49.284 12.0333 49.9917 11.652 50.901C11.278 51.8103 11.091 52.87 11.091 54.08C11.0837 55.29 11.267 56.3497 11.641 57.259C12.0223 58.1683 12.587 58.876 13.335 59.382C14.0903 59.888 15.029 60.141 16.151 60.141C17.405 60.141 18.4243 59.8257 19.209 59.195C20.001 58.557 20.551 57.688 20.859 56.588L23.191 57.215C22.7217 58.777 21.8857 60.02 20.683 60.944C19.4877 61.868 17.977 62.33 16.151 62.33ZM28.9653 62.33C28.0853 62.33 27.3483 62.1687 26.7543 61.846C26.1603 61.516 25.7093 61.0833 25.4013 60.548C25.1006 60.0053 24.9503 59.4113 24.9503 58.766C24.9503 58.1647 25.0566 57.6367 25.2693 57.182C25.482 56.7273 25.7973 56.3423 26.2153 56.027C26.6333 55.7043 27.1466 55.444 27.7553 55.246C28.2833 55.092 28.881 54.9563 29.5483 54.839C30.2156 54.7217 30.916 54.6117 31.6493 54.509C32.39 54.4063 33.1233 54.3037 33.8493 54.201L33.0133 54.663C33.028 53.7317 32.83 53.0423 32.4193 52.595C32.016 52.1403 31.3193 51.913 30.3293 51.913C29.706 51.913 29.134 52.0597 28.6133 52.353C28.0926 52.639 27.7296 53.1157 27.5243 53.783L25.3793 53.123C25.6726 52.1037 26.23 51.2933 27.0513 50.692C27.88 50.0907 28.98 49.79 30.3513 49.79C31.4146 49.79 32.3386 49.9733 33.1233 50.34C33.9153 50.6993 34.4946 51.2713 34.8613 52.056C35.052 52.4447 35.1693 52.8553 35.2133 53.288C35.2573 53.7207 35.2793 54.1863 35.2793 54.685V62H33.2443V59.283L33.6403 59.635C33.149 60.5443 32.522 61.2227 31.7593 61.67C31.004 62.11 30.0726 62.33 28.9653 62.33ZM29.3723 60.449C30.025 60.449 30.586 60.3353 31.0553 60.108C31.5246 59.8733 31.9023 59.5763 32.1883 59.217C32.4743 58.8577 32.6613 58.4837 32.7493 58.095C32.874 57.743 32.9436 57.347 32.9583 56.907C32.9803 56.467 32.9913 56.115 32.9913 55.851L33.7393 56.126C33.0133 56.236 32.3533 56.335 31.7593 56.423C31.1653 56.511 30.6263 56.599 30.1423 56.687C29.6656 56.7677 29.2403 56.8667 28.8663 56.984C28.551 57.094 28.2686 57.226 28.0193 57.38C27.7773 57.534 27.583 57.721 27.4363 57.941C27.297 58.161 27.2273 58.4287 27.2273 58.744C27.2273 59.052 27.3043 59.338 27.4583 59.602C27.6123 59.8587 27.847 60.064 28.1623 60.218C28.4776 60.372 28.881 60.449 29.3723 60.449ZM38.1357 62V50.12H40.1817V53.002L39.8957 52.628C40.0424 52.2467 40.233 51.8983 40.4677 51.583C40.7024 51.2603 40.9737 50.9963 41.2817 50.791C41.5824 50.571 41.916 50.4023 42.2827 50.285C42.6567 50.1603 43.038 50.087 43.4267 50.065C43.8154 50.0357 44.1894 50.054 44.5487 50.12V52.276C44.16 52.1733 43.7274 52.144 43.2507 52.188C42.7814 52.232 42.3487 52.3823 41.9527 52.639C41.5787 52.881 41.2817 53.1743 41.0617 53.519C40.849 53.8637 40.695 54.2487 40.5997 54.674C40.5044 55.092 40.4567 55.5357 40.4567 56.005V62H38.1357ZM53.4415 62C52.6935 62.1467 51.9602 62.209 51.2415 62.187C50.5228 62.165 49.8812 62.0257 49.3165 61.769C48.7518 61.5123 48.3265 61.109 48.0405 60.559C47.7838 60.0677 47.6445 59.569 47.6225 59.063C47.6078 58.5497 47.6005 57.9703 47.6005 57.325V46.82H49.9105V57.215C49.9105 57.6917 49.9142 58.106 49.9215 58.458C49.9362 58.81 50.0132 59.107 50.1525 59.349C50.4165 59.8037 50.8345 60.064 51.4065 60.13C51.9858 60.1887 52.6642 60.163 53.4415 60.053V62ZM45.3235 51.968V50.12H53.4415V51.968H45.3235Z"
              fill="black"
            />
          </svg>
          <span className={styles.count}>{cart.cartItemsCount}</span>
        </Link>

        {/* bell */}
        <div>
          <svg
            className={styles.notify}
            onClick={showNote}
            width="43"
            height="44"
            viewBox="0 0 43 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43 36.5H0V32.5H2.15V18.562C2.15 8.586 10.8145 0.5 21.5 0.5C32.1855 0.5 40.85 8.586 40.85 18.562V32.5H43V36.5ZM6.45 32.5H36.55V18.562C36.55 10.796 29.8119 4.5 21.5 4.5C13.1881 4.5 6.45 10.796 6.45 18.562V32.5ZM16.125 38.5H26.875C26.875 39.8261 26.3087 41.0979 25.3007 42.0355C24.2927 42.9732 22.9255 43.5 21.5 43.5C20.0745 43.5 18.7073 42.9732 17.6993 42.0355C16.6913 41.0979 16.125 39.8261 16.125 38.5Z"
              fill="black"
            />
          </svg>
          <span className={styles.note}>
            <ul
              ref={noteListRef}
              className={`${styles["note-lists"]} ${
                openNote ? styles["show-note"] : styles[""]
              }`}
            >
              <li>Your Ad is under review</li>
              <li>Your Ad has been approved</li>
              <li>100 people viewed your ad</li>
              <li>
                Congratulation on your sale! Payment is frozen for 24 hours
              </li>
              <li>Payment has been made into your bank account</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
