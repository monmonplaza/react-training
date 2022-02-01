import React from "react";
import BackHeader from "../../../BackHeader.js";
import DonorSideNav from "../../../DonorSideNav.js";
import DonorAccountInfo from "./DonorAccountInfo.js";

const DonorAccount = () => {
  const [isAdmin, setIsAdmin] = React.useState(false);

  return (
    <>
      <section className="parentbox">
        <div className="parentbox__wrapper">
          <DonorSideNav />
          <div className="parentbox__main">
            <BackHeader isAdmin={isAdmin} title="Donor Account" />
            <DonorAccountInfo />
          </div>
        </div>
      </section>
    </>
  );
};

export default DonorAccount;
