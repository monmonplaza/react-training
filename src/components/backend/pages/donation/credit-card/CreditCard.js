import React from "react";
import BackHeader from "../../../BackHeader.js";
import SideNav from "../../../SideNav.js";
import CreditCardTable from "./CreditCardTable.js";

const CreditCard = () => {
  return (
    <>
      <section className="parentbox">
        <div className="parentbox__wrapper">
          <SideNav isTab="true" />
          <div className="parentbox__main">
            <BackHeader isAdmin="true" title="Credit Card Donation" />
            <CreditCardTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default CreditCard;
