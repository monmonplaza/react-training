import React from "react";
import { FcSimCardChip } from "react-icons/fc";
import { RiEdit2Fill } from "react-icons/ri";
import { FaCcPaypal, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import ModalEditPersonalInfo from "./modal/ModalEditPersonalInfo.js";
import ModalEditCreditCard from "./modal/ModalEditCreditCard.js";

const DonorAccountInfo = () => {
  return (
    <>
      <div className="donor">
        <div className="donor__block donor--information">
          <div className="donor__block__header">
            <h3>Personal Information</h3>
            <button>
              <RiEdit2Fill /> Edit
            </button>
          </div>

          <div className="donor__block__body">
            <div className="grid-2">
              <div className="info__group">
                <h4>First Name</h4>
                <p>Loverboy</p>
              </div>
              <div className="info__group">
                <h4>Last Name</h4>
                <p>Loverboy</p>
              </div>
            </div>

            <div className="info__group">
              <h4>Email</h4>
              <p>Loverboy@ert.com</p>
            </div>
          </div>
        </div>

        <div className="donor__block donor--card">
          <div className="donor__block__header">
            <h3>Card Information</h3>
            <button>
              <RiEdit2Fill /> Edit
            </button>
          </div>

          <div className="donor__block__body">
            <div className="card">
              <div className="card__wrapper">
                <div className="card__icon">
                  <FcSimCardChip />
                </div>

                <div className="card__group card--number">
                  <h5>Card Number</h5>
                  <p>**** **** **** 4311</p>
                </div>
                <div className="card__group card--name">
                  <h5>Cardholder Name</h5>
                  <p>Loverboy Lover</p>
                </div>
                <div className="card__meta d--flex">
                  <div className="d--flex">
                    <div className="card__group">
                      <h5>Expiration</h5>
                      <p>11/22</p>
                    </div>

                    <div className="card__group">
                      <h5>CVC</h5>
                      <p>112</p>
                    </div>
                  </div>
                  <div className="card__group">
                    <ul>
                      <li>
                        <FaCcVisa />
                      </li>

                      <li>
                        <FaCcMastercard />
                      </li>
                      <li>
                        <SiAmericanexpress />
                      </li>
                      <li>
                        <FaCcPaypal />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ModalEditPersonalInfo /> */}
      {/* <ModalEditCreditCard /> */}
    </>
  );
};

export default DonorAccountInfo;
