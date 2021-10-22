import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Send } from "@mui/icons-material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Link, useLocation } from "react-router-dom";
import useStyle from "./style.js";
export default function NestedList({appMenuItems}) {
  const [open, setOpen] = React.useState(false);
  const [menuShow, setMenuShow] = React.useState(false);
  const classes = useStyle();
  const handleClick = (menu) => {
    setOpen(menu);
  };

  return (
    <List
      className={classes.navBar}
      component="nav"
      onMouseEnter={() => setMenuShow(true)}
      onMouseLeave={() => setMenuShow(false)}
    >
      {appMenuItems.map((item, index) => (
        <Link key={item.name} to={item.link} className={classes.link}>
          <ListItemButton>
            <ListItemIcon>
              <item.Icon/>
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </Link>
      ))}
      <ListItemButton onClick={() => handleClick("Sent")}>
        <ListItemIcon>
          <Send />
        </ListItemIcon>
        <ListItemText primary="Sent" />
        {open === "Sent" ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={menuShow && open === "Sent"} timeout="auto">
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
