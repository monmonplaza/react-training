import React from "react";
import { BsPlus } from "react-icons/bs";
import { RiCamera3Line } from "react-icons/ri";
import { StoreContext } from "../../../../../store/StoreContext";
import { setIsAdd } from "../../../../../store/StoreAction";
import SpinnerBtn from "../../../../widgets/SpinnerBtn.js";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputText } from "../../../../helpers/FormInputs.js";
import { fetchData } from "../../../../helpers/fetchData.js";
const ModalAddUser = ({ item }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(setIsAdd(false));
    setItemEdit(null);
  };
  const { itemEdit, setItemEdit } = item;

  const initVal = {
    users_aid: itemEdit ? itemEdit.users_aid : "",
    users_name: itemEdit ? itemEdit.users_name : "",
    users_email: itemEdit ? itemEdit.users_email : "",
    users_email_old: itemEdit ? itemEdit.users_email : "",
    // users_password: pass,
  };

  //kung require, dapat nasa yupSchema
  const yupSchema = Yup.object({
    users_name: Yup.string().required("Required"),
    users_email: Yup.string().email("Email is invalid").required("Required"),
  });

  return (
    <div className="dashmodal">
      <div className="dashmodal__main">
        <div className="dashmodal__header bg--primary">
          <h2>Add New </h2>
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
              fetchData(
                setLoading,
                itemEdit
                  ? "/admin/users/update-users.php"
                  : "/admin/users/create-users.php",
                values,
                null,
                "",
                "Email aleady exist.",
                dispatch,
                store,
                true,
                false
              );
            }}
          >
            {(props) => {
              // props.values.users_password = Math.random().toString(36).substr(7);

              return (
                <Form className="dashmodal__form">
                  <div className="form__group">
                    <InputText
                      label="User Name"
                      type="text"
                      name="users_name"
                      disabled={loading}
                    />
                  </div>
                  <div className="form__group">
                    <InputText
                      label="Email"
                      type="text"
                      name="users_email"
                      disabled={loading}
                    />
                  </div>

                  <div className="dashmodal__footer">
                    <ul>
                      <li>
                        <button
                          className="dashmodal__btn btn--primary"
                          type="submit"
                        >
                          Add <SpinnerBtn />
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
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ModalAddUser;
