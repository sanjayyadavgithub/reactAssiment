import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
       <header className="header">
      <nav className="headerMenu">
               <img src={require('../../../public/asserts/logo.png')} alt="img" />
               <h1>Newton  <span style={{color:'#edffea'}}>Schools</span></h1>
          </nav>
          <div className="headerright">
        <span>User Name</span>
          <span>Logout</span>
          </div>
    </header>
   )

 }

export default Header