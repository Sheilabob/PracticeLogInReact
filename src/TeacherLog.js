import { useState } from "react";
import Tabs from "./Components/TabComponent/Tabs";


function TeacherLog() {
  let students = [{name:'Alice'}, {name:'Ella'}, {name:'Liam'}, {name:'Zinn'}]

    return (
      <div className="teacherlog card">
        <h1>Teacher Assigment Page</h1>
        <Tabs students={students}/>
        <div className="card">
          <h2>Full Report</h2>
        </div>
      </div>
    );
  }
  
  export default TeacherLog;