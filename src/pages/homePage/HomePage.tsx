import { Fragment } from "react";
import ActivityInfoCard from "../../components/ActivityInfoCard/ActivityInfoCard";
// import ActivityInfoMenuButtons from "../../components/ActivityInfoMenuButtons/ActivityInfoMenuButtons";
import SearchBar from "../../components/SearchCard/Card";
import { IHomePage } from "./HomePage.types";
import styles from "./HomePage.module.css";

const HomePage = ({ title = "Boredom is Qriosity" }: IHomePage) => {
  return (
    <Fragment>
      <div className={styles.titleClass}>{title}</div>
      <SearchBar />
      <ActivityInfoCard headingText="dummy" briefText="dummy" CTAText="dummy" />
      {/* <ActivityInfoMenuButtons /> */}
    </Fragment>
  );
};

export default HomePage;
