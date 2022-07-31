import NewUrl from "./components/addLongToShort/NewUrl";
import LTSs from "./components/LongToShort/LTSs";
import classes from "./App.module.css";
import theme from "./components/UI/theme";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/system";

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="static"
          elevation={0}
          sx={{
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            background: "#448aff",
          }}
        >
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1, color: "#f5f5f5" }}
            >
              YouRL
            </Typography>
            <nav></nav>
            <Button
              href="#"
              variant="outlined"
              sx={{ my: 1, mx: 1.5, color: "#f5f5f5", borderColor: "#212121", border: '2px solid'}}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <NewUrl onAddLTS={LTSAddHandler}></NewUrl>
        <LTSs items={LTSitems} />
      </ThemeProvider>
    </div>
  );
}

export default App;
