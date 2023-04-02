import { Fragment } from "react";
import HomePage from "./pages/HomePage/HomePage";
import styles from "./App.module.css";

const App = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <HomePage />
      </div>
    </Fragment>
  );
};

export default App;
