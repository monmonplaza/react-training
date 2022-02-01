import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer.js";
import Header from "../Header.js";

const Thankyou = () => {
  return (
    <div>
      <Header />
      <section className="thankyou">
        <div className="container">
          <div className="thankyou__wrapper">
            <figure className="thankyou__img text--center">
              <img src="../images/thankyou.png" alt="thankyou icon" />
            </figure>

            <article className="thankyou__content">
              <p>
                In order to make an offline donation we ask that you please
                follow these instructions:
              </p>

              <ol>
                <li>
                  Make a check payable to "Philippine Frontline Ministries,
                  Inc."
                </li>
                <li>
                  On the memo line of the check, please indicate that the
                  donation is for "FCA General"
                </li>
                <li>
                  Please mail your check to:
                  <p className="fca__address">
                    Philippine Frontline Ministries, Inc.
                    <br />
                    PO Box 208,
                    <br />
                    Sandwich IL 60548
                  </p>
                </li>
              </ol>

              <p>
                All contributions will be gratefully acknowledged and are tax
                deductible.
              </p>
            </article>

            <ul className="thankyou__actions">
              <li>
                <Link to="/" className="btn__sm btn__sm--primary">
                  Other way to help
                </Link>
              </li>

              <li>
                <Link to="/" className="btn__sm btn__sm--outline">
                  Sponsor more kids
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Thankyou;
