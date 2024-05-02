import styles from "./BigModal.module.css";

const BigModal = ({ children }) => {
  return (
    <div className={styles["big-modal"]}>
      <div className="content">{children}</div>
    </div>
  );
};

export default BigModal;
