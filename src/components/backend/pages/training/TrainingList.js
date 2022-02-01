import React from "react";
import BackHeader from "../../BackHeader";
import SideNav from "../../SideNav";
import TrainingTable from "./TrainingTable";

const TrainingList = () => {
  return (
    <>
      <section className="parentbox">
        <div className="parentbox__wrapper">
          <SideNav />
          <div className="parentbox__main">
            <BackHeader title="Project Dashboard" />
            <TrainingTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingList;
