import { useState } from "react";
import Header from "./Components/Header.js";
import StudentLog from "./StudentLog.js";
import TeacherLog from "./TeacherLog.js";
import AssignmentCard from "./Components/AssignmentCard.js";
import ProgressBar from "./Components/ProgressBar.js";

function LoginPage() {

    let students = [{name:'Alice', day:'Tue', time:'3:30pm', grade:'1st', level:'1A', arrayOfAssignments: [{title:"Alice's assignment", description:"Alice's assignments", notes: "Alice's notes", date: "10/3/2022"}]}, {name:'Ella', day:'Tue', time:'4:00pm', grade:'6th', level:'1B', arrayOfAssignments: [{title:"Ella's assignment", description:"Ella's assignments", notes: "Ella's notes"}, {title:"Ella's assignment2", description:"Ella's assignments2", notes: "Ella's notes2"}, {title:"Ella's assignment3", description:"Ella's assignments3", notes: "Ella's notes3"}]}, {name:'Liam', day:'Tue', time:'4:30pm', grade:'KG', level:'1A', arrayOfAssignments: []}, {name:'Zinn', day:'Tue', time:'5:00pm', grade:'KG', level:'1B', arrayOfAssignments: []}]
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
    console.log({ pages });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPages(!pages);
    console.log("login", values.name);
    console.log("pages", pages);
  };

  if (values.name === "student" && pages) {
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
