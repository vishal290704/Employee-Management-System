import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)
  // console.log(authData.employees);
  
  return (
    <div className='bg-[#1c1c1c] p-5 mt-6 rounded'>
      <div className='bg-red-700 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Completed Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed Task</h5>
        </div>
    <div className=''>
        {userData.employees.map(function(elem, idx){
        return  <div key={idx} className='bg-gray-900 border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-500'>{elem.taskNumbers.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumbers.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-green-400'>{elem.taskNumbers.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-400'>{elem.taskNumbers.failed}</h5>
        </div>
      })}
    </div>
       

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
