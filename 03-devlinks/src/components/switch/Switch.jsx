import styles from "./Switch.module.css";

const Switch = ({ troca, islight }) => {
  return (
    <div  className={islight ? styles.light : ""}>
      <div id={styles.switch} onClick={troca}>
        <button></button>
        <span></span>
      </div>
    </div>
  );
};

export default Switch;
