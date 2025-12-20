import React from 'react'
import Header from '../../other/Header'
import TaskListNumbers from '../../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({loggedInUserData}) => {

  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data = {loggedInUserData}/>
        <TaskListNumbers data = {loggedInUserData} />
        <TaskList data = {loggedInUserData} />
    </div>
  )
}

export default EmployeeDashboard