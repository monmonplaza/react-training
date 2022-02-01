import React from "react";
import { RiInboxArchiveLine } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { StoreContext } from "../../store/StoreContext";
import { setError, setIsConfirm, setMessage } from "../../store/StoreAction";
import SpinnerBtn from "../widgets/SpinnerBtn.js";
import { fetchData } from "../helpers/fetchData";
import { devApiUrl } from "../helpers/functions-general";
import fetchApi from "../helpers/fetchApi";
import { checkStripeError } from "../helpers/stripe-error";

const ModalConfirm = ({
  id,
  isDel,
  stripeApiDelete,
  stripeApiArchive,
  mysqlApiDelete,
  mysqlApiArchive,
  msg,
  item,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  let pId = id;

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(setIsConfirm(false));
  };

  const handleYes = async () => {
    setLoading(true);
    // const data = await fetchApi(
    //   isDel ? devApiUrl + stripeApiDelete : devApiUrl + stripeApiArchive,
    //   { product: pId }
    // );
    // console.log(data);

    // // if result data is undefined
    // if (typeof data === "undefined") {
    //   dispatch(setError(true));
    //   dispatch(setMessage("API / Network Error"));
    //   setLoading(false);
    //   return;
    // }

    // if (data.type === "good" || data.deleted) {
    fetchData(
      setLoading,
      isDel ? mysqlApiDelete : mysqlApiArchive,
      { id: pId },
      null,
      "",
      "",
      dispatch,
      store,
      false,
      false
    );
    //}else {
    //   console.log("Error");
    //   // Show error message
    //   checkStripeError(data.error, dispatch);
    //   setLoading(false);
    // }
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
              {msg} <strong>{item}</strong>?
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

export default ModalConfirm;
