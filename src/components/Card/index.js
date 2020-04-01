import React from 'react'
import './style.css';
/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    <div className="card">
      <h1>More Track</h1>
      <div>
        <h2>fullstack web development Nov 2020</h2>
        <h4>course time : 6 month</h4>
        <h4>Eligibility: Beginner</h4>
        <button style={{backgroundColor:'green'}}>Application Open</button>
        <h4>Classes from Mar 30, 2020 8:00 PM</h4>
        <button style={{backgroundColor:'green'}}>Select</button>
      </div>
      
    </div>
   )

 }

export default Card