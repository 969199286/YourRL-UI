import app from "../axios-configure";
import React from "react";
import UrlForm from "./UrlForm";

const NewUrl = (props) => {
  const createLongToShort = (longUrl, shortUrl) => {
    const longToShort = { longUrl: longUrl, shortUrl: shortUrl };
    props.onAddLTS(longToShort);
  };
  const onEnterUrlHandler = (url) => {
    app.post(`http://localhost:8080/api/long2short`, url).then((res) => {
      createLongToShort(url, res.data);
      console.log(res);
      console.log(res.data);
    });
  };

  return <UrlForm onEnter={onEnterUrlHandler}></UrlForm>;
};

export default NewUrl;
