import React from "react";
import { Link } from "react-router-dom";
import SpinnerBtn from "../../widgets/SpinnerBtn.js";
const ForgotPassword = () => {
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
                <h3>Forgot Password</h3>
                <p>Provide email to continue</p>
              </div>
              <form action="" className="form__login">
                <div className="login__body">
                  <div className="logInput__wrap">
                    <label htmlFor="email">Username / Email</label>
                    <input type="text" name="new-email" disabled />
                    <small className="msg msg--error">Required</small>
                  </div>

                  <div className="logInput__wrap">
                    <button disabled>
                      Reset <SpinnerBtn />
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

export default ForgotPassword;
