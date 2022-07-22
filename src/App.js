import NewUrl from "./components/AddLongToShort/NewUrl";
import LTSs from "./components/LongToShort/LTSs";
import "./App.css";
import { useState } from "react";

function App() {
  const [LTSitems, setLTSitems] = useState([]);

  const LTSAddHandler = (LTSitem) => {
    setLTSitems((prevLTSitems) =>
      prevLTSitems.some((item) => {
        if (item.longUrl === LTSitem.longUrl) {
          return true;
        }
        return false;
      })
        ? prevLTSitems
        : prevLTSitems.concat(LTSitem)
    );
  };
  return (
    <div>
      <h1>YouRL</h1>
      <NewUrl onAddLTS={LTSAddHandler}></NewUrl>
      <LTSs items={LTSitems} />
    </div>
  );
}

export default App;
