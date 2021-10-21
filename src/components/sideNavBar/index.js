import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Send } from '@mui/icons-material';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import useStyle from './style.js'
export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const [menuShow,setMenuShow] = React.useState(false);
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
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={()=>handleClick('Inbox')}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open==='Inbox' ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={menuShow&&open==='Inbox'} timeout="auto">
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={()=>handleClick('Sent')}>
        <ListItemIcon>
          <Send />
        </ListItemIcon>
        <ListItemText primary="Sent" />
        {open==='Sent' ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={menuShow&&open==='Sent'} timeout="auto">
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
