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
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <PrivateRoute path="/feed" comp={<Feed></Feed>}>
            
          </PrivateRoute>
          <PrivateRoute path="/profile" comp={<Profile></Profile>}>
            
          </PrivateRoute>
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

export default App;
