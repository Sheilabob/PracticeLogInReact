import React from "react";

const FirstTab = ({students}) => {

    const studentList = students.map(
        student => <><h2>{student.name}</h2>  
                    <p>{student.day}, {student.time}</p>
                    <p>Grade: {student.grade}, Level: {student.level}</p>
                    </>
    )

  return (
    <div className="FirstTab">
      <p>Full Roster Reports</p>
      {/* First tab content will go here */}
      Students: {studentList}
    </div>
  );
};

export default FirstTab;