import { Paper, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const AuthCompo = ({setauth}) => {
    const styles = {
        height: '100%',
        width: '100%',
        position: 'fixed',
        backgroundColor: 'rgba(255, 255, 255,1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const signin = ()=>{
        signInWithEmailAndPassword(getAuth(), email, pass).then((user)=>{
            if(user.user.uid === 'zna8oVMhu3UPcIy1tYn9HC0r9Hr1'){
                alert('Logged in')
            }
            else{
                alert('You are not allowed to sign in')
            }
        }).catch((err)=>{
            alert(err.message)
        })
    }
    return (
        <div style={styles}>
            <Paper variant="outlined">
                <center>
                <Typography variant="h6" color="primary">Sign In</Typography>
                <TextField
                  label="E-mail"
                  style={{width:'400px',margin:10}}
                  value={email}
                  onChange={(e)=> setemail(e.target.value)}
                  variant="outlined"
                  style={{marginTop:10}}
                /><br/>
                <TextField
                  label="Password"
                  style={{width:'400px',margin:10}}
                  type="password"
                  value={pass}
                  onChange={(e)=> setpass(e.target.value)}
                  variant="outlined"
                  style={{marginTop:10}}
                /><br/>
                <Button variant="contained" color="primary" disabled={!email || !pass} onClick={signin}>
                  Sign In
                </Button>
                </center>
            </Paper>
        </div>
    )
}

export default AuthCompo
