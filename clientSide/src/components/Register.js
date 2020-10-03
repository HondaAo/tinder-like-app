import React, { useContext, useEffect, useState } from 'react'
import firebase from '../firebase';
import AuthContext from '../auth/authContext';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router';

const Register = (props) => {
    const { register, user, setUser }= useContext(AuthContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user => {
          setUser(user)
        })
        if(user){
            props.history.push('/')
        }
    },[])
    function login(){
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider)
        props.history.push('/')
      }
    
    function logout(){
        firebase.auth().signOut()
    }
    const onClick = ()=>{
      register( email, password, props.history)
    }
    return (
        <div className="login">
        <h1>Signup Page</h1>
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
          <br />
          <CardActions className="input">
          <Button color="primary" onClick={login} className="button"><VpnKeyOutlinedIcon style={{ marginRight: '15px'}} />Login with Google</Button>
          </CardActions>
          </Card>
         </>
         ):(
          <Button color="secondary" onClick={logout}><DeleteIcon />Logout</Button>
         )}   
        </div>
    )
}

export default withRouter(Register);