import React from 'react';
import './style.css';

/**
* @author
* @function Profile
**/

const Profile = (props) => {
  return(
      <div className="profile"> 
          
      <img src={require('../../../public/asserts/sanjay.jpg')} alt="profile image" />
      <h2>SANJAY YADAV</h2>
      
          
    </div>
   )

 }

export default Profile