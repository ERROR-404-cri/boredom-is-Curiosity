import { IActivityHeaderProps } from "./ActivityHeader.types";
import styles from "./ActivityHeader.module.css";
import { getSvgIconComponent } from "../../../../../../utils/SvgIconsUtil";
import { useState } from "react";

const ActivityHeader = ({
  text,
  onLikeClickHandler,
  onShareClickHandler,
}: IActivityHeaderProps) => {
  const [isActivityLiked, setIsActivityLiked] = useState(false);

  const likeHandler = () => {
    setIsActivityLiked((prevState) => !prevState);
    onLikeClickHandler();
  };

  return (
    <div className={styles.container}>
      <p>{text}</p>
      <div className={styles.iconContainer}>
        <p onClick={likeHandler} className={styles.icon}>
          {getSvgIconComponent(`${isActivityLiked ? "filledLike" : "like"}`, {
            strokeColor: "#ff6347",
          })}
        </p>

        <p onClick={onShareClickHandler} className={styles.icon}>
          {getSvgIconComponent("share", {
            strokeColor: "teal",
          })}
        </p>
      </div>
    </div>
  );
};

export default ActivityHeader;
