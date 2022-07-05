import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "../css/Navigation.css";
import { InputBase } from "@mui/material";
import { useStateValue } from "../state/StateProvider";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [{ cart, user }, dispatch ] = useStateValue();

  const signOut = () => {
    user &&
      dispatch({
        type: "SET_USER",
        user: null,
      });
  };

  return (
    <Box className="navigation" sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: "#131921", padding: 0, width: 100 + "%" }}
        position="static"
      >
        <Toolbar>
          <div className="navigation-logo">
            <Link to="/">
              <img
                src="https://github.com/tanmay2626/images/blob/main/amazon-logo-removebg-preview.png?raw=true"
                alt="logo"
              />
            </Link>
          </div>

          <div className="navigation-search">
            <InputBase
              sx={{
                padding: 1,
                backgroundColor: "white",
                borderRadius: "3px 0 0 3px",
                width: 90 + "%",
                height: 35 + "px",
              }}
            />
            <IconButton
              sx={{
                backgroundColor: "#E48900",
                marginTop: 0,
                padding: 0,
                borderRadius: "0 3px 3px 0",
              }}
            >
              <SearchIcon sx={{ color: "black", padding: 0.25 }} />
            </IconButton>
          </div>

          <div onClick={signOut} className="navigation-option">
            <Link className="link" to={!user ? "/signin" : "/"}>
              {!user ? (
                <p>
                  <span>Hello Guest</span>
                  , Sign in
                </p>
              ) : (
                <p>
                  <span>Hello {user.username}</span>
                  <span className="link-span">, Sign Out</span>
                </p>
              )}
            </Link>
          </div>
          <div className="navigation-option">
            <Link className="link" to={user ? "/orders" : "/signin"}>
              <p>
                <span>Returns </span>& Orders
              </p>
            </Link>
          </div>

          <div className="navigation-cart">
            <Link className="link" to="/cart">
              <IconButton sx={{ marginTop: -3 }} variant="text" color="inherit">
                <ShoppingCartOutlinedIcon
                  sx={{
                    fontSize: 45,
                    color: "#DDDDDD",
                    "@media (max-width: 480px)": {
                      fontSize: 20,
                    },
                  }}
                />
                <h4>{cart?.length}</h4>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
