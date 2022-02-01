import React from "react";
import { BsPlus } from "react-icons/bs";
import { RiCamera3Line } from "react-icons/ri";

const ModalViewSponsorship = () => {
  return (
    <>
      <div className="dashmodal">
        <div className="dashmodal__main">
          <div className="dashmodal__header bg--primary">
            <h2>View Child Info</h2>
            <button className="modaldashClose">
              <BsPlus />
            </button>
          </div>

          <div className="dashmodal__body ">
            <div action="" className="dashmodal__form">
              <article className="child__description">
                <img
                  src="https://myhero.com/content/images/thumbs/0109805_400.jpeg"
                  alt="default avatar"
                />
                <h3>Loverboy 1234</h3>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi sint similique velit, consequuntur ipsum ratione
                  corrupti nemo molestiae, voluptate iure in praesentium maxime,
                  mollitia minima dolorem? Illum, quae tempore officiis qui
                  tempora repudiandae nihil dolorem sint, nobis consequatur
                  veniam nostrum, ipsam iure quasi temporibus inventore?
                </p>
              </article>

              <div className="dashmodal__footer">
                <ul>
                  <li>
                    <button type="reset" className="dashmodal__btn btn--gray">
                      Close
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalViewSponsorship;
