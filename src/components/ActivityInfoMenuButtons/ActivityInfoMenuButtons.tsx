import {
  AccessibilityIcon,
  ActivityIcon,
  KeyIcon,
  ParticipantsIcon,
} from "../../utils/SvgIconsUtil";
import styles from "./ActivityInfoMenuButtons.module.css";

const ActivityInfoMenuButtons = () => {
  return (
    <section className={styles.container}>
      <button className={styles.InfoMenuBtn}>
        <AccessibilityIcon strokeColor="#b6b8f0" />
      </button>
      <button className={styles.InfoMenuBtn}>
        <ActivityIcon strokeColor="#b6b8f0" />
      </button>
      <button className={`${styles.InfoMenuBtn} ${styles.activeInfoMenuBtn}`}>
        <KeyIcon strokeColor="black" />
      </button>
      <button className={styles.InfoMenuBtn}>
        <ParticipantsIcon strokeColor="#b6b8f0" />
      </button>
    </section>
  );
};

export default ActivityInfoMenuButtons;
