import { Paper } from '@mui/material';
import React from 'react';
import "../css/Card.css";
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import {Link} from "react-router-dom"


function Card({count, title, Icon,clsnm,clsnm_text,link}) {
    return (
        // <Paper elevation={3} className='paper'>
        <div className='card'>
            <Link to={link} style={{textDecoration:"none"}}>
            <div className={clsnm}>
                <div className='card__info'>
                    <h1 className={clsnm_text}>{count}</h1>
                </div>
                 {Icon}
                <div className='card__title'>
                    <p>{title}</p>
                </div>
            </div>
            </Link>
            </div>
        // </Paper>
    )
}

export default Card
