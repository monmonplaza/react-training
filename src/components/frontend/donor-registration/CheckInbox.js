import React from "react";
import { Link } from "react-router-dom";
import SpinnerBtn from "../../widgets/SpinnerBtn.js";
const CheckInbox = () => {
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

              <div className="login__welcome text--center">
                <h3>Check your Inbox</h3>
              </div>

              <article className="login__content">
                <p>Please check your registered email for verification</p>
                <Link to="/">Go back to login</Link>
              </article>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckInbox;
