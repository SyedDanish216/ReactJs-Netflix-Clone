import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "react-router";
import "./App.css";
import HomeScreen from "./component/HomeScreen";
import { Route } from "react-router-dom";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import Watch from "./component/Watch";
function App() {
  
  return (
    <div className="home">

<Route exact path="/" >
    <Register />
    </Route>
<Route exact path="/login" >
    <Login />
    </Route>
<Route exact path="/homepage" >
    <HomeScreen />
    </Route>
<Route exact path="/series" >
    <HomeScreen name="series" />
    </Route>
<Route exact path="/movies" >
    <HomeScreen name="movie" />
    </Route>
    

      {/* <Watch /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
