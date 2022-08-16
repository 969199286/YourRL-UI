import app from "../axios-configure";
import React, { useState } from "react";
import UrlForm from "./UrlForm";
import classes from "./NewUrl.module.css";

const NewUrl = (props) => {
  const [errorMsg, setErrorMsg] = useState("");

  const createLongToShort = (longUrl, shortUrl) => {
    const longToShort = { longUrl: longUrl, shortUrl: shortUrl };
    props.onAddLTS(longToShort);
  };
  const onEnterUrlHandler = (url) => {
    setErrorMsg("");
    app
      .post(`http://localhost:8081/api/long2short`, url)
      .then((res) => {
        createLongToShort(url, res.data);
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setErrorMsg(resMessage);
        if (error.response && error.response.status === 401) {
          setErrorMsg("Please Login before converting your URL.");
        }
        if (error.response && error.response.status === 429) {
          setErrorMsg("Too fast, hold on!.");
        }
      });
  };

  return (
    < div style={{flex:1 ,alignItems:"center", justifyContent: "center" }} >
      <div className={classes.container}>
        <UrlForm onEnter={onEnterUrlHandler}></UrlForm>
      </div>
      {errorMsg && (
        <div className="row justify-content-center">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "15vh",
              width: "60vw",
      
            }}
            className="alert alert-danger"
            role="alert"
          >
            {errorMsg}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewUrl;
