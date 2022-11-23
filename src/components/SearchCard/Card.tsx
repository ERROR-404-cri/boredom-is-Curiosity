import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      {/* <label htmlFor="searchBarInput">search something</label> */}
      <div className={styles.searchBar}>
        <input
          type="text"
          id="searchBarInput"
          placeholder="type or just simply hit search"
          className={styles.inputClass}
        />
        <button className={styles.searchBarBtn}>search</button>
      </div>
    </div>
  );
};

export default Card;
