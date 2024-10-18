import { useNavigate } from "react-router-dom";
import classes from "./Button.module.css"; // Add this to include CSS styling

function Button({ name, link }) {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate(link);
  };

  return (
    <button className={classes.custom_button} onClick={handleApply}>
      {name}
    </button>
  );
}

export default Button;
