import React from 'react';
import { FaHome, FaReact, FaMoneyBillAlt, FaUser, FaChartLine, FaCreditCard, FaUniversity, FaCog, FaConciergeBell, FaGifts } from 'react-icons/fa'; // Import necessary icons
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <nav style={{ width: '200px', backgroundColor: '#f8f9fa', padding: '10px', height: '100vh', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        <li style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
          <FaReact style={{ marginRight: '10px' }} /> {/* Logo Icon */}
          <span>Logo</span> {/* Logo Text */}
        </li>
        <li style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
          <FaHome style={{ marginRight: '10px' }} />
          <span>Dashboard</span>
        </li>
        <li style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
          <FaMoneyBillAlt style={{ marginRight: '10px' }} />
          <Link to="/Transactions">
            <span>Transactions</span>
          </Link>
        </li>
        <li style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
          <FaUser style={{ marginRight: '10px' }} />
          <Link to="/Accounts">
            <span>Accounts</span>
          </Link>
        </li>
        <li style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
          <FaChartLine style={{ marginRight: '10px' }} />
          <Link to="/Investment">
            <span>Investment</span>
          </Link>
        </li>
        <li style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
          <FaCreditCard style={{ marginRight: '10px' }} />
          <Link to="/Creditcard">
            <span>Credit Card</span>
          </Link>
        </li>
        <li style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
          <FaUniversity style={{ marginRight: '10px' }} />
          <span>Loans</span>
        </li>
        <li style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
          <FaConciergeBell style={{ marginRight: '10px' }} />
          <Link to="/Services">
            <span>Services</span>
          </Link>
        </li>
        <li style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
          <FaGifts style={{ marginRight: '10px' }} />
          <Link to="/Privileges">
            <span>My Privileges</span>
          </Link>
        </li>
        <li style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
          <FaCog style={{ marginRight: '10px' }} />
          <Link to="/Setting">
            <span>Setting</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
