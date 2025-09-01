
import './App.css';
import ClassComp from './Components/ClassComp';
import FunctionComp from './Components/FunctionComp';
import { Typography, Grid, Paper } from "@mui/material";


function App() {
  return (
    <div className="App">
      <Paper
                elevation={6} 
                sx={{
                  p: 4,  
                  textAlign: "center",
                  bgcolor: "#f5f5f5", 
                }}
              >
                <Typography variant= "h4" gutterBottom>Assignment-2 Counter Application</Typography>
      
              </Paper>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <FunctionComp />
        </Grid>
        <Grid item xs={12} md={6}>
          <ClassComp />
        </Grid>
      </Grid>
    </div>
  );
}

export default App; 
