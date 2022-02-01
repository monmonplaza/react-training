import React from "react";
import LoadMore from "../../../widgets/LoadMore";

import BackHeader from "../../BackHeader";
import SideNav from "../../SideNav";
import ChildrenTable from "./ChildrenTable";
import ModalChildAdd from "./modal/ModalAddChild";
import SpinnerWindow from "../../../widgets/SpinnerWindow";
import ModalOkOnly from "../../../modal/ModalOkOnly";
import ModalError from "../../../modal/ModalError";
const ChildrenList = () => {
  return (
    <>
      <section className="parentbox">
        <div className="parentbox__wrapper">
          <SideNav />
          <div className="parentbox__main">
            <BackHeader />

            <ChildrenTable />
            <LoadMore />
          </div>
        </div>
      </section>

      {/* <SpinnerWindow /> */}
      {/* <ModalOkOnly message="Record is updated" /> */}
      {/* <ModalError /> */}
      {/*type = delete or logout*/}
    </>
  );
};

export default ChildrenList;
