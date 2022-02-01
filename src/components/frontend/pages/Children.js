import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import CardChild from "../cards/CardChild";

import { StoreContext } from "../../../store/StoreContext";
import ModalGeneralDonation from "../modal/ModalGeneralDonation";
import LoadMore from "../../widgets/LoadMore";
import ModalSponsorChild from "../modal/ModalSponsorChild";

const Children = () => {
  const { store } = React.useContext(StoreContext);
  return (
    <>
      <Header />
      <PageBanner />

      <section className="children">
        <div className="container">
          <div className="card__list  d--flex">
            <CardChild />
          </div>
          <LoadMore />
        </div>
      </section>
      <Footer />
      {/* <ModalGeneralDonation /> */}
      <ModalSponsorChild />
    </>
  );
};

export default Children;
