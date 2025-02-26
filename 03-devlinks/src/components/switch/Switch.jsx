import styles from "./Switch.module.css";

const Switch = ({ troca, islight }) => {
  return (
    <div onClick={troca} className={islight ? styles.light : ""}>
      <div id={styles.switch}>
        <button></button>
        <span></span>
      </div>
    </div>
  );
};

export default Switch;
