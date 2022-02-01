import React from "react";
import { BsPlus } from "react-icons/bs";
import { VscError } from "react-icons/vsc";
import { setError } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";

const ModalError = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setError(false));
  };

  return (
    <>
      <div className="dashmodal modal--yesno" style={{ zIndex: "9999999" }}>
        <div className="dashmodal__main">
          <div className="dashmodal__header bg--error">
            <h2>Error</h2>
            <button className="modaldashClose">
              <BsPlus />
            </button>
          </div>

          <div className="dashmodal__body fixed--height  ">
            <p className="text--center dashmodal__body__msg ">
              <span className="dashmodal__body__icon">
                <VscError />
              </span>
              {store.message}
            </p>

            <div className="dashmodal__footer">
              <ul>
                <li>
                  <button
                    className="dashmodal__btn btn--error"
                    onClick={handleClose}
                  >
                    Close
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

export default ModalError;
