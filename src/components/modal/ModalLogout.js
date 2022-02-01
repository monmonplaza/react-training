import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";

import { StoreContext } from "../../store/StoreContext";
import { setIsConfirm } from "../../store/StoreAction";
import SpinnerBtn from "../widgets/SpinnerBtn.js";
const ModalLogout = () => {
  const { dispatch } = React.useContext(StoreContext);
  const handleClose = (e) => {
    e.preventDefault();
    dispatch(setIsConfirm(false));
  };
  return (
    <>
      <div className="dashmodal modal--yesno">
        <div className="dashmodal__main">
          <div className="dashmodal__header bg--error">
            <h2>Logout</h2>
            <button className="modaldashClose" onClick={handleClose}>
              <BsPlus />
            </button>
          </div>

          <div className="dashmodal__body fixed--height  ">
            <p className="text--center dashmodal__body__msg ">
              <span className="dashmodal__body__icon">
                <RiLogoutBoxLine />
              </span>
              Are you sure you want to logout?
            </p>

            <div className="dashmodal__footer">
              <ul>
                <li>
                  <button
                    className="dashmodal__btn btn--error"
                    disabled={false}
                  >
                    Logout <SpinnerBtn />
                  </button>
                </li>
                <li>
                  <button
                    className="dashmodal__btn btn--gray"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLogout;
