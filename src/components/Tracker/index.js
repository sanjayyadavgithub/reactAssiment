import React from 'react'
import './style.css'
/**
* @author
* @function Tracker
**/

const Tracker = (props) => {
  return(
       <div className="tracker">
            <h4 style={{fontSize:'20px',marginBottom:'-20px'}}>Tracks</h4>
            <h5 style={{borderBottom: '1px solid black',fontSize:'20px'}}>playground</h5>
            <h1 style={{borderBottom: '1px solid black'}}>Your Tracker</h1>
          <div className="track" style={{borderBottom: '1px solid black'}}>
               <sapn style={{color:'#88e1f2',fontSize:'20px'}}>Tracker Name</sapn>
               <span style={{color:'#88e1f2',fontSize:'20px'}}>Starting from</span>
               <span style={{color:'#88e1f2',fontSize:'20px'}}>Status</span>
          </div>
          <div style={{borderBottom: '1px solid black'}}>
               <sapn style={{color:'#9399ff',fontSize:'20px'}}>Full stack web development Nov Batch</sapn>
               <span style={{fontSize:'20px'}}>Nov 25 2020 </span>
               <span><button style={{backgroundColor:'green',fontSize:'20px'}}>ISA ofered</button></span>
          </div>
          <div style={{borderBottom: '1px solid black'}}>
               <sapn style={{color:'#9399ff',fontSize:'20px'}}>Newton school challenge nov 30 2020</sapn>
               <span style={{fontSize:'20px'}}>Nov 30 2020</span>
               <span><button style={{backgroundColor:'yellow',fontSize:'20px'}}>Completed</button></span>
          </div>
          
    </div>
   )

 }

export default Tracker