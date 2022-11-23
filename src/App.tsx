import { Fragment } from "react";
import Background from "./components/Background/Background";
import HomePage from "./pages/homePage/HomePage";
import styles from "./App.module.css";

const App = () => {
  return (
    <Fragment>
      <Background />
      <div className={styles.childContainer}>
        <HomePage />
      </div>
    </Fragment>
  );
};

export default App;
