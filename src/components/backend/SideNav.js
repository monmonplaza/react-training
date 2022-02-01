import React from "react";

import { Link, NavLink } from "react-router-dom";
import { MdOutlineChildCare } from "react-icons/md";
import { BiDonateHeart, BiUser } from "react-icons/bi";
import { devNavUrl } from "../helpers/functions-general";
import CompanyLogo from "../svg/CompanyLogo";

const SideNav = ({ isTab }) => {
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
                  to={`${devNavUrl}/admin/children`}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  <MdOutlineChildCare />
                  <span>Children</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${devNavUrl}/admin/projects`}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  <BiDonateHeart />
                  <span>Projects</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`${devNavUrl}/admin/general-donation`}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  <BiDonateHeart />
                  <span>General Donation</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${devNavUrl}/admin/users`}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  <BiUser />
                  <span>Users</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${devNavUrl}/admin/manual-donation`}
                  className={isTab ? "active" : ""}
                >
                  <BiUser />
                  <span>Donation</span>
                </NavLink>
              </li>
            </ul>
          </main>
        </div>
      </aside>
    </>
  );
};

export default SideNav;
