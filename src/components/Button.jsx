import classes from "./Button.module.css"; // Add this to include CSS styling

function Button({ name }) {
  return (
    <button type="submit" className={classes.custom_button}>
      {name}
    </button>
  );
}

export default Button;
