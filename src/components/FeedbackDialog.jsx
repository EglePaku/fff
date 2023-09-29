import PropTypes from "prop-types";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { toast } from "react-toastify";
import "../styles/_reactToastify.scss";

import FeedbackForm from "./FeedbackForm";

const FeedbackDialog = ({ open, onClose }) => {
  const handleSubmit = async (values, formikHelpers) => {
    try {
      // Simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 500));
      formikHelpers.resetForm();
      onClose();
      console.log(values);

      // toastify
      toast.success("Submission successful!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        className: "custom-toast"
      });
    } catch (error) {

      console.error(error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Submit feedback</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>
          To subscribe to this website, please enter your email address here.
          We will send updates occasionally.
        </DialogContentText>
        
        {/* FeedbackForm component */}
        <FeedbackForm handleSubmit={handleSubmit} />
        
        <DialogActions>
          <Button onClick={onClose}>
            Cancel
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

FeedbackDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FeedbackDialog;
