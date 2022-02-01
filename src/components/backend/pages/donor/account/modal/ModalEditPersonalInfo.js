import React from "react";

import { BsPlus } from "react-icons/bs";

const ModalEditPersonalInfo = () => {
  return (
    <div className="dashmodal">
      <div className="dashmodal__main">
        <div className="dashmodal__header bg--primary">
          <h2>Update Information</h2>
          <button className="modaldashClose">
            <BsPlus />
          </button>
        </div>

        <div className="dashmodal__body ">
          <form action="" className="dashmodal__form">
            <div className="form__group">
              <label htmlFor="">First Name</label>
              <input type="text" />
              <small className="error--msg">Errror</small>
            </div>
            <div className="form__group">
              <label htmlFor="">Last Name</label>
              <input type="text" />
              <small className="error--msg">Errror</small>
            </div>

            <div className="form__group">
              <label htmlFor="">Email</label>
              <input type="text" />
              <small className="error--msg">Errror</small>
            </div>
            <div className="dashmodal__footer">
              <ul>
                <li>
                  <button
                    type="submit"
                    className="dashmodal__btn btn--primary"
                    //  disabled={loading}
                  >
                    Update
                  </button>
                </li>
                <li>
                  <button
                    type="reset"
                    className="dashmodal__btn btn--gray"
                    //  onClick={handleClose}
                  >
                    Cancel
                  </button>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEditPersonalInfo;
