import PropTypes from "prop-types";
import { Dialog, DialogContentText } from "@mui/material";
import { toast } from "react-toastify";
import "../styles/reactToastify.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import "../styles/input.scss";
import "../styles/muiDialog.scss";
import CustomButton from "./CustomButton";
import RegisterForm from "./RegisterForm";

const MuiDialog = ({ open, onClose }) => {
  const handleSubmit = async (values, formikHelpers) => {
    try {
      // Simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 500));
      formikHelpers.resetForm();
      onClose();
      console.log(values);

      // Toastify
      toast.success("Submission successful!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        className: "custom-toast",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className="dialog-content">
      <div className="dialog-content">
        <div className="image-wrap">
          <img src=".//src/assets/dialog.svg" alt="" />
          <h3>Start for free & Get Attractive offers Today!</h3>
        </div>
        <div className="form-wrap">
          <DialogContentText sx={{ mb: 2 }}>
            <h2>Get started</h2>
            <p>Already have an account?</p>
            <a href="#">Log in</a>

            <div className="social-btn-wrap">
              <CustomButton
                title="Sign up"
                className="btn-google"
                icon={GoogleIcon}
              />

              <CustomButton
                title="Sign up"
                className="btn-fb"
                icon={FacebookOutlinedIcon}
              />
            </div>

            <h3>Or</h3>
          </DialogContentText>

          <RegisterForm handleSubmit={handleSubmit} />
        </div>
      </div>
    </Dialog>
  );
};

MuiDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MuiDialog;
