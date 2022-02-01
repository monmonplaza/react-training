import React from "react";
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import {
  RiEdit2Line,
  RiDeleteBinLine,
  RiInboxArchiveLine,
} from "react-icons/ri";
import LoadMore from "../../../widgets/LoadMore";
import Nodata from "../../../widgets/Nodata";
import Search from "../../../widgets/Search.js";
import SpinnerTable from "../../../widgets/SpinnerTable";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd, setIsConfirm } from "../../../../store/StoreAction";
import BackFooter from "../../BackFooter.js";
import ModalAddUser from "./modal/ModalAddUser.js";
import useLoadAll from "../../../custom-hooks/useLoadAll.js";
import ModalError from "../../../modal/ModalError.js";
import ModalConfirm from "../../../modal/ModalConfirm.js";
import ModalUserConfirm from "../../../modal/ModalUserConfirm.js";

const UserTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { loading, result } = useLoadAll("/admin/users/read-users.php");

  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);

  const [itemEdit, setItemEdit] = React.useState(null);

  let count = 0;

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };

  const handleArchive = (item) => {
    setDel(false);
    dispatch(setIsConfirm(true));
    setId(item.users_aid);
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    setDel(true);
    dispatch(setIsConfirm(true));
    setId(item.users_aid);
    setItemEdit(item);
  };

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };
  return (
    <>
      <section className="datalist">
        <div className="datalist__container">
          <div className="datalist__header">
            <Search />
            <button className="btn--add" onClick={() => handleAdd()}>
              <BsPlusLg /> New User
            </button>
          </div>
          <div className="datalist__wrapper">
            <div className="datalist__table">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
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
                          <td>{item.users_name} </td>
                          <td>{item.users_email} </td>

                          <td className="action">
                            <div className="action__wrapper">
                              <button className="btn__option">
                                <BsThreeDotsVertical />
                              </button>
                              <ul>
                                <li>
                                  <button onClick={() => handleEdit(item)}>
                                    <RiEdit2Line /> Edit
                                  </button>
                                </li>
                                <li>
                                  <button onClick={() => handleDelete(item)}>
                                    <RiDeleteBinLine />
                                    Delete
                                  </button>
                                </li>
                                <li>
                                  <button onClick={() => handleArchive(item)}>
                                    <RiInboxArchiveLine />
                                    Archive
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
                      <td colSpan="4" className="row__nodata">
                        <Nodata />
                        {loading && <SpinnerTable />}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {/* <LoadMore /> */}
            </div>
          </div>
        </div>
        <BackFooter />
      </section>
      {store.error && <ModalError />}
      {store.isAdd && <ModalAddUser item={{ itemEdit, setItemEdit }} />}

      {store.isConfirm && (
        <ModalUserConfirm
          id={id}
          isDel={isDel}
          delEndpoint="/admin/users/delete-users.php"
          archiveEndpoint="/admin/users/archive-users.php"
          item={itemEdit.users_name}
        />
      )}
    </>
  );
};

export default UserTable;
