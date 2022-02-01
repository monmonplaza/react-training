import React from "react";
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import Nodata from "../../../widgets/Nodata";
import SpinnerTable from "../../../widgets/SpinnerTable";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd, setIsConfirm } from "../../../../store/StoreAction";
import ModalAddProject from "./modal/ModalAddProject";
import Search from "../../../widgets/Search.js";
import ModalConfirm from "../../../modal/ModalConfirm.js";
import LoadMore from "../../../widgets/LoadMore.js";
import BackFooter from "../../BackFooter.js";

import useLoadAll from "../../../custom-hooks/useLoadAll";
import ModalError from "../../../modal/ModalError";

const TrainingTable = () => {
  return (
    <>
      <section className="datalist">
        <div className="datalist__container">
          <div className="datalist__header">
            <Search />
            <button className="btn--add" onClick={() => handleAdd()}>
              <BsPlusLg /> New Project
            </button>
          </div>
          <div className="datalist__wrapper">
            <div className="datalist__table">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Project Name</th>
                    <th>Amount Limit</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {result.length > 0 ? (
                    result.map((item, key) => {
                      count += 1;
                      return (
                        <tr key={key}>
                          <td>{count}</td>
                          <td>{item.training_name}</td>
                          <td>{item.training_amount}</td>

                          <td className="action">
                            <div className="action__wrapper">
                              <button className="btn__option">
                                <BsThreeDotsVertical />
                              </button>
                              <ul>
                                <li>
                                  <button>
                                    <RiEdit2Line /> Edit
                                  </button>
                                </li>
                                <li>
                                  <button>
                                    <RiDeleteBinLine />
                                    Archive
                                  </button>
                                </li>
                                <li>
                                  <button>
                                    <RiDeleteBinLine />
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5" className="row__nodata">
                        <Nodata />
                        {loading && <SpinnerTable />}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <LoadMore />
          </div>
        </div>

        <BackFooter />
      </section>
    </>
  );
};

export default TrainingTable;
