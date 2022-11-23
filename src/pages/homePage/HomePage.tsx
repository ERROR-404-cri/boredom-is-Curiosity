import { Fragment } from "react";
import ActivityInfoCard from "../../components/ActivityInfoCard/ActivityInfoCard";
import ActivityInfoMenuButtons from "../../components/ActivityInfoMenuButtons/ActivityInfoMenuButtons";
import Card from "../../components/SearchCard/Card";

const HomePage = () => {
  return (
    <Fragment>
      <div>HomePage</div>
      <Card />
      <ActivityInfoCard />
      <ActivityInfoMenuButtons />
    </Fragment>
  );
};

export default HomePage;
