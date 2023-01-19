import { useState } from "react";
import Header from "./Components/Header.js";
import StudentLog from "./StudentLog.js";
import TeacherLog from "./TeacherLog.js";
import AssignmentCard from "./Components/AssignmentCard.js";
import ProgressBar from "./Components/ProgressBar.js";
import Students from "./students.js";

function LoginPage() {

    let students = Students;
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

  const singleStudent = students.find(student => student.userName === values.name)

  if (userNameArray.includes(values.name) && pages) {
    logSheet = (
      <>
        <form onSubmit={handleSubmit}>
          <button type="submit" onSubmit={handleLogout}>
            Logout
          </button>
        </form>
        <StudentLog student={singleStudent}/>
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
