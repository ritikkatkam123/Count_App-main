import React, {Component} from 'react';
import { Button, Container, Typography, Box, Paper } from "@mui/material";
class Class extends Component{
    state = {
        count : 0
    }

    countIncrement = () => {
        this.setState({count : this.state.count + 1});
        
    }
    CountDecrement = () => {
        if (this.state.count > 0) {
            this.setState({count : this.state.count - 1});
        }
        else {
            this.setState({count : 0});
        }
  
    }
    render(){
        return <div>
            
            <Container maxWidth="sm"
                sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "50vh",
            }}> <Paper
                            elevation={6} 
                            sx={{
                              p: 4, 
                              borderRadius: 3,
                              textAlign: "center",
                              bgcolor: "#f5f5f5", 
                            }}
                          >
                <Typography variant= "h4" gutterBottom>Class Component</Typography>
            <Box display = "flex" justifyContent = "center" alignItems = "center" gap = {2} >
            <Button variant = 'contained' color="error" onClick={() => this.CountDecrement()} disabled={this.state.count === 0}>-</Button>
            <Typography variant="h3" >{this.state.count}</Typography >
            <Button variant = 'contained' color= 'success' onClick = {() => this.countIncrement()}>+</Button>
            </Box>
            </Paper>
            </Container>
            
            </div>
    }
}
export default Class;