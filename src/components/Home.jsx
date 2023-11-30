import React from 'react'
import Button from "@mui/material/Button";
import Swipper from "./Swipper";
import Features from "./Features";

const Home = () => {
  return (
    <>
    {/* hero section */}


      <div className="hero">

<div className="box left" id="applybox">
  {/* <h1>Welcome to right side</h1> */}
  <h1>Hi all I'm Ashish..</h1>
  <Button variant="contained" sx={{ fontSize: "13px" }}>
          Apply Now
        </Button>
</div>

<div className="box right" id="imgbox">
  <img src="./Image/Ecommerce.png" width={"500px"} height={"500px"}/>
 
</div>
</div>
   <div className="MySwipper"><Swipper/></div>
    <div className="MyFeature"> <Features/></div>
   

</>
  )
}

export default Home