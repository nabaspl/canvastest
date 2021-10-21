import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import useStyle from './style.js'
import logo from '../../assets/icons/logo.svg'

export default function DenseAppBar() {
  const classes = useStyle();
  return (
      <AppBar position="sticky" className={classes.header}>
        <div className={classes.headerContainer}>
          <div className={classes.headerLeft}>
          <IconButton >
            <img src={logo} alt="logo"/>
          </IconButton>
          </div>
          <div className={classes.headerRight}>
          <Typography variant="h6" color="inherit" component="div">
            <h1 className={classes.headerRightContent}>Home</h1>
          </Typography>
          </div>
        </div>
      </AppBar>
  );
}
