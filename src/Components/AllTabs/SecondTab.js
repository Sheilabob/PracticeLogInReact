import React from "react";
import IndivStudents from "../TeacherPages/IndivStudents";

const SecondTab = ({students}) => {
  return (
    <div className="SecondTab">
      <p>Individual Student Management</p>
      {/* Second  tab content will go here */}
      <IndivStudents students={students}/>
    </div>
  );
};

export default SecondTab;