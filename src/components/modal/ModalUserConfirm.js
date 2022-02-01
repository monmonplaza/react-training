import React from "react";
import { RiInboxArchiveLine } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import fetchApi from "../helpers/fetchApi";
import { fetchData } from "../helpers/fetchData";
import { StoreContext } from "../../store/StoreContext";

import { setIsConfirm, setStartIndex } from "../../store/StoreAction";
import SpinnerBtn from "../widgets/SpinnerBtn.js";

const ModalUserConfirm = ({
  id,
  isDel,
  delEndpoint,
  archiveEndpoint,
  item,
  val = null,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  let aid = id;
  let param1 = val;

  const handleClose = () => {
    dispatch(setIsConfirm(false));
  };

  const handleYes = () => {
    fetchData(
      setLoading,
      isDel ? delEndpoint : archiveEndpoint,
      { id: aid, val1: param1 },
      null,
      "",
      "Server connection error. Please contact FBS technical support.",
      dispatch,
      store,
      false,
      false
    );

    dispatch(setStartIndex(0));
  };

  return (
    <>
      <div className="dashmodal modal--yesno">
        <div className="dashmodal__main">
          <div className="dashmodal__header bg--error">
            <h2> {isDel ? "Delete?" : "Archive?"}</h2>
            <button className="modaldashClose" onClick={handleClose}>
              <BsPlus />
            </button>
          </div>

          <div className="dashmodal__body fixed--height  ">
            <p className="text--center dashmodal__body__msg ">
              <span className="dashmodal__body__icon">
                {isDel ? <RiDeleteBin5Line /> : <RiInboxArchiveLine />}
              </span>
              {isDel
                ? "Are you sure you want to delete "
                : "Are you sure you want to archive "}
              <strong>{item}</strong>?
            </p>

            <div className="dashmodal__footer">
              <ul>
                <li>
                  <button
                    className="dashmodal__btn btn--error"
                    disabled={loading}
                    onClick={handleYes}
                  >
                    Confirm {loading && <SpinnerBtn />}
                  </button>
                </li>
                <li>
                  <button
                    className="dashmodal__btn btn--gray"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalUserConfirm;
