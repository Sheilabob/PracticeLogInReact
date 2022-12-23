import { useState } from "react";
import Tabs from "./Components/TabComponent/Tabs";


function TeacherLog() {
  let students = [{name:'Alice', arrayOfAssignments: [{title:"Alice's assignment", description:"Alice's assignments", notes: "Alice's notes", date: "10/3/2022"}]}, {name:'Ella', arrayOfAssignments: [{title:"Ella's assignment", description:"Ella's assignments", notes: "Ella's notes"}, {title:"Ella's assignment2", description:"Ella's assignments2", notes: "Ella's notes2"}, {title:"Ella's assignment3", description:"Ella's assignments3", notes: "Ella's notes3"}]}, {name:'Liam', arrayOfAssignments: []}, {name:'Zinn', arrayOfAssignments: []}]

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