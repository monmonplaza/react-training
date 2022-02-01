import React from "react";
import { Link } from "react-router-dom";
const ForgotPasswordSuccess = () => {
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
                <h3>All Set!</h3>
              </div>

              <article className="login__content">
                <p>
                  Your password has been successfully reset. You can now login
                  using your new password
                </p>
                <Link to="/">Proceed to Login</Link>
              </article>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordSuccess;
