import React from "react";
import { Link } from "react-router-dom";
import SpinnerBtn from "../../widgets/SpinnerBtn.js";
const CreatePassword = () => {
  return (
    <>
      <div className="login">
        <div className="login__main ">
          <form action="" className="login__form">
            <div>
              <div className="login__header">
                <figure>
                  <img src="../images/logo.png" alt="Main Logo" />
                </figure>
              </div>

              <div className="login__welcome">
                <h3>Create Password</h3>
                <p>Please provide new password</p>
              </div>
              <form action="" className="form__login">
                <div className="login__body">
                  <div className="logInput__wrap">
                    <label htmlFor="new-password">New Password</label>
                    <input type="password" name="new-password" disabled />
                    <small className="msg msg--error">Required</small>
                  </div>

                  <div className="logInput__wrap">
                    <label htmlFor="confirm-password">Password</label>
                    <input type="password" name="confirm-password" />
                    <small className="msg msg--error">Required</small>
                  </div>

                  <div className="logInput__wrap">
                    <button disabled>
                      Submit <SpinnerBtn />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePassword;
