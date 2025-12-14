import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 mt-10 gap-3 px-2'>
        <div className='rounded-xl px-9 py-6 bg-red-400'>
            <h2 className='flex text-2xl font-semibold items-center justify-center left-50%'>0</h2>
            <h3 className='flex text-xl font-medium items-center justify-center left-50%'>New Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 bg-blue-400'>
            <h2 className='flex text-2xl font-semibold items-center justify-center left-50%'>0</h2>
            <h3 className='flex text-xl font-medium items-center justify-center left-50%'>New Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 bg-green-400'>
            <h2 className='flex text-2xl font-semibold items-center justify-center left-50%'>0</h2>
            <h3 className='flex text-xl font-medium items-center justify-center left-50%'>New Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 bg-yellow-400'>
            <h2 className='flex text-2xl font-semibold items-center justify-center left-50%'>0</h2>
            <h3 className='flex text-xl font-medium items-center justify-center left-50%'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers