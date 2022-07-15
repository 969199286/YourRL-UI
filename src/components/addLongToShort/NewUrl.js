import app from "../axios-configure";
import React from "react";
import UrlForm from "./UrlForm";

const NewUrl = (props) => {


  const onEnterUrlHandler = (url) => {
    console.log(url);
    app.post(`http://localhost:8080/api/long2short`, url).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return <UrlForm onEnter={onEnterUrlHandler}></UrlForm>;
};

export default NewUrl;
