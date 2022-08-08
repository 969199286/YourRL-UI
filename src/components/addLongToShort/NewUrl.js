import app from "../axios-configure";
import React, { useState } from "react";
import UrlForm from "./UrlForm";
import classes from "./NewUrl.module.css";


const NewUrl = (props) => {
  const [error, setError] = useState(null);
  const errorDiv = error ? (
    <div>
        <p> Created at: {error.created_at}</p>
        <p> Message: {error.message}</p>
    </div>
  ) : (
    ""
  );
  const createLongToShort = (longUrl, shortUrl) => {
    const longToShort = { longUrl: longUrl, shortUrl: shortUrl };
    props.onAddLTS(longToShort);
  };
  const onEnterUrlHandler = (url) => {
    setError(null);
    app
      .post(`http://localhost:8081/api/long2short`, url)
      .then((res) => {
        createLongToShort(url, res.data);

      })
      .catch((res) => {
        if (res.response) {
        console.log(res.response.data);
        setError(res.response.data);
        }
      });
  };

  return (
    <>
      <div className={classes.container}>
        <UrlForm onEnter={onEnterUrlHandler}></UrlForm>
      </div>
      {errorDiv}
    </>
  );
};

export default NewUrl;
