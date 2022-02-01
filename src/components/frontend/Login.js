import React from "react";
import { Link } from "react-router-dom";
import SpinnerBtn from "../widgets/SpinnerBtn.js";

const Login = () => {
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
                <h3>Welcome</h3>
                <p>Sign in to continue</p>
              </div>
              <form action="" className="form__login">
                <div className="login__body">
                  <div className="logInput__wrap">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" disabled />
                    <small className="msg msg--error">Required</small>
                  </div>

                  <div className="logInput__wrap">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                    <small className="msg msg--error">Required</small>
                  </div>

                  <div className="logInput__wrap">
                    <button disabled>
                      Login <SpinnerBtn />
                    </button>
                  </div>
                </div>
              </form>

              <div className="login__footer">
                <ul>
                  <li>
                    Need an Account? <Link to="/">Create an Account</Link>
                  </li>
                  <li>
                    Did you forgot your password?
                    <Link to="/"> Forgot password</Link>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
