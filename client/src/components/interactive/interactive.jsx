import React, { useState } from 'react'
import {Container, Paper, TextField, Typography, Grid} from '@material-ui/core'

export default class Interactive extends React.Component {
    
    constructor(){
        super();
        this.state = {messages: [], textMessage: ''};
    }

    onKeyUp(event){
        if(event.key == 'Enter'){
            var newState = {...this.state};
            newState.messages.push(this.state.textMessage);
            newState.textMessage = '';

            this.setState(newState);
        }
    }
    
    handleChange(event){
        event.preventDefault();
        console.log(this,event);
        this.setState(state => {
            return {
                ...state,
                textMessage: event.target.value
            }
        })
    }

    render(){
        const renderedMessages = this.state.messages.map((message,index) => {
            return <div>{message}</div>
        });
        return (
            <Container style={{padding: 10}}>
                <Typography variant="h3">Interactive</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <Paper elevation={3} style={{height: 800, padding: 10}}>
                            <Container style={{height: '90%'}}>
                                {renderedMessages}
                            </Container>
                            <Container style={{height: '10%'}}>
                                <TextField placeholder={'Interact...'} 
                                style={{width: '100%',height: '100%'}} 
                                onKeyDown={(e) => this.onKeyUp(e)}
                                onChange={(e) => this.handleChange(e)}
                                value={this.state.textMessage}></TextField>
                            </Container>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}