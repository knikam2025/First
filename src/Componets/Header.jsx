import React from 'react';
import { CiBank } from 'react-icons/ci';
import { FaCcDiscover } from 'react-icons/fa';
import { VscGear } from 'react-icons/vsc';
import { CiBellOn } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CiBank style={{ marginRight: '10px' }} />
       <Link to="/Home">
        <span>FirstBank</span>
       </Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaCcDiscover style={{ marginRight: '10px' }} />
        <span>Overview</span>
      </div>
      <div>
        <input type="text" placeholder="Search..." style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ced4da' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <VscGear style={{ marginRight: '10px' }} />
        <span>Setting</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CiBellOn style={{ marginRight: '10px' }} />
        <span>Bell</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CgProfile style={{ marginRight: '10px' }} />
        <span>Profile</span>
      </div>
    </header>
  );
};

export default Header;
