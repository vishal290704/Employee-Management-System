import React from 'react'

const NewTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[285px] p-5 bg-blue-400 mx-5 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>15 Dec 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit temporibus dolores nam, maxime repellendus maiores.
            </p>
            <div className='mt-8 flex justify-between'>
                <button className=''>Accept Task</button>

            </div>
        </div>
  )
}

export default NewTask