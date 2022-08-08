import { useRef } from "react";
import { Button } from "@mui/material";
import classes from "./UrlForm.module.css";
const UrlForm = (props) => {
  const urlInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = urlInputRef.current.value;
    if (enteredValue.trim().length > 0) {
      //console.log(enteredValue);
      props.onEnter(enteredValue);
    }
  };

  return (
    <form className = {classes.container} onSubmit={submitHandler}>
      <label className={classes.texts}>
        Original Url:
        <input type="text" name="url" ref={urlInputRef} />
      </label>
      <Button variant="contained" type="submit">
        Convert Url
      </Button>
    </form>
  );
};

export default UrlForm;
