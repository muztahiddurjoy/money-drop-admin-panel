import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import {Grid} from '@mui/material'
import database from '../../../firebaseconf'
import {ref,getDatabase,onValue} from 'firebase/database'
import WithdrawCard from './WithdrawCard/WithdrawCard'
const Withdraw = () => {
    const [wdb, setwdb] = useState([])
    const [wkey, setwkey] = useState([])
    useEffect(() =>{
        onValue(ref(getDatabase(database),'/withdraw'),(sn)=>{
            setwkey(Object.keys(sn.val()))
            setwdb(Object.values(sn.val()))
        })
        
    },[])
    return (
        <div>
            <center>
                <Typography variant="h6" color="primary">Done Withdraw Requests</Typography>
            </center>
            <Grid container spacing={0.5}>
            {wdb ? wdb.map((v,i)=>{
                if(v.status!=='done'){
                 return (<Grid item xs={12} md={6} lg={4}>
                     <WithdrawCard obj={v} wkey={wkey[i]} done={false}/>
                 </Grid>)
                }
                else{
                    return null
                }
            }) :null}
            </Grid>

            <center>
                <Typography variant="h6" color="primary">Withdraw Requests</Typography>
            </center>
            <Grid container spacing={0.5}>
            {wdb ? wdb.map((v,i)=>{
                if(v.status==='done'){
                 return (<Grid item xs={12} md={6} lg={4}>
                     <WithdrawCard obj={v} wkey={wkey[i]} done={true}/>
                 </Grid>)
                }
                else{
                    return null
                }
            }) :null}
            </Grid>
        </div>
    )
}

export default Withdraw
