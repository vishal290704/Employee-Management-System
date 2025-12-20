import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 mt-10 gap-3 px-2'>
        <div className='rounded-xl px-9 py-6 bg-red-400'>
            <h2 className='flex text-2xl font-semibold items-center justify-center left-50%'>{data.taskNumbers.newTask}</h2>
            <h3 className='flex text-xl font-medium items-center justify-center left-50%'>New Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 bg-blue-400'>
            <h2 className='flex text-2xl font-semibold items-center justify-center left-50%'>{data.taskNumbers.active}</h2>
            <h3 className='flex text-xl font-medium items-center justify-center left-50%'>Active Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 bg-green-400'>
            <h2 className='flex text-2xl font-semibold items-center justify-center left-50%'>{data.taskNumbers.completed}</h2>
            <h3 className='flex text-xl font-medium items-center justify-center left-50%'>Completed Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 bg-yellow-400'>
            <h2 className='flex text-2xl font-semibold items-center justify-center left-50%'>{data.taskNumbers.failed}</h2>
            <h3 className='flex text-xl font-medium items-center justify-center left-50%'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers