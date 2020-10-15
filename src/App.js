import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import LogIn from './component/Login/LogIn/LogIn';
import { useState } from 'react';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import AddService from './component/Dashboard/AddService/AddService';
import PlaceService from './component/PlaceService/PlaceService';
import ServiceList from './component/Dashboard/ServiceList/ServiceList';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import UserService from './component/Dashboard/UserService/UserService';
import Review from './component/Dashboard/Review/Review';
import MakeAdmin from './component/Dashboard/MakeAdmin/MakeAdmin';
import Order from './component/Dashboard/Order/Order';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/serviceListO">
            <UserService></UserService>
          </Route>
          <PrivateRoute path="/placeService/:id">
            <PlaceService></PlaceService>
          </PrivateRoute>
          <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/mainAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
