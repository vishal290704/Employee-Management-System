import React from 'react'

const AcceptTask = () => {
  return (
     <div className='flex-shrink-0 h-full w-[285px] p-5 bg-red-400 mx-5 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>15 Dec 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit temporibus dolores nam, maxime repellendus maiores.
            </p>
            <div className='flex justify-between mt-8 gap-3 '>
                <button className='flex-1 bg-green-600 hover:bg-green-700 text-white 
+                    text-sm py-2 rounded-md active:scale-95 transition'>Mark as completed</button>
                <button className='flex-1 bg-red-600 hover:bg-red-700 text-white 
+                    text-sm py-2 rounded-md active:scale-95 transition'>Mark as failed</button>
            </div>
        </div>
  )
}

export default AcceptTask