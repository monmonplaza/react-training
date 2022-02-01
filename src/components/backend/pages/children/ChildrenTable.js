import React from "react";
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import { setIsAdd, setIsConfirm } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import useLoadAll from "../../../custom-hooks/useLoadAll";
import ModalError from "../../../modal/ModalError";
import ModalConfirm from "../../../modal/ModalConfirm";
import Nodata from "../../../widgets/Nodata";
import Search from "../../../widgets/Search";
import SpinnerTable from "../../../widgets/SpinnerTable";
import ModalAddChild from "./modal/ModalAddChild";

const ChildrenTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  let count = 0;

  const { loading, result } = useLoadAll("/admin/children/read-children.php");

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
    setId(item.child_id);
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    setDel(true);
    dispatch(setIsConfirm(true));
    setId(item.child_id);
    setItemEdit(item);
  };

  return (
    <>
      <section className="datalist">
        <div className="datalist__header">
          <Search />
          <button className="btn--add" onClick={handleAdd}>
            <BsPlusLg /> New Child
          </button>
        </div>

        <div className="datalist__wrapper">
          <div className="datalist__table">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
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
                        <td>{item.child_name}</td>
                        <td>{item.child_amount}</td>
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
                                <button
                                  onClick={() => {
                                    handleDelete(item);
                                  }}
                                >
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
        </div>
      </section>
      {store.isAdd && <ModalAddChild item={{ itemEdit, setItemEdit }} />}
      {store.error && <ModalError />}
      {store.isConfirm && (
        <ModalConfirm
          id={id}
          isDel={isDel}
          stripeApiDelete="/server/stripe/products/delete-product.php"
          stripeApiArchive="/server/stripe/products/archive-product.php"
          mysqlApiDelete="/admin/children/delete-children.php"
          mysqlApiArchive="/admin/children/archive-children.php"
          msg={
            isDel
              ? "Are you sure you want to delete "
              : "Are you sure you want to archive "
          }
          item={itemEdit.child_name}
        />
      )}
    </>
  );
};

export default ChildrenTable;
