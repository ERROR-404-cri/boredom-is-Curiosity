import { ICard } from "./Card.types";
import styles from "./Card.module.css";

const Card = ({
  inputBoxPlaceholder = "type or just simply hit search",
  searchCTAText = "search",
}: ICard) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          type="text"
          id="searchBarInput"
          placeholder={inputBoxPlaceholder}
          className={styles.inputClass}
        />
        <button className={styles.searchBarBtn}>{searchCTAText}</button>
      </div>
    </div>
  );
};

export default Card;
