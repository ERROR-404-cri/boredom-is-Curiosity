import { useState } from "react";
import { FilterIcon } from "../../../../../utils/SvgIconsUtil";
import styles from "./Filter.module.css";
import Popup from "../../../../../common/Popup/Popup";

const Filter = () => {
  const [openFilterPopup, setOpenFilterPopup] = useState(false);

  const toggleFilterPopup = () => {
    setOpenFilterPopup((prevState) => !prevState);
  };

  return (
    <>
      <button className={styles.container} onClick={toggleFilterPopup}>
        <FilterIcon />
      </button>
      <Popup show={openFilterPopup} togglePopup={toggleFilterPopup} />
    </>
  );
};

export default Filter;
