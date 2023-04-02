import { IActivityInfoProps } from "./ActivityInfo.types";
import styles from "./ActivityInfo.module.css";

const ActivityInfo = ({
  svgIconComponent,
  activityText,
}: IActivityInfoProps) => {
  return (
    <div className={styles.container}>
      {svgIconComponent}
      <p>{activityText}</p>
    </div>
  );
};

export default ActivityInfo;
