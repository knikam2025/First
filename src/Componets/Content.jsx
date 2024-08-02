import React from 'react';
import Card from '../Comman/Card';
import Transation from '../Comman/Transation'
import Chart from '../Comman/Chart';
import Expence from '../Comman/Expence';
import Quick from '../Comman/Quick';
import BalanceHistory from '../Comman/BalanceHistory';

const Content = () => {
  return (
   <div className=' ml-5 mt-5' style={{padding:"5px"}}>
<div >
    
    <div className='flex'>
    <Card/>
    <Card/>
    <Transation/>
    </div>


<div  className = "flex m-10" style={{width:"100%"}}>
    <div className='bg-slate-300 m-2 ' style={{width:"70%", height:"400px", borderRadius:"30px"}}>
 
    <Chart/>

    </div>
    
    <div className="bg-slate-200 w-10" style={{width:"30%", borderRadius:"30px"}}>
    <Expence />
    </div>
  
    </div>

    <div className='flex'>
    <Quick/>
    <BalanceHistory/>
    </div>

</div>

    
   </div>
  );
}

export default Content;
