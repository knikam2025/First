import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function SideBar() {





  return (

    <nav style={{ width: '200px', backgroundColor: '#f8f9fa', padding: '10px', height: '100vh', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        <li style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
          <FaHome style={{ marginRight: '10px' }} />


          <span>Dashboard</span>
        </li>
        <li style={{ margin: '20px 0' }}>
          <Link to="/Transactions">
          <span>Transactions</span>
          </Link>
        </li>
        <li style={{ margin: '20px 0' }}>

          <Link to="/Accounts">
          <span>Accounts</span>
          </Link>
        </li>
        <li style={{ margin: '20px 0' }}>

          <Link to="/Investment">
          <span>Investment</span>
          </Link>
        </li>
        <li style={{ margin: '20px 0' }}>
          
          <Link to="/Creditcard">
          <span>Credit Card</span>
          </Link>
        </li>
        <li style={{ margin: '20px 0' }}>
          <span>Loans</span>
        </li>
        <li style={{ margin: '20px 0' }}>

          <Link to="/Services">
          
          <span>Services</span>
          </Link>
        </li>
        <li style={{ margin: '20px 0' }}>
          <Link to="/Privileges">
          <span>My Privileges</span>
          </Link>
        </li>
        <li style={{ margin: '20px 0' }}>

          <Link to="/Setting">
          <span>Setting</span>
          </Link>


        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
