import { Fab } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Withdraw from '../Dashboard/Withdraw/Withdraw';
import Task from '../Dashboard/TaskActivity/Task';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { NotificationsSharp } from '@material-ui/icons';
import Users from '../Users/Users';
import Notification from '../Dashboard/Notification/Notification';
import { Person } from '@mui/icons-material';
const AsholMenu = ({setcompo}) => {
    const compos = [<Withdraw/>,<Task/>,<Users/>,<Notification/>]
    const [click, setclick] = useState(false)
    return (
        <div>
            <Fab style={{position:'fixed',margin:10,bottom:10,right:10}} color="primary" onClick={(e)=> setclick(!click)}>
                <AddIcon/>
            </Fab>
            {click ?
            <React.Fragment>
            <Fab style={{position:'fixed',margin:10,bottom:250,right:10}} color="secondary" onClick={(e)=> {setcompo(compos[2])}}>
               <Person/>
            </Fab>
            <Fab style={{position:'fixed',margin:10,bottom:190,right:10}} color="secondary" onClick={(e)=> {setcompo(compos[3])}}>
                <NotificationsSharp/>
            </Fab>
            <Fab style={{position:'fixed',margin:10,bottom:130,right:10}} color="secondary" onClick={(e)=> {setcompo(compos[0])}}>
                <PriceCheckIcon/>
            </Fab>
            <Fab style={{position:'fixed',margin:10,bottom:70,right:10}} color="secondary" onClick={(e)=> {setcompo(compos[1])}}>
                <DoneAllIcon/>
            </Fab>
            </React.Fragment>: null}
        </div>
    )
}

export default AsholMenu
