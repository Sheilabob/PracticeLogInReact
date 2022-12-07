function TeacherLog() {
    return (
      <div className="teacherlog card">
        <h1>Teacher Assigment Page</h1>
        <div className="card">
          <h2>Full Report</h2>
        </div>
        <form>
          <h2>Individual Student Management</h2>
          <label for="students">Select Student</label>
          <select id="students" name="students">
            <option value="Grace">Grace</option>
            <option value="Alice">Alice</option>
            <option value="Ella">Ella</option>
            <option value="Liam">Liam</option>
          </select>
        </form>
      </div>
    );
  }
  
  export default TeacherLog;