import React from "react";

const FirstTab = ({students}) => {

    const studentList = students.map(
        student => <h2>{student}</h2>
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