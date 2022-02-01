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

const ProjectTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const { loading, result } = useLoadAll("/admin/projects/read-projects.php");
  const [itemEdit, setItemEdit] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  let count = 0;

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    setDel(false);
    dispatch(setIsConfirm(true));
    setId(item.project_id);
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    setDel(true);
    dispatch(setIsConfirm(true));
    setId(item.project_id);
    setItemEdit(item);
  };

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
                          <td>{item.project_name}</td>
                          <td>{item.project_amount}</td>

                          <td className="action">
                            <div className="action__wrapper">
                              <button className="btn__option">
                                <BsThreeDotsVertical />
                              </button>
                              <ul>
                                <li>
                                  <button
                                    onClick={() => {
                                      handleEdit(item);
                                    }}
                                  >
                                    <RiEdit2Line /> Edit
                                  </button>
                                </li>
                                <li>
                                  <button
                                    onClick={() => {
                                      handleArchive(item);
                                    }}
                                  >
                                    <RiDeleteBinLine />
                                    Archive
                                  </button>
                                </li>
                                <li>
                                  <button onClick={() => handleDelete(item)}>
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
      {store.isAdd && <ModalAddProject item={{ itemEdit, setItemEdit }} />}
      {store.error && <ModalError />}
      {store.isConfirm && (
        <ModalConfirm
          id={id}
          isDel={isDel}
          // stripeApiDelete="/server/stripe/products/delete-product.php"
          // stripeApiArchive="/server/stripe/products/archive-product.php"
          mysqlApiDelete="/admin/projects/delete-projects.php"
          mysqlApiArchive="/admin/projects/archive-projects.php"
          msg={
            isDel
              ? "Are you sure you want to delete "
              : "Are you sure you want to archive "
          }
          item={itemEdit.project_name}
        />
      )}
    </>
  );
};

export default ProjectTable;
