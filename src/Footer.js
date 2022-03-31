import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const Footer = () => {
  return (
    <AppBar position='static' className='footer'>
    <Toolbar>
        <Typography> Copy Right &copy; 2022</Typography>
    </Toolbar>
 </AppBar>
  )
}

export default Footer