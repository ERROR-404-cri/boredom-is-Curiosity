import { shareActivity } from "../../../../../utils/shareUtil";
import styles from "./ActivityDetailsCard.module.css";
import { IActivityDetailsCardProps } from "./ActivityDetailsCard.types";
import ActivityHeader from "./ActivityHeader/ActivityHeader";
import ActivityInfoList from "./ActivityInfoList/ActivityInfoList";

const ActivityDetailsCard = ({
  activityDetails,
}: IActivityDetailsCardProps) => {
  return (
    <div className={styles.container}>
      <ActivityHeader
        text={activityDetails?.activityName}
        onLikeClickHandler={() => {
          console.log("clicked like handler");
        }}
        onShareClickHandler={async () => {
          const isShared = await shareActivity(activityDetails);
          if (isShared) {
            alert("activity shared");
          }
        }}
      />
      <ActivityInfoList activityDetails={activityDetails} />
    </div>
  );
};

export default ActivityDetailsCard;
