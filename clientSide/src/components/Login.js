import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import firebase from '../firebase';
import AuthContext from '../auth/authContext';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import TextField from '@material-ui/core/TextField';

const Login = (props) => {
    const {login, user, setUser} = useContext(AuthContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user => {
          setUser(user)
        })
        if(user){
            props.history.push('/home')
        }
    },[])
    function loginG(){
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider)
        props.history.push('/home')
      }
    
    function logout(){
        firebase.auth().signOut()
    }
    const onClick = ()=>{
      login(email, password, props.history);
    }
    return (
        <div className="login">
        <h1>Login Page</h1>
         {!user ? (
         <>
          <Card style={{ width: '40%', margin: 'auto'}}>
          <CardContent>
          <TextField
          required
          id="outlined-required"
          label="Email"
          variant="outlined"
          placeholder="email"
          type="email"
          className="input"
          onChange={(e)=> setEmail(e.target.value)}
         /> 
         <br />
         <TextField
          required
          id="outlined-required"
          label="Password"
          variant="outlined"
          placeholder="password"
          type="password"
          className="input"
          onChange={(e)=> setPassword(e.target.value)}
         />
          </CardContent>
          <CardActions className="input">
          <Button variant="contained" color="primary" className="button" onClick={onClick}>Login</Button>
          </CardActions>
          <CardActions className="input">
          <Button color="primary" onClick={loginG} className="button"><VpnKeyOutlinedIcon style={{ marginRight: '15px'}} />Login with Google</Button>
          </CardActions>
          <CardActions className="input">
          <Button variant="contained" color="secondary" className="button"><Link to="/register">Create account</Link></Button>
          </CardActions>
          </Card>
         </>
         ):(
          <Button color="secondary" onClick={logout}><DeleteIcon />Logout</Button>
         )}   
        </div>
    )
}

export default withRouter(Login)
