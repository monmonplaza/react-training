import React from "react";
import BackHeader from "../../BackHeader";
import SideNav from "../../SideNav";
import UserTable from ".//UserTable";
const UserList = () => {
  return (
    <>
      <section className="parentbox">
        <div className="parentbox__wrapper">
          <SideNav />
          <div className="parentbox__main">
            <BackHeader title="User's Dashboard" />
            <UserTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserList;
