import React from "react";
import BackHeader from "../../../BackHeader.js";
import DonorSidebar from "../../../DonorSideNav.js";
import SponsorshipTable from "./SponsorshipTable.js";

const SponsorshipList = () => {
  const [isAdmin, setIsAdmin] = React.useState(false);

  return (
    <>
      <section className="parentbox">
        <div className="parentbox__wrapper">
          <DonorSidebar isTab="true" />
          <div className="parentbox__main">
            <BackHeader isAdmin={isAdmin} title="Sponsorship Active" />
            <SponsorshipTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default SponsorshipList;
