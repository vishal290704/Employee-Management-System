import React from 'react'

const NewTask = ({task}) => {
  return (
    <div className='shrink-0 h-full w-71.25 p-5 bg-red-400 mx-5 rounded-xl relative'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
                <h4 className='text-sm'>{task.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
            <p className='text-sm mt-2'>
                {task.description}
            </p>
            <div className='absolute flex justify-between gap-3 bottom-5 left-5 right-5'>
                <button className='bg-green-600 flex-1 text-white text-sm py-2 rounded-md
               hover:bg-red-700 active:scale-95
               shadow-md hover:shadow-lg transition-all duration-200'>Accept Task</button>

            </div>
        </div>
  )
}

export default NewTask