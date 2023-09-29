import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { DialogActions, Button } from "@mui/material";

import styles from "../App.module.scss";

const validationSchema = Yup.object({
  title: Yup.string().required().min(3),
  feedback: Yup.string().required().min(3),
});

const FeedbackForm = ({ handleSubmit }) => (
  <Formik
    initialValues={{
      title: "",
      feedback: "",
    }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <div className={styles.row}>
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
        </div>
        <DialogActions>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </DialogActions>
      </Form>
    )}
  </Formik>
);

FeedbackForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default FeedbackForm;
