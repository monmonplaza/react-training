import React from "react";
import BackHeader from "../../BackHeader";
import SideNav from "../../SideNav";
import ProjectTable from "./ProjectTable";

const ProjectList = () => {
  return (
    <>
      <section className="parentbox">
        <div className="parentbox__wrapper">
          <SideNav />
          <div className="parentbox__main">
            <BackHeader title="Project Dashboard" />
            <ProjectTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectList;
