import React from 'react'

const Setting = () => {
  return (
    <div className='m-10 bg-slate-300 w-[100%] rounded-3xl'>

        <div className='flex justify-around mt-10'>
            <p>Edit Profile</p>
            <p>Prefernces</p>
            <p>Security</p>
        </div>

        <div className='mt-10 ml-[10%]'><p><b>Two-factor Authentication</b></p>
        <input type="checkbox" /> <span> Enable or disable two factor Authentication</span>

        <p> Chnage Password</p>
        <p className='opacity-50'>Current Password</p>

        <input type="text" placeholder='Charle@123' className='w-[50%] rounded-2xl'/>

<p>New Password</p>
<input type="text" placeholder='Charle@123' className='rounded-2xl w-[50%]' />
        
        </div>
        
        
    </div>
  )
}

export default Setting