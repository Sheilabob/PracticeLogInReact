import { useState } from "react";

const IndivStudents = ({students}) => {
    const [values, setValues] = useState(
        { title: "", description: "", notes: "" }
    );

    const [arrayOfAssignments, setArray] = useState([])
  
    const studentList = students.map(
        student => <option value={student.name}>{student.name}</option>
    )

    const handleInputChange = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    };
  
    const handleSelectStudent = (event) => {
        let selectedStudent = event.target.value
        console.log({selectedStudent})
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      let newAssignment = {title: values.title, description: values.description, notes: values.notes}
      console.log("title", values.title, "description", values.description, "notes", values.notes);
      arrayOfAssignments.push(newAssignment)
      setArray([...arrayOfAssignments])
      console.log({arrayOfAssignments})
    };

    return (
        <div>
            <form>
                <h2>Individual Student Management</h2>
                <label htmlFor="students">Select Student</label>
                <select id="students" name="students" onChange={handleSelectStudent}>
                    {studentList}
                </select>
            </form>
            <div>
                <form>
                    <h2>Add Assignment</h2>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleInputChange} name="title"/>
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" onChange={handleInputChange} name="description"/>
                    <label for="notes">Notes</label>
                    <input type="text" id="notes" onChange={handleInputChange} name="notes"/>
                    <button type="submit" onClick={handleSubmit}>Add New Assignment</button>
                </form>
            </div>
        </div>
    )
};

export default IndivStudents;
