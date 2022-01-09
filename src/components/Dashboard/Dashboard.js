import React from 'react'
import {Paper} from '@mui/material'
const Dashboard = ({compo}) => {
    return (
        <div>
            <Paper style={{margin:20,padding:20}}>
                {compo}
            </Paper>
        </div>
    )
}

export default Dashboard
