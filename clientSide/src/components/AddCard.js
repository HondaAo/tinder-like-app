import React, { useState } from 'react'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Component.css';

const AddCard = (props) => {
    const [ name, setName ] = useState('');
    const [ url, setUrl ] = useState('');
    const [ sex, setSex ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ hobby, setHobby ] = useState('');
    const [ age, setAge ] = useState('');
    const onClick = ()=>{
      const user = {
          name,
          url,
          sex,
          age,
          address,
          hobby
      }
      console.log(user);
      axios.post('http://localhost:5000/tinder/card',user)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
      props.history.push('/home');
    }
    return (
        <div className="add-card">
         <h1>Create Post</h1>
         <TextField
          id="standard-full-width"
          label="Name"
          style={{ margin: 8 }}
          placeholder=""
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=> setName(e.target.value)}
          required
        />
         <TextField
          id="standard-full-width"
          label="URL"
          style={{ margin: 8 }}
          placeholder=""
          helperText="URL for picture"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=> setUrl(e.target.value)}
          required
        />
        <TextField
          id="standard-full-width"
          label="sex"
          style={{ margin: 8 }}
          placeholder=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=> setSex(e.target.value)}
          required
        />
        <TextField
          id="standard-full-width"
          label="your place"
          style={{ margin: 8 }}
          placeholder=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=> setAddress(e.target.value)}
          required
        />
        <TextField
          id="standard-full-width"
          label="hobby"
          style={{ margin: 8 }}
          placeholder=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=> setHobby(e.target.value)}
          required
        />
        <TextField
          id="standard-full-width"
          label="your age"
          style={{ margin: 8 }}
          placeholder=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=> setAge(e.target.value)}
          required
        />
         <Button variant="contained" color="primary" className="button" onClick={onClick}>Register</Button>
        </div>
    )
}

export default AddCard
