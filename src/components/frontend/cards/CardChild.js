import React from "react";
import { setIsSponsor } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import useLoadAll from "../../custom-hooks/useLoadAll";
import { devBaseUrl } from "../../helpers/functions-general";
import Nodata from "../../widgets/Nodata";
import SpinnerFrontEnd from "../../widgets/SpinnerFrontEnd.js";
import SpinnerTable from "../../widgets/SpinnerTable";
import ModalSponsorChild from "../modal/ModalSponsorChild";

const CardChild = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const { loading, result } = useLoadAll("/admin/children/read-children.php");

  const handleSponsor = (item) => {
    dispatch(setIsSponsor(true));
    setItemEdit(item);
  };

  return (
    <>
      {store.isSponsor && (
        <ModalSponsorChild item={{ itemEdit, setItemEdit }} />
      )}

      {result.length > 0 ? (
        result.map((item, key) => {
          return (
            <div className="card__item" key={key}>
              <figure>
                <img
                  src="../images/children/angel_yzabel.jpg"
                  src={
                    item.child_photo !== "np.jpg"
                      ? devBaseUrl + "/images/" + item.child_photo
                      : "../images/no-photo.jpg"
                  }
                  alt="{item.child_name}"
                />
                <div className="bar">
                  <div
                    className="pct__label__front"
                    style={{ clipPath: `inset(0 0 0 10%)` }}
                  >
                    {`10%`} Completed
                  </div>
                  <div className="pct__label__back">{`10%`} Completed</div>
                </div>
              </figure>
              <h4 className="text--primary">{item.child_name}</h4>
              <h4 className="text--primary">asdf</h4>
              <p>asdf</p>

              <button
                className="btn btn--primary"
                onClick={() => {
                  handleSponsor(item);
                }}
              >
                Sponsor Now
              </button>
            </div>
          );
        })
      ) : (
        <>
          <Nodata />
          {/* <SpinnerFrontEnd /> */}
        </>
      )}
    </>
  );
};

export default CardChild;
