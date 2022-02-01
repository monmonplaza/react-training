import React from "react";
import { useField } from "formik";

export const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error--msg">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputFileUpload = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} className="file-upload" />

      {meta.touched && meta.error ? (
        <span className="error--msg">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-show" : null}
      />

      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

export const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <textarea {...field} {...props}></textarea>
      {meta.touched && meta.error ? (
        <span className="error--msg">{meta.error}</span>
      ) : null}
    </>
  );
};

// OCT18 END

export const MyRadio = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input {...field} {...props} />
      <label htmlFor={props.id || props.name}>{label}</label>

      {/* {meta.touched && meta.error ? (
        <p className="error-msg">{meta.error}</p>
      ) : null} */}
    </>
  );
};

export const MyRadioError = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      {meta.touched && meta.error ? (
        <span className="error--msg">{meta.error}</span>
      ) : null}
    </>
  );
};

export const MyCheckbox = ({ label, open, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-show" : null}
      />
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      {/* <span htmlFor={props.id || props.name}>{label}</span> */}
      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}
    </>
  );
};
