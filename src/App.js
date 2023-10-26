import React, { useContext } from "react";
import { Switch, Route, Redirect} from "react-router-dom";

import Feed from "./components/Feed";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Switch>
          {/* Route -> which components should render on which path */}
          <RedirectToFeed path="/login" comp={Login}>
          </RedirectToFeed>
          
          <RedirectToFeed path="/signup" comp={Signup}>
          </RedirectToFeed>

          <PrivateRoute path="/feed" comp={Feed}> 
          </PrivateRoute>

          <PrivateRoute path="/profile" comp={Profile}>
          </PrivateRoute>

          <Redirect from="/" to="/feed"></Redirect>

          <Route>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </AuthContextProvider>
    </>
  );
}

function PrivateRoute(props){
  let Component = props.comp;

  // check -> Are you logged in?
  let cUser = useContext(AuthContext);

  //cUser == null => login page
  return(
    <Route
      {...props}
      render={
        (props) => {
          return cUser != null ? <Component {...props}></Component> : <Redirect {...props} to="/login"></Redirect>
        }
      }
    ></Route>
  )
}

function RedirectToFeed(props){
  let Component = props.comp;

  // check -> Are you logged in?
  let cUser = useContext(AuthContext);

  //cUser == null => login page
  return(
    <Route
      {...props}
      render={
        (props) => {
          //logic
          return cUser != null ? <Redirect {...props} to="/feed"></Redirect> : <Component {...props} ></Component>
        }
      }
    ></Route>
  )
}

export default App;
