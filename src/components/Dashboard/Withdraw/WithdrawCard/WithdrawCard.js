import {Divider, IconButton, Paper, Typography, Button, Dialog, DialogTitle, DialogContent,  DialogActions, TextField, ButtonGroup } from '@mui/material'
import React, { useEffect, useState } from 'react'
import database from '../../../../firebaseconf'
import { getDatabase,ref,update, onValue} from 'firebase/database'
import { CopyAllSharp } from '@mui/icons-material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios'
const WithdrawCard = ({obj,wkey,done}) => {
    const [authdata, setauthdata] = useState({})
    const [open, setopen] = useState(false)
    const [trans, settrans] = useState('')
    useEffect(() => {
        onValue(ref(getDatabase(database),`/users/${obj.uid}`),(sn)=>{
            setauthdata(sn.val())
        })
    }, [])
    const markasdone = async ()=>{
        const params = {
                service_id: "service_0wmdg4g",
                template_id: "template_gayrqtg",
                user_id: "user_qZlg98JjvPKJ7OusrlGsU",
                template_params: {
                    to_name: obj.name,
                    to_money: authdata.email,
                    to_transaction: trans,
                    to_medium: obj.method
                }
        }
       await  axios.post('https://api.emailjs.com/api/v1.0/email/send',JSON.stringify(params),{
           headers : {'Content-Type': 'application/json'}
       }).then((e)=>{
            console.log(e)
            alert("Email sent!")
        }).catch((s)=>{
            console.log(s)
        })
        update(ref(getDatabase(),`withdraw/${wkey}`),{
            status :'done',
            trans
        })
    }
    const markasundone = async ()=>{
      
      await update(ref(getDatabase(),`withdraw/${wkey}`),{
            status :'undone'
        })
    }
    return (
        <div>
            <Paper variant="outlined" style={{margin:10,padding:10}}>
                <center>
               <Typography variant="h6" color="primary" align='center'> {done ? <CheckCircleIcon/> : null} Amount : {obj.amount} Points</Typography>
                </center>
                <Typography variant="subtitle2" color="initial">Method: {obj.method}</Typography>
                <Typography variant="subtitle2" color="initial">{obj.method} Number: {obj.number} <IconButton onClick={()=>{navigator.clipboard.writeText(obj.number); alert('number copied')}}><CopyAllSharp style={{paddingBottom:10}}/></IconButton> </Typography> 
                <Divider/>
                <Typography variant="h7" color="primary">Account Details:</Typography>
                <Typography variant="subtitle2" color="initial">Name: {authdata.name}</Typography>
                <Typography variant="subtitle2" color="initial">Present Balance: {authdata.balance} Coins</Typography>
                <Typography variant="subtitle2" color="initial">E-mail: {authdata.email}</Typography>
                <Typography variant="subtitle2" color="initial">Phone: {authdata.phone}</Typography>
                {done ? <Typography variant="subtitle2" color="initial">Transaction ID: {obj.trans}</Typography> : null}
                <center>
                    {done? 
                    <Button variant="contained" color="primary" onClick={markasundone}>
                      Mark as Undone
                    </Button>:
                    <Button variant="contained" color="primary" onClick={()=> setopen(true)}>
                      Mark as Done
                    </Button>}   
                </center>
            </Paper>
            <Dialog open={open} onClose={()=> setopen(false)} aria-labelledby="">
              <DialogTitle>
                Please Enter The Transaction ID
              </DialogTitle>
              <DialogContent>
                  <TextField
                    label="Transaction ID"
                    value={trans}
                    style={{marginTop:10}}
                    fullWidth
                    onChange={(e)=> settrans(e.target.value)}
                  />
              </DialogContent>
              <DialogActions>
                  <ButtonGroup variant="contained">
                    <Button color="primary" disabled={!trans} onClick={markasdone}>Done</Button>
                    <Button color="secondary" onClick={(e)=> setopen(false)}>Close</Button>
                    
                  </ButtonGroup>
              </DialogActions>
            </Dialog>
        </div>
    )
}

export default WithdrawCard

