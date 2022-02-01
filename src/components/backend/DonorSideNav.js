import React from "react";

import { NavLink } from "react-router-dom";
import { MdOutlineChildCare, MdOutlineManageAccounts } from "react-icons/md";

import { devNavUrl } from "../helpers/functions-general";
import CompanyLogo from "../svg/CompanyLogo";

const DonorSideNav = ({ isTab }) => {
  return (
    <>
      <aside className="sidenav">
        <div className="sidenav__wrapper">
          <header className="sidenav__header">
            <CompanyLogo />
          </header>

          <main className="sidenav__main">
            <ul>
              <li>
                <NavLink
                  to={`${devNavUrl}/donor-account`}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  <MdOutlineManageAccounts />
                  <span>Account</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`${devNavUrl}/sponsorship-active`}
                  className={isTab ? "active" : ""}
                >
                  <MdOutlineChildCare />
                  <span>Sponsorship</span>
                </NavLink>
              </li>
            </ul>
          </main>
        </div>
      </aside>
    </>
  );
};

export default DonorSideNav;
