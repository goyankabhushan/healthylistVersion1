import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnKeyEnter }) => {
  return (
    <input
      type="text"
      placeholder="Enter Item here"
      className={styles.FoodInput}
      onKeyDown={handleOnKeyEnter}
    />
  );
};
export default FoodInput;
