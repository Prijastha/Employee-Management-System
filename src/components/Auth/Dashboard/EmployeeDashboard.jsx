// import React from 'react'

import Header from "../../others/Header";
import TaskListNumber from "../../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="bg-[#icicic]">
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
