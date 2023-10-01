import PropTypes from "prop-types";
import "../styles/_funcButton.scss";

const FuncButton = (props) => {
  const { title, style, icon: IconComponent, className } = props;

  return (
    <button style={style} className={`btn ${className}`}>
      {IconComponent && <IconComponent style={{ marginRight: "8px", top: "1px", position: "relative" }} />}{" "}
      {/* Render Material-UI icon */}
      {title}
    </button>
  );
};

FuncButton.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.elementType, // Updated PropTypes to accept a React component
  className: PropTypes.string, // Define className as a prop
};

export default FuncButton;
