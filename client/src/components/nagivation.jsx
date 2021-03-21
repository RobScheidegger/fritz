import React, { useState } from 'react'
import {Container, TextField} from '@material-ui/core'
import {styles} from './navigation.style'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dashboard from './dashboard/dashboard'
import Interactive from './interactive/interactive';


export default class Nagivation extends React.Component {
    
    constructor(){
        super();
        this.state = {page: 'Dashboard'};
    }

    getPage = (pageName) => {
        switch (this.state.page) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Interactive':
                return <Interactive />;
            case 'Activity':
                return <div>Activity</div>
            default:
                return <div>Error: No Nav page selected.</div>
        }
    };

    setPage = (pageName) => {
        this.setState(state => {
            return {...state, page: pageName}
        })
    };

    drawer = (
        <div style={styles.innerDrawer}>
          <Divider />
          <List>
              <ListItem button key='Dashboard' onClick={() => this.setPage('Dashboard')}>
                <ListItemIcon><DashboardIcon /></ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItem>
              <ListItem button key='Interactive' onClick={() => this.setPage('Interactive')}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='Interactive' />
              </ListItem>
              <ListItem button key='Charts' onClick={() => this.setPage('Charts')}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='Charts' />
              </ListItem>
              <ListItem button key='Activity' onClick={() => this.setPage('Activity')}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='Activity' />
              </ListItem>
          </List>
          <Divider />
        </div>
      );

    render(){
        const renderedPage = this.getPage(this.state.pageName);
        return (
            <div style={styles.root}>
                <CssBaseline />
                <AppBar position="fixed" style={styles.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            Fritz
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav aria-label="navigation" styles={{marginTop: 100}}>
                    <Drawer
                        styles={styles.drawer}
                        
                        variant="permanent"
                        open
                    >
                        {this.drawer}
                    </Drawer>
                </nav>
                <main style={styles.content}>
                    {renderedPage}
                </main>
            </div>
        );
    }
}