import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { BsPlus } from "react-icons/bs";
import { RiCamera3Line } from "react-icons/ri";
import {
  setError,
  setIsAdd,
  setMessage,
} from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import {
  InputFileUpload,
  InputText,
  MyTextArea,
} from "../../../../helpers/FormInputs";
import useUploadPhoto from "../../../../custom-hooks/useUploadPhoto";
import { devApiUrl, devBaseUrl } from "../../../../helpers/functions-general";
import fetchApi from "../../../../helpers/fetchApi";
import { checkStripeError } from "../../../../helpers/stripe-error";
import SpinnerBtn from "../../../../widgets/SpinnerBtn";
import { fetchData } from "../../../../helpers/fetchData";
import { checkProducts } from "../../../../helpers/stripe-products";

const ModalAddTraining = ({ itemEdit, setIsShow }) => {
  const handleClose = () => {
    setIsShow(false);
  };

  console.log(itemEdit);

  const initVal = {
    training_name: itemEdit ? itemEdit.training_name : "",
    training_amount: itemEdit ? itemEdit.training_amount : "",
  };

  const yupSchema = Yup.object({
    training_name: Yup.string().required("Required"),
    training_amount: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="dashmodal">
        <div className="dashmodal__main">
          <div className="dashmodal__header bg--primary">
            <h2>sdfsdfsdfsdfsdfsd</h2>
            <button className="modaldashClose" onClick={handleClose}>
              <BsPlus />
            </button>
          </div>

          <div className="dashmodal__body ">
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              // value = initVal = state
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log(values);
              }}
            >
              {(props) => {
                // console.log(props.isSubmitting);

                return (
                  <Form action="" className="dashmodal__form">
                    <div className="form__group">
                      <InputText
                        label="Name"
                        type="text"
                        name="training_name"
                      />
                    </div>

                    <div className="form__group">
                      <InputText
                        label="Amount Limit"
                        type="text"
                        name="training_amount"
                      />
                    </div>
                    <div className="dashmodal__footer">
                      <ul>
                        <li>
                          <button
                            type="submit"
                            className="dashmodal__btn btn--primary"
                          >
                            {itemEdit ? "Save" : "Add"} <SpinnerBtn />
                          </button>
                        </li>
                        <li>
                          <button
                            type="reset"
                            className="dashmodal__btn btn--gray"
                            onClick={handleClose}
                          >
                            Cancel
                          </button>
                        </li>
                      </ul>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddTraining;
