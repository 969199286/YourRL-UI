import NewUrl from "./addLongToShort/NewUrl";
import LTSs from "./LongToShort/LTSs";

import theme from "./UI/theme";
import { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/system";

const Homepage = (props) => {
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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NewUrl onAddLTS={LTSAddHandler}></NewUrl>
          <LTSs items={LTSitems} />
        </ThemeProvider>
      </div>
    );
}
export default Homepage;