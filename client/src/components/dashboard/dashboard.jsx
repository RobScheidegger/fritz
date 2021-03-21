import React, { useState } from 'react'
import {Container, Paper, TextField, Typography, Grid} from '@material-ui/core'

export default class Dashboard extends React.Component {
    
    constructor(){
        super();
    }

    render(){
        return (
            <Container style={{padding: 10}}>
                <Typography variant="h3">Dashboard</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper elevation={3} style={{height: 200, padding: 10}}>
                            Chart 1
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper elevation={3} style={{height: 200, padding: 10}}>
                            Chart 2
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}