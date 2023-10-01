import { useState } from "react";
import { Formik, Form, Field } from "formik";
import "../App.module.scss";
import CustomButton from "./CustomButton";
import MuiDialog from "./MuiDialog";
import "../styles/input.scss";
import "../styles/loginForm.scss";

const LoginForm = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Formik>
      <Form>
        <h2 className="title">Login Now</h2>

        <div className="input-container input-email">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className=""
          />
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
        </div>

        <CustomButton title="Login" className="btn-secondary" />

        <p>Not a member?</p>

        <div onClick={handleClickOpen}>
          <CustomButton title="Get started" className="btn-primary" />
        </div>
        <MuiDialog open={open} onClose={handleClose} />
      </Form>
    </Formik>
  );
};

export default LoginForm;
