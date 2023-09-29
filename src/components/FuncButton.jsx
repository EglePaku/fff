import PropTypes from "prop-types";
import "../styles/_funcButton.scss";

const FuncButton = (props) => {
  return <button className="btn btn-primary">{props.title}</button>;
};

FuncButton.propTypes = {
  title: PropTypes.string,
};

export default FuncButton;
