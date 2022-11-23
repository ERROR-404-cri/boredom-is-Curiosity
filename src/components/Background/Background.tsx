import { Fragment } from "react";
import styles from "./Background.module.css";

const Background = () => {
  return (
    <Fragment>
      <div className={styles.backGroundContainer}></div>
      <div className={styles.backGroundContainer2}></div>
    </Fragment>
  );
};

export default Background;
