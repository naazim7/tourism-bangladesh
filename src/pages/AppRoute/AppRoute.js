import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../../components/About/About';
import AddService from '../../components/AddService/AddService';
import Booking from '../../components/Booking/Booking';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import ManageOrders from '../../components/ManageOrders/ManageOrders';
import UpdateOrders from '../../components/ManageOrders/UpdateOrder';
import Orders from '../../components/Order/Orders';
import Register from '../../components/Register/Register';
import ServiceDetails from '../../components/Services/ServiceDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
const AppRoute = () => {
    return (
        <>
            <Router>
                <Switch>

                    <Route exact path="/">
                        <Home></Home>
                     </Route>
                    <Route  path="/home">
                        <Home></Home>
                     </Route>
                    <Route exact path="/login">
                       <Login></Login>
                     </Route>
                    <Route exact path="/register">
                       <Register></Register>
                     </Route>
                    <PrivateRoute path="/addservice">
                       <AddService></AddService>
                     </PrivateRoute>
                    <PrivateRoute path="/orders">
                       <Orders></Orders>
                     </PrivateRoute>
                    <PrivateRoute path="/manageorders">
                    <ManageOrders></ManageOrders>
                     </PrivateRoute>
                    <PrivateRoute path="/updateorders">
                    <UpdateOrders></UpdateOrders>
                     </PrivateRoute>
                    <Route path="/about">
                      <About></About>
                     </Route>
                    <PrivateRoute path="/packages/:placeID">
                       <ServiceDetails></ServiceDetails>
                     </PrivateRoute>
                    <Route path="/booking/:placeID">
                       <Booking></Booking>
                     </Route>

                </Switch>
                
            </Router>
            </>
    );
};

export default AppRoute;