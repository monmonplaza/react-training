import React from "react";

const BackFooter = () => {
  const year = new Date();
  return (
    <>
      <footer className="dashfooter">
        <div className="dashfooter__wrapper">
          <p>
            All Right Reserved &copy; {year.getFullYear()} <br /> Designed and
            Powered by Frontline Business Solutions, Inc.
          </p>
        </div>
      </footer>
    </>
  );
};

export default BackFooter;
