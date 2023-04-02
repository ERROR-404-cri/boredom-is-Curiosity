import styles from "./HomePage.module.css";
import { IHomePage } from "./HomePage.types";
import HomePageLayout from "../../features/HomePage/Layout";

const HomePage = ({ title = "QuestWanderer" }: IHomePage) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleClass}>{title}</div>
      <HomePageLayout />
    </div>
  );
};

export default HomePage;
