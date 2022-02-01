import React from "react";
import BackHeader from "../../../BackHeader.js";
import SideNav from "../../../SideNav.js";
import ManualDonationTable from "./ManualDonationTable.js";

const ManualDonation = () => {
  return (
    <>
      <section className="parentbox">
        <div className="parentbox__wrapper">
          <SideNav isTab="true" />
          <div className="parentbox__main">
            <BackHeader isAdmin="true" title="Manual Donation" />
            <ManualDonationTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default ManualDonation;
