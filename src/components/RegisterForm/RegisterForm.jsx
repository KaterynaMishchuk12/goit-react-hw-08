import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";
import toast from "react-hot-toast";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(15, "Too long!")
    .required("Required"),
  email: Yup.string()
    .email()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Please, fill in the email"),
  password: Yup.string()
    .min(3, "Too short!")
    .max(30, "Too long!")

    .required("Required"),
});
const initialValues = {
  name: "",
  email: "",
  password: "",
};

export const RegisterForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Congratulations! Successfull registration!");
        resetForm();
      })
      .catch(() => {
        toast.error("Such user already exists");
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label htmlFor={emailFieldId}>Email</label>
        <Field type="text" name="email" id={emailFieldId} />
        <ErrorMessage className={css.error} name="email" component="span" />

        <label htmlFor={passwordFieldId}>Password</label>
        <Field type="text" name="password" id={passwordFieldId} />
        <ErrorMessage className={css.error} name="password" component="span" />

        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};
