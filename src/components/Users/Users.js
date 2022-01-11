import React, { useEffect, useState } from 'react'
import {getDatabase, ref,onValue} from 'firebase/database'
import UserCard from './UserCard/UserCard'
const Users = () => {
    const [userdb, setuserdb] = useState([])
    useEffect(() => {
        onValue(ref(getDatabase(),'/users'),(sn)=>{
            if (sn.exists()) {
                setuserdb(Object.values(sn.val()));
                console.log(Object.values(sn.val()))
            }
        })
    },[])
    return (
        <div>
            {userdb ? userdb.map((v,i)=>{
                return <UserCard obj={v} key={i}/>
            }) : null}
        </div>
    )
}

export default Users
