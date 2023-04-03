import { IPopupProps } from "./Popup.types";
import styles from "./Popup.module.css";

//TODO: do this with react Portal as it should be on root level
// FIXME: currntly, it is done with position fixed
const Popup = ({ show, togglePopup, disableBackDropClose }: IPopupProps) => {
  return (
    <div>
      {show && (
        <>
          <div
            className={styles.backdrop}
            onClick={() => {
              !disableBackDropClose && togglePopup();
            }}
          />

          <div className={styles.popupContainer}>
            <Popup.HeaderContent />
            <Popup.MainContent />
          </div>
        </>
      )}
    </div>
  );
};

const PopupHeader = () => <div>header</div>;
const PopupMainContent = () => (
  <div>
    popup popup popup popup popup popuppopup popup popuppopup popup popuppopup
    popup popuppopup popup popuppopup popup popuppopup popup popuppopup popup
    popuppopup popup popuppopup popup popuppopup popup popuppopup popup
    popuppopup popup popuppopup popup popuppopup popup popuppopup popup
    popuppopup popup popuppopup popup popuppopup popup popuppopup popup
    popuppopup popup popuppopup popup popuppopup popup popuppopup popup
    popuppopup popup popuppopup popup popuppopup popup popuppopup popup
    popuppopup popup popuppopup popup popuppopup popup
  </div>
);
Popup.HeaderContent = PopupHeader;
Popup.MainContent = PopupMainContent;

export default Popup;
