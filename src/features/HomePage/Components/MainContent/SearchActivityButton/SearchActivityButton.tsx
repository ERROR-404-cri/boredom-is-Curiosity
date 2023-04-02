import { ISearchActivityButtonProps } from "./SearchActivityButton.types";
import styles from "./SearchActivityButton.module.css";

const SearchActivityButton = ({ btnCtaText }: ISearchActivityButtonProps) => {
  return <button className={styles.btnContainer}>{btnCtaText}</button>;
};

export default SearchActivityButton;
