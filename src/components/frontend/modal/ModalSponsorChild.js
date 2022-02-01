import React from "react";
import { FiPlus } from "react-icons/fi";
import { TiLockClosed } from "react-icons/ti";

import { StoreContext } from "../../../store/StoreContext";
import { setIsDonate } from "../../../store/StoreAction";

const ModalSponsorChild = () => {
  const { dispatch } = React.useContext(StoreContext);
  const [isShow, setIsShow] = React.useState(false);

  const handleShowInstruction = () => {
    setIsShow(true);
  };
  const handleHideInstruction = () => {
    setIsShow(false);
  };

  const handleClose = () => {
    dispatch(setIsDonate(false));
  };
  return (
    <div>
      <section className="modal modal--donation">
        <div className="modal__main">
          <header className="modal__header">
            <button className="btn__close" onClick={handleClose}>
              <FiPlus />
            </button>

            <button className="btn__modal__login">Log In</button>
            <div className="modal__header__content">
              <h2>Mutya the Lovergirl</h2>
            </div>
          </header>
          <form action="">
            <div className="modal__body">
              <div className="modal__block donation--amount">
                <div className="form__group form--amount">
                  <label htmlFor="donation__amount">Donation Amount</label>

                  <small className="error--msg">Error</small>
                </div>

                <div className="donation__radio donation__amt">
                  <ul>
                    <li>
                      <input type="radio" name="donation__amt" />
                      <span>$25</span>
                    </li>

                    <li>
                      <input type="radio" name="donation__amt" />
                      <span>$50</span>
                    </li>
                    <li>
                      <input type="radio" name="donation__amt" />
                      <span>$100</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="modal__block personal--info">
                <div className="modal__block__header">
                  <h3>Personal Information</h3>
                  <p>Please complete below.</p>
                </div>

                <div className="info__user d--flex ">
                  <div className="form__group">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="donation__firstname" />
                    <small className="error--msg">Error</small>
                  </div>
                  <div className="form__group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="donation__lastname" />
                    <small className="error--msg">Error</small>
                  </div>
                </div>

                <div className="form__group">
                  <label htmlFor="">Email</label>
                  <input type="email" name="donation__email" />
                  <small className="error--msg">Error</small>
                </div>

                <div className="form__group">
                  <label htmlFor="">Message</label>
                  <textarea type="email" name="donation__msg"></textarea>
                  <small className="error--msg">Error</small>
                </div>
              </div>

              <div className="modal__block payment--info">
                <div className="modal__block__header">
                  <h3>Payment Method</h3>
                  <p>Please complete below.</p>
                </div>

                <div className="donation__radio donation--payment">
                  <ul>
                    <li>
                      <input type="radio" name="donation__method" />
                      <span>Credit Card</span>
                    </li>
                    <li>
                      <input type="radio" name="donation__method" />
                      <span>Offline Donation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="modal__block payment--info">
                <div className="modal__block__header">
                  <h3>Credit Card Info</h3>
                  <p>Please complete below.</p>
                </div>

                <div className="info__card d--grid">
                  <div className="form__group">
                    <label htmlFor="">Card Number</label>
                    <input type="text" name="donation__cardno" />
                    <small className="error--msg">Error</small>
                  </div>

                  <div className="form__group">
                    <label htmlFor="">CVC</label>
                    <input type="text" name="donation__cvc" />
                    <small className="error--msg">Error</small>
                  </div>

                  <div className="form__group">
                    <label htmlFor="">Card Holder Name</label>
                    <input type="text" name="donation__cardname" />
                    <small className="error--msg">Error</small>
                  </div>

                  <div className="form__group">
                    <label htmlFor="">Expiration </label>
                    <input type="text" name="donation__cardexpiration" />
                    <small className="error--msg">Error</small>
                  </div>
                </div>

                <p className="card__note">
                  <TiLockClosed /> This is a secure SSL encrypted payment.
                </p>
              </div>

              <div className="offline__instruction show">
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
              </div>

              <div className="modal__footer">
                <button className="btn btn--primary">Donate Now</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ModalSponsorChild;
