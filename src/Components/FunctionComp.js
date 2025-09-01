import React, {useState} from "react";
import { Button, Container, Typography, Box, Paper } from "@mui/material";
function FunctionComp() {
  const [count, setCount] = useState(0);
  const countIncrement = () => {
    setCount(count + 1);
    console.log(count);
  }
  const countDecrement = () => {
    if (count > 0) {
    setCount(count - 1);
    } else {
      setCount(0);
    }
    console.log(count);
  }
  return (
    <div>
      
      <Container maxWidth="sm"
                sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "50vh",
                }}><Paper
                elevation={6} 
                sx={{
                  p: 4, 
                  borderRadius: 3, 
                  textAlign: "center",
                  bgcolor: "#f5f5f5", 
                }}
              >
                  <Typography variant= "h4" gutterBottom>Function Component</Typography>
      <Box display = "flex" justifyContent = "center" alignItems = "center" gap = {2} >
        <Button variant = 'contained' color="error"onClick={() => countDecrement()} disabled={count === 0}>-</Button>
      <Typography variant= "h3">{count}</Typography>
      <Button variant = 'contained' color = "success" onClick={() => countIncrement()}>+</Button>
      </Box>
      </Paper>
      </Container>
      
      
      
    </div>
  );
}
export default FunctionComp;