import { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "../NavBar/MenuItems/Menuitems";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <>
      <ul
        onClick={handleClick}
        className={`${styles["dropdown-menu"]} ${click ? styles.clicked : ""}`}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      ;
    </>
  );
};

export default Dropdown;
