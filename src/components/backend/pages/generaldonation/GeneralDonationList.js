import React from "react";
import LoadMore from "../../../widgets/LoadMore";
import BackHeader from "../../BackHeader";
import SideNav from "../../SideNav";
import GeneralDonationTable from "./GeneralDonationTable";
const GeneralDonationList = () => {
  return (
    <>
      <section className="parentbox">
        <div className="parentbox__wrapper">
          <SideNav />
          <div className="parentbox__main">
            <BackHeader isAdmin="true" />
            <GeneralDonationTable />
            <LoadMore />
          </div>
        </div>
      </section>
    </>
  );
};

export default GeneralDonationList;
