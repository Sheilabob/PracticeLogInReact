import React from "react";

const FirstTab = ({students}) => {

    const studentList = students.map(
        student => <><h2>{student.name}</h2>  
                    <p>{student.day}, {student.time}</p>
                    <p>Grade: {student.grade}, Level: {student.level}</p>
                    </>
    )
    const map = {
        'Mon': 1,'Tue': 2,'Wed': 3,'Thur': 4,'Fri': 5,'Sat': 6,
        'Sun': 7
     };
    const sortedDayList = students.sort((a, b) => {
        return map[a.day] - map[b.day];
     });

     console.log("sorted by day", sortedDayList)
     const sortedTimeList = sortedDayList.sort((a,b) => {
        return a.time - b.time
     })
     console.log("sorted by time", sortedTimeList)

  return (
    <div className="FirstTab">
      <p>Full Roster Reports</p>
      {/* First tab content will go here */}
      Students: {studentList}
    </div>
  );
};

export default FirstTab;