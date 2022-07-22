import { useRef } from "react";

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
    <form onSubmit={submitHandler}>
      <label>
        Original Url:
        <input type="text" name="url" ref={urlInputRef} />
      </label>
      <button type="submit">Convert Url</button>
    </form>
  );
};

export default UrlForm;
