import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../App.module.scss";

import FuncButton from "./FuncButton";

const validationSchema = Yup.object({
  email: Yup.string().required(),
  name: Yup.string().required(),
  password: Yup.string().required().min(3),
});

const FeedbackForm = ({ handleSubmit }) => (
  <Formik
    initialValues={{
      email: "",
      name: "",
      password: "",
    }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <div className="input-container input-user">
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className=""
          />
          <ErrorMessage name="name" />
        </div>

        <div className="input-container input-email">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className=""
          />
          <ErrorMessage name="email" />
        </div>

        <div className="input-container input-password">
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className=""
          />
          <ErrorMessage name="password" />
        </div>

        {/* <div className={styles.row}>
          <Field
            name="title"
            placeholder="Title..."
            className={styles.input}
          />
          <ErrorMessage name="title" />
        </div>
        
        <div className={styles.row}>
          <Field
            name="feedback"
            placeholder="Feedback..."
            component="textarea"
            className={styles.input}
          />
          <ErrorMessage name="feedback" />
        </div> */}

        {/* <FuncButton type="submit" disabled={isSubmitting} title="Submit" /> */}

        <div>
          <FuncButton
            title="Submit"
            className="btn-primary"
            type="submit"
            disabled={isSubmitting}
          />
        </div>
      </Form>
    )}
  </Formik>
);

FeedbackForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default FeedbackForm;
