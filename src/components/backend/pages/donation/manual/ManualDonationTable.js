import React from "react";
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general.js";
import BackFooter from "../../../BackFooter.js";
import Search from "../../../../widgets/Search.js";
// import ModalViewSponsorship from "./modal/ModalViewSponsorship.js";
// import ModalAddSponsorship from "./modal/ModalAddSponsorship.js";

const ManualDonationTable = () => {
  return (
    <>
      <section className="datalist">
        <div className="datalist__container">
          <Search />
          <div className="datalist__header">
            <ul className="datalist__header__nav">
              <li>
                <NavLink
                  to={`${devNavUrl}/admin/credit-card-donation`}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  Credit Card
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${devNavUrl}/admin/manual-donation`}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  Manual Donation
                </NavLink>
              </li>
            </ul>
            <button className="btn--add">
              <BsPlusLg /> New Manual Donation
            </button>
          </div>
          <div className="datalist__wrapper">
            <div className="datalist__table">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Project </th>
                    <th>Amount </th>
                    <th>Date </th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>loverboy</td>
                    <td>Christmas Project</td>
                    <td>$50.00</td>
                    <td>1/21/22</td>

                    <td className="action">
                      <div className="action__wrapper">
                        <button className="btn__option">
                          <BsThreeDotsVertical />
                        </button>
                        <ul>
                          <li>
                            <button>
                              <RiEdit2Line /> View
                            </button>
                          </li>
                          <li>
                            <button>
                              <RiDeleteBinLine />
                              Suspend
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>loverboy</td>
                    <td>Christmas Project</td>
                    <td>$50.00</td>
                    <td>1/21/22</td>

                    <td className="action">
                      <div className="action__wrapper">
                        <button className="btn__option">
                          <BsThreeDotsVertical />
                        </button>
                        <ul>
                          <li>
                            <button>
                              <RiEdit2Line /> View
                            </button>
                          </li>
                          <li>
                            <button>
                              <RiDeleteBinLine />
                              Suspend
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <BackFooter />
      </section>
      {/* {store.isAdd && <ModalAddGenDonation item={{ itemEdit, setItemEdit }} />}
       {store.error && <ModalError />}
       {store.isConfirm && (
        <ModalConfirm
          id={id}
          isDel={isDel}
          // stripeApiDelete="/server/stripe/products/delete-product.php"
          // stripeApiArchive="/server/stripe/products/archive-product.php"
          mysqlApiDelete="/admin/gendonation/delete-gen-donation.php"
          mysqlApiArchive="/admin/gendonation/archive-gen-donation.php"
          msg={
            isDel
              ? "Are you sure you want to delete "
              : "Are you sure you want to archive "
          }
          item={itemEdit.genDonation_name}
        />
      )} */}

      {/* <ModalViewSponsorship /> */}
      {/* <ModalAddSponsorship /> */}
    </>
  );
};

export default ManualDonationTable;
