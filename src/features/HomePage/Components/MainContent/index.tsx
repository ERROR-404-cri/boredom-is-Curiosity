import Filter from "./Filter/Filter";
import Heading from "./Heading/Heading";
import { textData } from "./Heading/Heading.consts";
import SearchActivityButton from "./SearchActivityButton/SearchActivityButton";
import styles from "./style.module.css";

const HomePageMainContent = () => {
  return (
    <div className={styles.container}>
      <Heading texts={textData} />
      <p className={styles.searchBtnWithFilterContainer}>
        <Filter />
        <SearchActivityButton btnCtaText="Get Activity" />
      </p>
    </div>
  );
};

export default HomePageMainContent;
