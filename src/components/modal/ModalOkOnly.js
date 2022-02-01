import React from "react";
import { BsCheckCircle, BsPlus } from "react-icons/bs";

const ModalOkOnly = ({ message }) => {
  return (
    <div>
      <div className="dashmodal">
        <div className="dashmodal__main">
          <div className="dashmodal__header bg--primary">
            <h2>Success</h2>
            <button className="modaldashClose">
              <BsPlus />
            </button>
          </div>

          <div className="dashmodal__body fixed--height modal--okonly">
            <p className="text--center dashmodal__body__msg">
              <span className="dashmodal__body__icon">
                <BsCheckCircle />
              </span>
              {message}
            </p>
          </div>

          <div className="dashmodal__footer">
            <ul>
              <li>
                <button className="dashmodal__btn btn--primary">Okay</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOkOnly;
