import { FilterIcon } from "../../../../../utils/SvgIconsUtil";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <button className={styles.container}>
      <FilterIcon />
    </button>
  );
};

export default Filter;
