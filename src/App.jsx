import { useState } from "react";
import { Button } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FeedbackDialog from "./components/FeedbackDialog"; // Import the FeedbackDialog component

import styles from "./App.module.scss";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.form}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      {/* Use the FeedbackDialog component */}
      <FeedbackDialog open={open} onClose={handleClose} />
      {/* Include the ToastContainer component */}
      <ToastContainer />
    </div>
  );
};

export default App;
