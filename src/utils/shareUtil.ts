import { IActivityResponse } from "../features/HomePage/Components/SideContent/ActivityDetailsCard/ActivityDetailsCard.types";

export const share = async (title: string, text: string, url: string) => {
  try {
    if (navigator?.share && typeof navigator?.share === "function") {
      await navigator.share({ title, text, url });
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

export const shareActivity = async (activtyDetails: IActivityResponse) => {
  const { activityName, accessibility, participants, price, type } =
    activtyDetails || {};
  if (!activityName) {
    return false;
  }
  const title = `here is the activity: ${activityName}`;
  const text = ` || easiness: ${accessibility ?? ""} | participants: ${
    participants ?? ""
  } | price: ${price ?? ""} | type: ${type ?? ""} || `;
  const url = document?.location?.href || "";

  const isActivitySharedSuccessFully = await share(title, text, url);
  return isActivitySharedSuccessFully;
};
