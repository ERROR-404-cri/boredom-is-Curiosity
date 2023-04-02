import ActivityInfo from "../ActivityInfo/ActivityInfo";
import { activitySubInfo } from "./ActivityInfoList.consts";
import { IActivityInfoListProps } from "./ActivityInfoList.types";
import styles from "./ActivityInfoList.module.css";
import { getSvgIconComponent } from "../../../../../../utils/SvgIconsUtil"; // TOOD: fix path with @utils/

const ActivityInfoList = ({ activityDetails }: IActivityInfoListProps) => {
  return (
    <div className={styles.container}>
      {activitySubInfo.map((subInfoKey) => {
        //@ts-ignore //TODO: fix
        const info = activityDetails?.[subInfoKey] as string;
        return (
          <ActivityInfo
            key={subInfoKey}
            activityText={info}
            svgIconComponent={getSvgIconComponent(subInfoKey, {
              strokeColor: "teal",
            })}
          />
        );
      })}
    </div>
  );
};

export default ActivityInfoList;
