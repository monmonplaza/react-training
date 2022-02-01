import React from "react";
import Header from "../Header";
import PageBanner from "../PageBanner";
import Footer from "../Footer";
import CardProject from "../cards/CardProject";
import CardChild from "../cards/CardChild";

import { StoreContext } from "../../../store/StoreContext";
import ModalGeneralDonation from "../modal/ModalGeneralDonation";

import { donationChild } from "./Childrendata";
import { projects } from "./Projectdata";
import { Link } from "react-router-dom";
import { devNavUrl } from "../../helpers/functions-general";
import ModalQuickLogin from "../modal/ModalQuickLogin.js";
const Donate = () => {
  const { store } = React.useContext(StoreContext);
  return (
    <>
      <Header />
      <PageBanner />
      <section className="donationblock">
        <div className="container">
          <div className="donationblock__wrapper">
            <article>
              <h2 className="donationblock__header">Programs & Projects</h2>
              <h3 className="text--center text--primary">
                The Steward Project
              </h3>
              <p>
                For the past 10 years, Frontline Christian Academy has been
                operating in a retro-fitted warehouse, which can no longer be
                expanded or substantially improved. The Steward Project’s goals
                are twofold; to provide a better learning experience for current
                and future students, and to increase our capacity to serve
                marginalized communities through a business model that allows
                the school itself to become the primary sponsor of the
                educational, and living needs of underprivileged children.
              </p>
            </article>
            <div className="card__list d--flex">
              <div className="card__list d--flex">
                <div className="card__item">
                  <h4 className="text--primary">General Giving</h4>
                  <figure>
                    <img src="../images/projects/prj_general.jpg" alt="123" />
                    <div className="bar">
                      <div
                        className=""
                        style={{ clipPath: "inset(0px 0px 0px 50%)" }}
                      ></div>
                      <div className="">&nbsp;</div>
                    </div>
                  </figure>
                  <p>
                    Give unrestricted gifts that allow Frontline Christian
                    Academy to direct these funds where they are most needed in
                    the Steward Project. This will usually go towards building
                    materials and manpower, and other direct construction costs.
                  </p>
                  <button className="btn btn--primary">Donate Now</button>
                </div>

                <div className="card__item">
                  <h4 className="text--primary">Build A Classroom</h4>
                  <figure>
                    <img src="../images/projects/prj_classroom.jpg" alt="123" />
                    <div className="bar">
                      <div
                        className="pct__label__front"
                        style={{ clipPath: "inset(0px 0px 0px 50%)" }}
                      >
                        50% Completed
                      </div>
                      <div className="pct__label__back">50% Completed</div>
                    </div>
                  </figure>
                  <p>
                    Larger gifts can cover the construction of an entire
                    classroom, which cost $10,000US a piece. You can sponsor
                    one, or a percentage of it.
                  </p>
                  <button className="btn btn--primary">Donate Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <hr />
      </div>
      <section className="donationblock ">
        <div className="container">
          <div className="donationblock__wrapper">
            <h2 className="donationblock__header">
              Other Programs &amp; Projects
            </h2>
            <div className="card__list  d--flex">
              <div className="card__list d--flex">
                <div className="card__item">
                  <h4 className="text--primary">General Giving</h4>
                  <figure>
                    <img src="../images/projects/prj_general.jpg" alt="123" />
                    <div className="bar">
                      <div
                        className=""
                        style={{ clipPath: "inset(0px 0px 0px 50%)" }}
                      ></div>
                      <div className="">&nbsp;</div>
                    </div>
                  </figure>
                  <p>
                    Give unrestricted gifts that allow Frontline Christian
                    Academy to direct these funds where they are most needed in
                    the Steward Project. This will usually go towards building
                    materials and manpower, and other direct construction costs.
                  </p>
                  <button className="btn btn--primary">Donate Now</button>
                </div>
                <div className="card__item">
                  <h4 className="text--primary">Build A Classroom</h4>
                  <figure>
                    <img src="../images/projects/prj_classroom.jpg" alt="123" />
                    <div className="bar">
                      <div
                        className="pct__label__front"
                        style={{ clipPath: "inset(0px 0px 0px 50%)" }}
                      >
                        50% Completed
                      </div>
                      <div className="pct__label__back">50% Completed</div>
                    </div>
                  </figure>
                  <p>
                    Larger gifts can cover the construction of an entire
                    classroom, which cost $10,000US a piece. You can sponsor
                    one, or a percentage of it.
                  </p>
                  <button className="btn btn--primary">Donate Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <hr />
      </div>

      <section className="donationblock ">
        <div className="container">
          <div className="donationblock__wrapper">
            <h2 className="donationblock__header">Child Sponsorship</h2>
            <div className="card__list  d--flex">
              <CardChild />
            </div>
          </div>

          <div className="goto__children">
            <a href={`${devNavUrl}/children`} className="goto__children">
              View All Children
            </a>
          </div>
        </div>
      </section>
      <Footer />

      {store.isDonate && <ModalGeneralDonation />}
      {/* <ModalQuickLogin /> */}
    </>
  );
};

export default Donate;
