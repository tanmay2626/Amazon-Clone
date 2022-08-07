import React from "react";
import "../css/Navigation.css";
import { useStateValue } from "../state/StateProvider";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { InputBase } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Stack from "@mui/material/Stack";

const drawerWidth = 240;
const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Cart",
    link: "/cart",
  },
  {
    name: "Returns & Orders",
    link: "/orders",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

const Navigation = (props) => {
  const [{ cart, user }] = useStateValue();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box className="drawer" onClick={handleDrawerToggle}>
      <Stack
        sx={{ padding: "0 5px 0 5px" }}
        direction="row"
        alignItems="center"
        gap={1}
      >
        <AccountCircleIcon sx={{ fontSize: 50 }} />
        <Typography
          component={Link}
          className="link"
          to={!user ? "/signin" : "/"}
          variant="p"
        >
          {!user ? (
            <p>
              <span>Hello Guest</span>, Sign in
            </p>
          ) : (
            <p>
              <span>Hello {user.username}</span>
            </p>
          )}
        </Typography>
      </Stack>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem sx={{ padding: "0 5px 0 15px" }} key={index} disablePadding>
            <ListItemButton component={Link} to={!user ? "/signin" : item.link}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="navigation" sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: "#131921", padding: 0, width: 100 + "%" }}
        position="static"
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon sx={{ fontSize: 35 }} />
            </IconButton>
          </Box>
          <Box className="navigation-logo">
            <Link to="/">
              <img
                src="https://raw.githubusercontent.com/tanmay2626/Amazon-Clone/master/client/public/amazon-white.png?token=GHSAT0AAAAAABWGUSFACUL35T5DYYRC4UNUYWECFFQ"
                alt="logo"
              />
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              width: 50 + "%",
            }}
          >
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
          </Box>
          <Box className="navigation-option" sx={{ flexGrow: 1 }} />
          <Box
            className="navigation-option"
            sx={{ flexGrow: 0, width: 20 + "%" }}
          >
            <Box>
              <Link
                sx={{ width: 50 + "%" }}
                className="link"
                to={!user ? "/signin" : "/"}
              >
                {!user ? (
                  <p>
                    <span>Hello Guest</span>, Sign in
                  </p>
                ) : (
                  <p>
                    <span>Hello {user.username}</span>
                    <span className="link-span">, Sign Out</span>
                  </p>
                )}
              </Link>
            </Box>
            <Box>
              <Link className="link" to={user ? "/orders" : "/signin"}>
                <p>
                  <span>Returns </span>& Orders
                </p>
              </Link>
            </Box>
          </Box>
          <Box className="navigation-cart">
            <IconButton
              sx={{ height: 100 + "%" }}
              component={Link}
              to="/cart"
              variant="text"
              color="inherit"
            >
              <ShoppingCartOutlinedIcon
                sx={{
                  fontSize: 45,
                  color: "#DDDDDD",
                  "@media (max-width: 480px)": {
                    fontSize: 32,
                    ml: 0,
                  },
                }}
              />
              <h4>{cart?.length}</h4>
            </IconButton>
          </Box>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
