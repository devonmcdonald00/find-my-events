import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './index.css'

class Appbar extends React.Component {
    render() {
        return (
            <div className='appbar-container'>
                <Link to='/'>
                    <Typography variant='h6' className='appbar-title'>FIND MY EVENTS</Typography>
                </Link>
            </div>
        )
    }
}

export default Appbar;
