import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import database from '../../../firebaseconf'
import {ref,set,getDatabase,onValue} from 'firebase/database'
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
                <Typography variant="h6" color="primary">Withdraw Requests</Typography>
            </center>
            {wdb ? wdb.map((v,i)=>{
                console.log(v)
            }) :null}
        </div>
    )
}

export default Withdraw
