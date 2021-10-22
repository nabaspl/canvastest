import React, { useState } from "react";
import "./App.css";
import AppBar from "./components/appBar";
import SideNav from "./components/sideNavBar";
import Home from "./page/home";
import Account from "./page/account";
import UserInfo from "./page/userInfo";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";

import useStyle from "./style.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export const formContext = React.createContext();

function App() {
  const classes = useStyle();

  

  const appMenuItems = [
    {
      name: "Dashboard",
      link: "/",
      Icon: DashboardIcon,
      Page: Home,
    },
    {
      name: "Account",
      link: "/account",
      Icon: PersonAddIcon,
      Page: Account,
    },
    {
      name: "UserInfo",
      link: "/userinfo",
      Icon: PersonAddIcon,
      Page: UserInfo,
    }
  ];
const [formValues,setFormValues] = useState({});
  return (
    <formContext.Provider value={[formValues,setFormValues]}>
    <Router>
      <AppBar />
      <main className={classes.mainContainer}>
        <div className={classes.sideNavSection}>
          <SideNav appMenuItems={appMenuItems} />
        </div>
        <div className={classes.mainSection}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/dashboard" />;
              }}
            />
            {/* {appMenuItems.map((item, index) => {
           return <Route path={item.link} component={item.Page} />
           })} */}
            <Route path="/dashboard" component={Home} />
            <Route path="/account" component={Account} />
            <Route path="/userinfo" component={UserInfo} />
          </Switch>
        </div>
      </main>
    </Router>
    </formContext.Provider>
  );
}

export default App;
