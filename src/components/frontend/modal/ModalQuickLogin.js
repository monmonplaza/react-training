import React from "react";
import { FiPlus } from "react-icons/fi";
import { TiLockClosed } from "react-icons/ti";
import { Link } from "react-router-dom";

const ModalQuickLogin = () => {
  return (
    <>
      <section className="modal modal--donation">
        <div className="modal__main">
          <header className="modal__header">
            <button className="btn__close">
              <FiPlus />
            </button>

            <div className="modal__header__content text--center">
              <h2>
                Sponsorship <span>Child Name</span>
              </h2>
              <p>The help you goes directly go to the child needs</p>
            </div>
          </header>
          <form action="">
            <div className="modal__body modal--login">
              <ul className="modal__login__select">
                <li>
                  <Link to="/">Login or Create an Account</Link>
                </li>
                <li>
                  <Link to="/">Continue as Guest</Link>
                </li>
              </ul>
              <div className="modal__footer modal--login">
                <button className="dashmodal__btn btn--gray">Close</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ModalQuickLogin;
