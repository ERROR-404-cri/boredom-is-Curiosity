import { IHeadingProps } from "./Heading.types";
import styles from "./Heading.module.css";

const Heading = ({ texts = [] }: IHeadingProps) => {
  return (
    <div className={styles.container}>
      {texts.map((textObj) => {
        return <p key={textObj?.id}>{textObj?.text}</p>;
      })}
    </div>
  );
};

export default Heading;
