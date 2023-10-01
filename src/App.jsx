import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.module.scss";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <div className="container">
          <LoginForm className="login-form-wrap" />
          <ToastContainer />
    </div>
  );
};

export default App;
