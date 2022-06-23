import * as React from 'react';
// import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { userLogout } from '../redux/auth/auth.actions';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { TopBar } from './TopBar';
import { SideBar } from './SideBar';


function GeneralLayout(props) {
    
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TopBar logout={props.logout} />
            <SideBar menu={props.menu} toggleDrawer={toggleDrawer} open={open} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    {props.children}
                </Container>
            </Box>

        </Box>
    );
}

const mapStateToProps = createStructuredSelector({
    // userAuthenticated: selectUserAuthenticated
})
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(userLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(GeneralLayout);