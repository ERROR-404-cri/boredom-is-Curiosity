// import ActivityInfoMenuButtons from "../ActivityInfoMenuButtons/ActivityInfoMenuButtons";
import styles from "./ActivityInfoCard.module.css";

const ActivityInfoCard = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.headingContainer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <article className={styles.activitybriefContainer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nobis
        aliquid porro obcaecati ipsum explicabo vero ad. Recusandae modi eum ad
        laborum. Commodi ipsum totam sequi doloribus temporibus ullam suscipit!
      </article>
      <button className={styles.moreInfoBtn}>more info</button>
      {/* <ActivityInfoMenuButtons /> */}
    </section>
  );
};

export default ActivityInfoCard;
