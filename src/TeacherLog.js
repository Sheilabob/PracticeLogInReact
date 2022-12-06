function TeacherLog() {
    return (
      <div className="teacherlog card">
        <h1>Teacher Assigment Page</h1>
        <form>
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