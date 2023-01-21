import { React, useState } from "react";

const FirstTab = ({students}) => {
    const reports = ["choose", "schedule", "roster"];
    const [report, setReport] = useState(reports[0]);
    const handleSelectReport = (event) => {
        let selectedReport = event.target.value;
        let index = reports.findIndex(report => report === selectedReport);
        setReport(reports[index]);
    }

    const [studentArray, setStudentArray] = useState([...students])

    const sortedByLevel = [...students]
    sortedByLevel.sort((a, b) => {
        return (a.level > b.level) ? 1: (a.level === b.level) ? ((a.grade > b.grade) ? 1: -1): -1;
     });
    const handleLevelSort = () => {
        setStudentArray([...sortedByLevel])
    }

    const sortedByGrade = [...students];
     sortedByGrade.sort((a, b) => {
        return (a.grade > b.grade) ? 1: (a.grade === b.grade) ? ((a.level > b.level) ? 1 : -1): -1;
    })
    const handleGradeSort = () => {
        setStudentArray([...sortedByGrade])
    }

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
     const handleDaySort = () => {
        setStudentArray([...sortedDayTimeList])
    }

    const sortedByLastName = [...students];
    sortedByLastName.sort((a, b) => {
       return (a.lastName > b.lastName) ? 1: -1;
   })
   const handleLastNameSort = () => {
       setStudentArray([...sortedByLastName])
   }

   const sortedByFirstName = [...students];
   sortedByFirstName.sort((a, b) => {
      return (a.firstName > b.firstName) ? 1: -1;
  })
  const handleFirstNameSort = () => {
      setStudentArray([...sortedByFirstName])
  }


    const studentList =
        <>      
            <label htmlFor="reports">Select Report</label>
            <select id="reports" name="reports" onChange={handleSelectReport}>
                {reports.map(report => <option value={report}>{report}</option>)}
            </select>
            <h2>Student List</h2>
            <table>
                <thead>
                    <tr>
                        <th onClick={handleFirstNameSort}>First Name</th>
                        <th onClick={handleLastNameSort}>Last Name</th>
                        <th onClick={handleDaySort}>Lesson Day, Time</th>
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

     const schedule = <div className="fullReport">      
        <label htmlFor="reports">Select Report</label>
            <select id="reports" name="reports" onChange={handleSelectReport}>
                {reports.map(report => <option value={report}>{report}</option>)}
            </select><h2>Schedule</h2> 
            <div class="schedule-container">
                <div class="schedule-column"> 
                 {(sortedDayTimeList.findIndex(entry => entry.day === 'Mon') !== -1) && <h2>Monday</h2>}       
                {sortedDayTimeList.filter(entry => entry.day === 'Mon').map(entry => <p>{entry.time}: {entry.firstName} {entry.lastName}</p>)}
                </div>
                <div class="schedule-column"> 
                {(sortedDayTimeList.findIndex(entry => entry.day === 'Tue') !== -1) && <h2>Tuesday</h2>} 
                {sortedDayTimeList.filter(entry => entry.day === 'Tue').map(entry => <p>{entry.time}: {entry.firstName} {entry.lastName}</p>)}</div>
                <div class="schedule-column"> 
                {(sortedDayTimeList.findIndex(entry => entry.day === 'Wed') !== -1) && <h2>Wednesday</h2>} 
                {sortedDayTimeList.filter(entry => entry.day === 'Wed').map(entry => <p>{entry.time}: {entry.firstName} {entry.lastName}</p>)}</div>
                <div class="schedule-column"> 
                {(sortedDayTimeList.findIndex(entry => entry.day === 'Thur') !== -1) && <h2>Thursday</h2>} 
                {sortedDayTimeList.filter(entry => entry.day === 'Thur').map(entry => <p>{entry.time}: {entry.firstName} {entry.lastName}</p>)}</div>
                <div class="schedule-column"> 
                {(sortedDayTimeList.findIndex(entry => entry.day === 'Fri') !== -1) && <h2>Friday</h2>} 
                {sortedDayTimeList.filter(entry => entry.day === 'Fri').map(entry => <p>{entry.time}: {entry.firstName} {entry.lastName}</p>)}</div>
                <div class="schedule-column"> 
                {(sortedDayTimeList.findIndex(entry => entry.day === 'Sat') !== -1) && <h2>Saturday</h2>} 
                {sortedDayTimeList.filter(entry => entry.day === 'Sat').map(entry => <p>{entry.time}: {entry.firstName} {entry.lastName}</p>)}</div>
                </div>
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