import React from 'react'

const Loan = () => {
  return (

<div>


    <div className='m-10 flex justify-around w-full'>
         
<div className= 'bg-slate-200 flex w-48 h-[10rem] justify-between rounded-3xl m-4'>
    <div className='m-4 text-center mt-10'>Icon</div>
    <div className='m-5'>
        <p>Personal Loan</p>
        <p>50,000/-</p>
    </div> 
</div>



<div className= 'bg-slate-200 flex w-48 h-[10rem] justify-between rounded-3xl m-4'>
    <div className='m-4 text-center mt-10'>Icon</div>
    <div className='m-5'>
        <p>Personal Loan</p>
        <p>50,000/-</p>
    </div> 
</div>


<div className= 'bg-slate-200 flex w-48 h-[10rem] justify-between rounded-3xl m-4'>
    <div className='m-4 text-center mt-10'>Icon</div>
    <div className='m-5'>
        <p>Personal Loan</p>
        <p>50,000/-</p>
    </div> 
</div>


<div className= 'bg-slate-200 flex w-48 h-[10rem] justify-between rounded-3xl m-4'>
    <div className='m-4 text-center mt-10'>Icon</div>
    <div className='m-5'>
        <p>Personal Loan</p>
        <p>50,000/-</p>
    </div> 
</div>


    </div>

    <div className='m-10'>
        <p>

    Active Loans Overview
        </p>
    
<div>



    <table className='w-[100%]' style={{border:"2px solid black"}}>
 <thead className='border-8'>

<tr>

        <th >SL No</th>
        <th>Loan Money</th>
        <th>Left To Repay</th>
        <th>Duration</th>
        <th>Interest Rate</th>
        <th>Installment</th>
        <th>Repay</th>
</tr>
 </thead>

 <tbody>

    <tr>

<td>01</td>
<td> 10,000 </td>
<td>40,500</td>
<td>8 Month</td>
<td>12%</td>
<td>2000/month</td>
<td><button className='bg-slate-200 rounded-none'>Repay</button></td>
    </tr>

    <tr>

<td>02</td>
<td> 10,000 </td>
<td>40,500</td>
<td>8 Month</td>
<td>12%</td>
<td>2000/month</td>
<td><button className='bg-slate-200 rounded-none'>Repay</button></td>
    </tr>

    <tr>

<td>03</td>
<td> 10,000 </td>
<td>40,500</td>
<td>8 Month</td>
<td>12%</td>
<td>2000/month</td>
<td><button className='bg-slate-200 rounded-none'>Repay</button></td>
    </tr>


 </tbody>
    </table>
</div>


    </div>
    </div>
  )
}

export default Loan;