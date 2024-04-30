import styles from "./Note.module.css";
import { useState } from "react";

const Note = () => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <>
      <ul
        onClick={handleClick}
        // className={`${styles["note-lists"]} ${
        //   click ? styles["show-note"]  : styles[""]

        // }`}
        className={`${styles["note-lists"]} ${
          click ? styles.clicked : "show-note"
        }`}
      >
        <li>Your Ad is under review</li>
        <li>Your Ad has been approved</li>
        <li>100 people viewed your ad</li>
        <li>Congratulation on your sale! Payment is frozen for 24 hours</li>
        <li>Payment has been made into your bank account</li>
      </ul>
    </>
  );
};

export default Note;
