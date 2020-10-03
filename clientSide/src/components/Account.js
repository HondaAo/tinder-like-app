import Axios from '../axios';
import React, { useState, useEffect } from 'react'
import { TextField, FormControl, InputLabel, Select, Button, MenuItem } from '@material-ui/core';
import { useLocation } from 'react-router';

const Account = () => {
    const [ user, setUser] = useState({});
    const [ userDifined, setUserDifined ] =useState(false)
    const [ name, setName ] = useState('');
    const [ email, setEmail] = useState('');
    const [ sex, setSex ] =useState('');
    const [ address, setAddress ] =useState('');
    const [ age, setAge ] = useState('');
    const [ discription, setDiscription ] = useState('');
    const [ id, setId ] = useState('');
    const location = useLocation();
    const userId = location.hash.toString().slice(1)
    useEffect(()=>{
        setId(userId);
        Axios.get(`tinder/account/${userId}`)
        .then(res => {
            setUser(res.data)
            setUserDifined(true);
        })
        .catch(err => console.log(err));
    })
    const onClick = ()=>{
        const user = {
          id,
          name,
          email,
          sex,
          address,
          age,
          discription
        }
        Axios.post('tinder/account',user)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
    return (
        <div className="account">
         {userDifined ? (
           <div style={{ padding: '5%'}}>
            {user.userId}
            <h2>You have already registered data.</h2>
           </div>
         ):( 
             <form className="account-form">
              <TextField value={id} />
              <TextField id="standard-basic" label="Name" fullWidth value={name} onChange={(e)=> setName(e.target.value)} />
              <TextField id="standard-basic" label="Email" fullWidth value={email} onChange={(e)=> setEmail(e.target.value)} />
              <FormControl>
                <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sex}
                  fullWidth
                  onChange={(e)=> setSex(e.target.value)}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
              <TextField id="standard-basic" label="address" fullWidth value={address} onChange={(e)=> setAddress(e.target.value)} />
              <TextField id="standard-basic" label="age" fullWidth value={age} onChange={(e)=> setAge(e.target.value)} />
              <TextField id="standard-basic" label="discription" fullWidth value={discription} onChange={(e)=> setDiscription(e.target.value)}/>
              <Button variant="contained" color="primary" onClick={onClick}>
                 Register
              </Button>
             </form> 
         )
         }
        </div>
    )
}

export default Account
