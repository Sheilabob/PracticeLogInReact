import { React, useState } from "react";

const FirstTab = ({students}) => {
    const [studentArray, setStudentArray] = useState([...students])
    const reports = ["choose", "schedule", "roster"];


    const [report, setReport] = useState(reports[0]);

    const handleSelectReport = (event) => {
        let selectedReport = event.target.value;
        let index = reports.findIndex(report => report === selectedReport);
        setReport(reports[index]);
    }

    const sortedByLevel = [...students]
        
    sortedByLevel.sort((a, b) => {
        return (a.level > b.level) ? 1: -1;
     });

     const handleLevelSort = () => {
        setStudentArray([...sortedByLevel])
     }

     const sortedByGrade = [...students];

     sortedByGrade.sort((a, b) => {
        return (a.grade > b.grade) ? 1: -1;
     })

     const handleGradeSort = () => {
        setStudentArray([...sortedByGrade])
     }

    const studentList =<>      <label htmlFor="reports">Select Report</label>
    <select id="reports" name="reports" onChange={handleSelectReport}>
      {reports.map(report => <option value={report}>{report}</option>)}
      </select><h2>Student List</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Lesson Day, Time</th>
                            <th onClick={handleGradeSort}>Grade</th>
                            <th onClick={handleLevelSort}>Level</th>
                        </tr>
                        </thead>
                        <tbody>
                        {studentArray.map(student =>  
                        <tr>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.day}, {student.time}</td>
                            <td>{student.grade}</td> 
                            <td>{student.level}</td>
                        </tr>)}
                        </tbody>
                    </table>
    </>
    const map = {
        'Mon': 1,'Tue': 2,'Wed': 3,'Thur': 4,'Fri': 5,'Sat': 6,
        'Sun': 7
     };
    const ampm = {
        'am': 1, 'pm': 2
    }

    const sortedDayTimeList = [...students];
    
    sortedDayTimeList.sort((a, b) => {
        return (map[a.day] > map[b.day]) ? 1: (map[a.day] === map[b.day]) ? ((ampm[a.time.slice(-2)] > ampm[b.time.slice(-2)]) ? 1: ((ampm[a.time.slice(-2)] === ampm[b.time.slice(-2)])) ? ((a.time > b.time) ? 1 : -1): -1): -1;
     });
     const schedule = <div className="fullReport">      
        <label htmlFor="reports">Select Report</label>
            <select id="reports" name="reports" onChange={handleSelectReport}>
                {reports.map(report => <option value={report}>{report}</option>)}
            </select><h2>Schedule</h2> 
                {sortedDayTimeList.map(entry => <p>{entry.day}, {entry.time} - {entry.firstName} {entry.lastName}</p>)}
                </div>
    const unSelected = <>      <label htmlFor="reports">Select Report</label>
    <select id="reports" name="reports" onChange={handleSelectReport}>
      {reports.map(report => <option value={report}>{report}</option>)}
      </select></>
     console.log("sorted by day", sortedDayTimeList)

     const display = report === 'roster' ?
        studentList : report === 'schedule' ? schedule: unSelected;

  return (
    <div className="FirstTab">
        <h2>Full Roster Reports</h2>
            {display}
    </div>
  );
};

export default FirstTab;