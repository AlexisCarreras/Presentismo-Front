import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
  } from "react-router-dom";
  import Navbar from "../components/Navbar";
 
  import PublicRoute from "./PublicRoute";
  
  import AboutPage from "../pages/AboutPage";
 
  import NotFoundPage from "../pages/NotFoundPage";

  import { Home }             from '../../templates/Home/Home';
  import {Login }              from "../services/Logins/iniciarSesion";
  import { App }              from "../App";
  
  export default function AppRouter() {
    return (
      <Router>
        <Navbar />
        <Switch>
        
          <Route exact path="/App" component={App} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={AboutPage} />
          
          <Route exact path="/signin">
            <Redirect to="/login" />
          </Route>
  
          <PublicRoute exact path="/login" component={Login} />
    
  
          <Route path="/404" component={NotFoundPage} />
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        
        </Switch>
      </Router>
    );
  }
  