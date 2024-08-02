import React from 'react'

const Transation = () => {
  return (

    <div className='m-10'>
<p>Recent Transations</p>
        <div className='flex  bg-slate-400  w-[500px] '>


<div className='justify-between flex'>
    <p className='m-2 p-2'>All Transtaion</p>
    <p className='m-2 p-2'>Income</p>
    <p className='m-2 p-2'>Expense</p>
</div>



    </div>



    <div className='m-5'>


<table>


<thead>
    <tr>
        <th></th>
        <th>Description</th>
        <th>Transations ID</th>
        <th>Type</th>
        <th>Card</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Receipt</th>
    </tr>
</thead>


<tbody>
    <tr>
        <td>logo</td>
        <td>Sotify Subscrition</td>
        <td>#1234567 Id</td>
        <td>Shopping</td>
        <td>1234****</td>
        <td>28 Jan, 12.30</td>
        <td>-2,500/-</td>
        <td> <button className='bg-green-300 rounded-2xl '> Download</button></td>

    </tr>

    <tr>
        <td>logo</td>
        <td>Sotify Subscrition</td>
        <td>#1234567 Id</td>
        <td>services</td>
        <td>1234****</td>
        <td>28 Jan, 12.30</td>
        <td>-2,500/-</td>
        <td> <button className='bg-green-300 rounded-2xl '> Download</button></td>

        
    </tr>

    <tr>
        <td>logo</td>
        <td>Sotify Subscrition</td>
        <td>#1234567 Id</td>
        <td>trander</td>
        <td>1234****</td>
        <td>28 Jan, 12.30</td>
        <td>-2,500/-</td>
        <td> <button className='bg-green-300 rounded-2xl '> Download</button></td>

        
    </tr>
  
</tbody>

</table>

    </div>


    </div>

  )
}

export default Transation