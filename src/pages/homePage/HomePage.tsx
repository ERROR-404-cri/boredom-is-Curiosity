import { Fragment } from "react";
import ActivityInfoCard from "../../components/ActivityInfoCard/ActivityInfoCard";
import ActivityInfoMenuButtons from "../../components/ActivityInfoMenuButtons/ActivityInfoMenuButtons";
import SearchBar from "../../components/SearchCard/Card";
import { IHomePage } from "./HomePage.types";

const HomePage = ({ title = "Boredom is Qriosity" }: IHomePage) => {
  return (
    <Fragment>
      <div>{title}</div>
      <SearchBar />
      <ActivityInfoCard headingText="dummy" briefText="dummy" CTAText="dummy" />
      {/* <ActivityInfoMenuButtons /> */}
    </Fragment>
  );
};

export default HomePage;
