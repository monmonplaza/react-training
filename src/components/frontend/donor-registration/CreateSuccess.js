import React from "react";
import { Link } from "react-router-dom";
import SpinnerBtn from "../../widgets/SpinnerBtn.js";
const CreateSuccess = () => {
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
                <h3>Welcome Aboard!</h3>
              </div>

              <article className="login__content">
                <p>
                  Your account has been successfully verified. You can now log
                  in using your account
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

export default CreateSuccess;
