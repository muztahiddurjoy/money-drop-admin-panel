import React, { useState } from 'react'
import database from '../../../firebaseconf'
import {getDatabase, get} from 'firebase/database'
import Typography from '@mui/material/Typography'
import {Paper, TextField, Select, MenuItem, Button} from '@mui/material'
import axios from 'axios'
const Notification = () => {
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const [token, settoken] = useState('')
    const [type, settype] = useState(false)
    const sendNotificationToken = ()=>{
        const params = {
                to : token,
                data : {
                    title : title,
                    content : desc
                }
        }
        axios.post("https://fcm.googleapis.com/fcm/send",JSON.stringify(params),{headers:{
            "Content-Type" : "application/json",
            "Authorization": "key=AAAAXsXopCQ:APA91bFhMjlE85PgDxMWdhwnzyhOXQ6PSUqN18WQu77_JgCeqZ6hOdgD9hB4WS3fux5LcVuX4Zkj8YjA_coSfKsgtTyzzvqjdSH25OUb-Y2DAts6dltJf4TAfbZd-l67x5K3b7k8n9VD"
        }}).then((s)=>{
            console.log(s)
            if (s.status == 200) {
                alert('Notification Sent')
            }
            settitle('')
            setdesc('')
        }).catch((e)=>{
            console.log(e)
        })
    }
    const sendNotificationAll = () =>{
        const params = {
            to : "/topics/all",
            data : {
                title : title,
                content : desc
            }
    }
    axios.post("https://fcm.googleapis.com/fcm/send",JSON.stringify(params),{headers:{
        "Content-Type" : "application/json",
        "Authorization": "key=AAAAXsXopCQ:APA91bFhMjlE85PgDxMWdhwnzyhOXQ6PSUqN18WQu77_JgCeqZ6hOdgD9hB4WS3fux5LcVuX4Zkj8YjA_coSfKsgtTyzzvqjdSH25OUb-Y2DAts6dltJf4TAfbZd-l67x5K3b7k8n9VD"
    }}).then((s)=>{
        console.log(s)
        if (s.status == 200) {
            alert('Notification Sent')
        }
        settitle('')
        setdesc('')
    }).catch((e)=>{
        console.log(e)
    })
    }
    return (
        <div>
            <center>
                <Typography variant="h6" color="primary">Send Notification</Typography>
                <Paper variant="outlined" style={{margin:20,padding:10}}>
                    <TextField
                    variant="outlined"
                    style={{width:'80%'}}
                    label="Title"
                    value={title}
                    onChange={(e)=> settitle(e.target.value)}
                    />
                     <TextField
                    variant="outlined"
                    style={{width:'80%',marginTop:20}}
                    label="Body"
                    multiline
                    rows={3}
                    value={desc}
                    onChange={(e)=> setdesc(e.target.value)}
                    />
                    <Select
                    label="Age"
                    value={type}
                    onChange={(e)=> settype(e.target.value)}
                    style={{width:'80%',marginTop:20}}
                    >
                        <MenuItem value={false}>All</MenuItem>
                        <MenuItem value={true}>Individual</MenuItem>
                    </Select>
                    {type ? <>
                        <TextField
                            label="Token"
                            value={token}
                            onChange={e=> settoken(e.target.value)}
                            style={{width:'80%',marginTop:20}}
                            variant="outlined"
                        />
                    </> : null}
                    <br/>
                    <Button variant="contained" color="primary"
                    disabled={!title || !desc}
                    style={{marginTop:10}} onClick={type? sendNotificationToken : sendNotificationAll}>
                     Send Notification
                    </Button>
                </Paper>
            </center>
        </div>
    )
}

export default Notification
