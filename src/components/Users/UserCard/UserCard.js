import { CopyAllSharp } from '@mui/icons-material'
import { IconButton, Paper, Typography } from '@mui/material'
import React from 'react'

const UserCard = ({obj}) => {
    return (
        <div style={{margin:10}}>
            <Paper variant="outlined">
                <Typography variant="subtitle2" color="initial">Name: <span style={{color: 'blue'}}>{obj.name}</span></Typography>
                <Typography variant="subtitle2" color="initial">Balance: <span style={{color: 'blue'}}>{obj.balance}</span></Typography>
                <Typography variant="subtitle2" color="initial">E-mail: <span style={{color: 'blue'}}>{obj.email}</span><IconButton style={{fontSize:5}} onClick={()=> {navigator.clipboard.writeText(obj.email);alert('email address copied!')}}><CopyAllSharp/></IconButton></Typography>
                <Typography variant="subtitle2" color="initial">Phone: <span style={{color: 'blue'}}>{obj.phone}</span><IconButton style={{fontSize:5}} onClick={()=> {navigator.clipboard.writeText(obj.phone);alert('phone number copied!')}}><CopyAllSharp/></IconButton></Typography> 
                <Typography variant="subtitle2" color="initial">Notification Token: <span style={{color: 'blue'}}>{obj.token}</span><IconButton style={{fontSize:5}} onClick={()=> {navigator.clipboard.writeText(obj.token);alert('Notification Token copied!')}}><CopyAllSharp/></IconButton></Typography>
            </Paper>
        </div>
    )
}

export default UserCard
