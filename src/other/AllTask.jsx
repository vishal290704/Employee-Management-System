import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext)
  console.log(authData.employees);
  
  return (
    <div className='bg-[#1c1c1c] p-5 mt-10 rounded h-48 overflow-auto'>
      {authData.employees.map(function(elem){
        return  <div className='bg-red-700 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 bg-red-400'>{elem.firstName}</h2>
            <h3 className='w-1/5 bg-red-400'>Task</h3>
            <h5 className='w-1/5 bg-red-400'>Status</h5>
            <h5 className='w-1/5 bg-red-400'>Status</h5>
        </div>
      })}
       
         {/* <div className='bg-blue-700 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Vishal</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
         <div className='bg-purple-700 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Vishal</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
         <div className='bg-yellow-700 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Vishal</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
         <div className='bg-green-700 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Vishal</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div> */}
    </div>
  )
}

export default AllTask
