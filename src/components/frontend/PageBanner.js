import React from "react";
import { setIsDonate } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";

const PageBanner = () => {
  const { dispatch } = React.useContext(StoreContext);

  const handleDonate = () => {
    dispatch(setIsDonate(true));
  };

  return (
    <>
      <section className="pagebanner d--grid">
        <div className="pagebanner__content">
          <div className="pagebanner__content__wrapper">
            <h1>
              <span className="text--primary">Give</span> where it's most needed
            </h1>
            <p>
              Give unrestricted gifts that allow Frontline to direct these funds
              where they are most needed. Your giving allows us to continue to
              actively partner with needs of people in the communities we serve.
            </p>

            <button className="btn btn--primary" onClick={handleDonate}>
              Donate Now
            </button>
          </div>
        </div>
        <figure className="pagebanner__img">
          <img src="../images/pagebanner.jpg" alt="page banner" />
        </figure>
      </section>
    </>
  );
};

export default PageBanner;
