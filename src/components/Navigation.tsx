import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <Typography style={{color: 'black', textDecoration: "none"}} variant="h6" component={Link} to="/" color="primary.main">
                    CS GO Blog
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;
