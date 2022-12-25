import React from "react";

const FirstTab = ({students}) => {

    const studentList =<><h2>Student List</h2> {students.map(
        student => <><h3>{student.name}</h3>  
                    <p>{student.day}, {student.time}</p>
                    <p>Grade: {student.grade}, Level: {student.level}</p>
                    </>
    )}</>
    const map = {
        'Mon': 1,'Tue': 2,'Wed': 3,'Thur': 4,'Fri': 5,'Sat': 6,
        'Sun': 7
     };
    const sortedDayTimeList = students.sort((a, b) => {
        return (map[a.day] > map[b.day]) ? 1: (map[a.day] === map[b.day]) ? ((a.time > b.time) ? 1 : -1): -1;
     });
     const schedule = <><h2>Schedule</h2> {sortedDayTimeList.map( entry => <><p>{entry.day}, {entry.time} - {entry.name}</p></>)}</>

     console.log("sorted by day", sortedDayTimeList)

  return (
    <div className="FirstTab">
      <p>Full Roster Reports</p>
      {studentList}
      {schedule}
    </div>
  );
};

export default FirstTab;