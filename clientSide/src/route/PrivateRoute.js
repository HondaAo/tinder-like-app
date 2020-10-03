import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import AuthContext from '../auth/authContext';
import Login from '../components/Login';

const PrivateRoute = ({ component: RouteComponent, ...options}) => {
 const {user} = useContext(AuthContext);
 const Component = user ? RouteComponent : Login;

 return <Route {...options} component={Component} />;
}

export default PrivateRoute;
