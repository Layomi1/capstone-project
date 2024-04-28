import { Link } from "react-router-dom";

const CustomButton = ({ type, to, buttonStyle, text, onClick }) => {
  const classNames = {
    orange: "btn",
    teal: "btn-teal",
    "#96C3D7": "btn-96C3D7",
  };
  const className = classNames[type] || classNames.btn;

  if (to) {
    return (
      <Link to={to} className={`${className} ${buttonStyle}`}>
        {text}
      </Link>
    );
  }

  return (
    <button className={`${className} ${buttonStyle}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
