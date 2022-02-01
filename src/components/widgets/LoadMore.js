import React from "react";
import { ImSpinner6 } from "react-icons/im";
const LoadMore = () => {
  return (
    <>
      <div className="loadmore">
        <ImSpinner6 />
        <p className="loadmore__text">Loading ... </p>
        <button className="loadmore__btn show">Load More</button>
      </div>
    </>
  );
};

export default LoadMore;
