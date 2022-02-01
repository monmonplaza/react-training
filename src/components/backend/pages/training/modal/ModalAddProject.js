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

const ModalAddTraining = ({ item }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const { itemEdit, setItemEdit } = item;

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    "/admin/children/upload-photo.php",
    dispatch
  );

  const initVal = {
    product: itemEdit ? itemEdit.project_id : "",
    product_name: itemEdit ? itemEdit.project_name : "",
    product_description: itemEdit ? itemEdit.project_description : "",
    product_amount: itemEdit ? itemEdit.project_amount : "",
    // project_photo: itemEdit ? itemEdit.project_photo : "np.jpg",
  };

  const yupSchema = Yup.object({
    product_name: Yup.string().required("Required"),
    product_description: Yup.string().required("Required"),
    product_amount: Yup.string().required("Required"),
    // project_photo: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="dashmodal">
        <div className="dashmodal__main">
          <div className="dashmodal__header bg--primary">
            <h2>{itemEdit ? "Update Project" : "Add Project"}</h2>
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
                setLoading(true);
                uploadPhoto();
                // stripe api
                const data = await checkProducts(
                  itemEdit,
                  values,
                  dispatch,
                  setLoading
                );

                if (data.type === "good") {
                  // insert to mysql
                  fetchData(
                    setLoading,
                    itemEdit
                      ? "/admin/projects/update-projects.php"
                      : "/admin/projects/create-projects.php",
                    {
                      ...values,
                      product_id: data.id,
                      product_photo: photo
                        ? photo.name
                        : itemEdit
                        ? itemEdit.project_photo
                        : "np.jpg",
                    }, // form data values
                    null, // result set data
                    "", // success msg
                    "", // additional error msg if needed
                    dispatch, // context api action
                    store, // context api state
                    false, // boolean to show success modal
                    false // boolean to show load more functionality button
                  );
                }
              }}
            >
              {(props) => {
                // console.log(props.isSubmitting);

                return (
                  <Form action="" className="dashmodal__form">
                    <div className="form__group input--upload">
                      <label htmlFor="upload-photo">
                        <RiCamera3Line />
                      </label>

                      <img
                        src={
                          photo
                            ? URL.createObjectURL(photo)
                            : itemEdit !== null
                            ? devBaseUrl + "/images/" + itemEdit.project_photo
                            : "../../images/child_placeholder.jpg"
                        }
                        alt="default avatar"
                      />

                      <InputFileUpload
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={handleChangePhoto}
                        id="upload-photo"
                      />
                      <small>Max file size 60kb</small>
                    </div>

                    <div className="form__group">
                      <InputText
                        label="Name"
                        type="text"
                        name="product_name"
                        disabled={loading}
                      />
                    </div>
                    <div className="form__group">
                      <MyTextArea
                        label="Description"
                        name="product_description"
                        cols="30"
                        rows="10"
                        disabled={loading}
                      ></MyTextArea>
                    </div>

                    <div className="form__group">
                      <InputText
                        label="Amount Limit"
                        type="text"
                        name="product_amount"
                        disabled={loading}
                      />
                    </div>
                    <div className="dashmodal__footer">
                      <ul>
                        <li>
                          <button
                            type="submit"
                            className="dashmodal__btn btn--primary"
                            disabled={loading}
                          >
                            {itemEdit ? "Save" : "Add"}{" "}
                            {loading && <SpinnerBtn />}
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
