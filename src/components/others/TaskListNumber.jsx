// import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex screen  p-10 justify-between gap-5'>
        <div className='p-10 w-[45%] rounded-xl py-6 px-9 bg-red-500'>
            <h2 className="text-2xl font-semibold">0</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className='p-10 w-[45%] rounded-xl py-6 px-9 bg-blue-400'>
            <h2 className="text-2xl font-semibold">0</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className='p-10 w-[45%] rounded-xl py-6 px-9 bg-green-500'>
            <h2 className="text-2xl font-semibold">0</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className='p-10 w-[45%] rounded-xl py-6 px-9 bg-orange-500'>
            <h2 className="text-2xl font-semibold">0</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber