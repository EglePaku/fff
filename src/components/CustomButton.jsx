import PropTypes from "prop-types";
import "../styles/customButton.scss";

const CustomButton = (props) => {
  const { title, icon: IconComponent, className } = props;

  return (
    <button className={`btn ${className}`}>
      {IconComponent && (
        <IconComponent
          style={{ marginRight: "8px", top: "1px", position: "relative" }}
        />
      )}
      {title}
    </button>
  );
};

CustomButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.elementType,
  className: PropTypes.string,
};

export default CustomButton;
