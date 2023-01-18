import { useState } from "react";
import Header from "./Components/Header.js";
import StudentLog from "./StudentLog.js";
import TeacherLog from "./TeacherLog.js";
import AssignmentCard from "./Components/AssignmentCard.js";
import ProgressBar from "./Components/ProgressBar.js";

function LoginPage() {

    let students = [{userName:'Alice', firstName:'Alice', lastName:'Vaccaro', day:'Tue', time:'3:30pm', grade:'1st', level:'1A', arrayOfAssignments: [{title:"Alice's assignment", description:"Alice's assignments", notes: "Alice's notes", date: "10/3/2022"}]}, {userName:'Ella', firstName:'Ella', lastName:'Munger', day:'Tue', time:'4:00pm', grade:'6th', level:'1B', arrayOfAssignments: [{title:"Ella's assignment", description:"Ella's assignments", notes: "Ella's notes"}, {title:"Ella's assignment2", description:"Ella's assignments2", notes: "Ella's notes2"}, {title:"Ella's assignment3", description:"Ella's assignments3", notes: "Ella's notes3"}]}, {userName:'Liam', firstName:'Liam', lastName:'Durfee',day:'Tue', time:'4:30pm', grade:'KG', level:'1A', arrayOfAssignments: []}, {userName:'Zinn', firstName:'Zinn-David', lastName:'Levine', day:'Tue', time:'5:00pm', grade:'KG', level:'1B', arrayOfAssignments: []}, {userName:'Noah', firstName:'Noah', lastName:'Kauffman', day:'Tue', time:'8:00am', grade:'5th', level:'2', arrayOfAssignments: [{title:"Noah's assignment", description:"Noah's assignments", notes: "Noah's notes", date: "10/3/2022"}]}, {userName:'Grace', firstName:'Grace', lastName: 'Birdwell', day:'Wed', time:'8:00am', grade:'7th', level:'2', arrayOfAssignments: [{title:"Grace's assignment", description:"Grace's assignments", notes: "Grace's notes", date: "10/3/2022"}]}, {firstName:'Riv', lastName:'McCann',  day:'Wed', time:'3:30pm', grade:'1st', level:'1A', arrayOfAssignments: [{title:"Riv's assignment", description:"Riv's assignments", notes: "Riv's notes", date: "10/3/2022"}]}, {firstName:'Estelle', lastName:'Surkes', day:'Wed', time:'4:00pm', grade:'5th', level:'1B', arrayOfAssignments: [{title:"Estelle's assignment", description:"Estelle's assignments", notes: "Estelle's notes", date: "10/3/2022"}]}, {firstName:'Azalea', lastName:'Han', day:'Wed', time:'4:30pm', grade:'3rd', level:'1A', arrayOfAssignments: [{title:"Azalea's assignment", description:"Azalea's assignments", notes: "Azalea's notes", date: "10/3/2022"}]}, {firstName:'Inga', lastName:'Wilkowski', day:'Wed', time:'5:00pm', grade:'7th', level:'1B', arrayOfAssignments: [{title:"Inga's assignment", description:"Inga's assignments", notes: "Inga's notes", date: "10/3/2022"}]}, {firstName:'Miles', lastName:'Topper', day:'Wed', time:'5:30pm', grade:'5th', level:'2', arrayOfAssignments: [{title:"Miles' assignment", description:"Miles' assignments", notes: "Miles' notes", date: "10/3/2022"}]}]
    const userNameArray = students.map(student => student.userName)

  let logSheet;
  const [values, setValues] = useState({ name: "" });
  const [pages, setPages] = useState(false);

  const handleNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };

  const handleLogout = (event) => {
    event.preventDefault();

    setPages(!pages);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPages(!pages);
  };

  if (userNameArray.includes(values.name) && pages) {
    logSheet = (
      <>
        <form onSubmit={handleSubmit}>
          <button type="submit" onSubmit={handleLogout}>
            Logout
          </button>
        </form>
        <StudentLog />
      </>
    );
  } else if (values.name === "teacher" && pages) {
    logSheet = (
      <>
        <form onSubmit={handleSubmit}>
          <button type="submit" onSubmit={handleLogout}>
            Logout
          </button>
        </form>
        <TeacherLog students={students}/>
      </>
    );
  } else if (pages) {
    logSheet = (
      <>
        <div>Not a valid Login</div>
        <form onSubmit={handleSubmit}>
          <button type="submit" onSubmit={handleLogout}>
            Try Again
          </button>
        </form>
      </>
    );
  } else {
    logSheet = (
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={handleNameInputChange}
        />
        <button type="submit" onSubmit={handleSubmit}>
          Login
        </button>
      </form>
    );
  }

  return (
    <>
    <Header />
      <div className="card login">{logSheet}
      <AssignmentCard />
      <ProgressBar /></div>
      
      </>
  );
}

export default LoginPage;
