import HomePageMainContent from "../Components/MainContent";
import HomePageSideContent from "../Components/SideContent";
import styles from "./style.module.css";

const HomePageLayout = () => {
  return (
    <div className={styles.container}>
      <HomePageMainContent />
      <HomePageSideContent />
    </div>
  );
};

export default HomePageLayout;
