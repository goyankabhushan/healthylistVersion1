import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    <li className={`${styles["css-item"]}`}>
      <span className={styles["css-span"]}>{foodItem}</span>
    </li>
  );
};

export default Item;
