import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* {...props.input} added automatically through this syntax as a prop to this input element.*/}
    </div>
  );
};

export default Input;
