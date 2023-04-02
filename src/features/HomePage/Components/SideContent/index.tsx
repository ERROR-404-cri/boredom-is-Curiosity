import ActivityDetailsCard from "./ActivityDetailsCard/ActivityDetailsCard";
import styles from "./style.module.css";

const activityData = {
  key: "1",
  participants: 1,
  price: 0.6,
  type: "diy",
  accessibility: 0.4,
  activityName:
    "lorem epsum fadas eefe efef sdfsfsdf fqqdqe. qeqeq qeqeq dsfsdfsd sdfsdfs.",
};

const HomePageSideContent = () => {
  return (
    <div className={styles.container}>
      <ActivityDetailsCard activityDetails={activityData} />
    </div>
  );
};

export default HomePageSideContent;
