import * as React from 'react';
import Box from '@mui/material/Box';
import starwarBg from "../assests/starwarBg.jpg";

const Home = () => {
 
  return (
    <>
      <Box
        sx={{
          width:"100%",
          height:"90vh",
        }}
      >
        <img src={starwarBg} alt="" style={{width:"100%", height:"100vh", objectFit:"cover", filter: "brightness(50%)"}}  />
        <div style={{position:"absolute", width:"70%", top:"30%", right:"15%", color:"#fff", textAlign:"center" }}>
            <h2 style={{ fontSize:"35px", fontWeight:"bold"}}>StarWar</h2>
            <p style={{fontSize:"16px"}}>The Star Wars universe is teeming with iconic characters, each with their own unique stories and roles</p>
        </div>
    </Box>
    </>
  )    
}

export default Home