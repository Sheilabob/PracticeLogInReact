import { useState } from "react";

const IndivStudents = ({students}) => {
    const [selected, setSelected] = useState(students[0])
    const [values, setValues] = useState(
        { title: "", description: "", notes: "" }
    );

    const [arrayOfAssignments, setArray] = useState([])
  
    const studentList = students.map(
        student => <option value={student.name}>{student.name}</option>
    )
    const assignmentTitle = selected.arrayOfAssignments[0] ? selected.arrayOfAssignments[0].title : "No Assignments";

    const assignmentTitle2 = selected.arrayOfAssignments[1] ? selected.arrayOfAssignments[0].title : "No Assignments";

    const assignmentTitle3 = selected.arrayOfAssignments[2] ? selected.arrayOfAssignments[0].title : "No Assignments";


    const studentAssignments = selected.arrayOfAssignments[0] ? selected.arrayOfAssignments[0] : [];

    const handleInputChange = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    };
  
    const handleSelectStudent = (event) => {
        let selectedStudent = event.target.value
        let index = students.findIndex(student => student.name === selectedStudent)
        setSelected(students[index])
        console.log(selected.arrayOfAssignments[0].title)
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      let newAssignment = {title: values.title, description: values.description, notes: values.notes}
      console.log("title", values.title, "description", values.description, "notes", values.notes);
      studentAssignments.push(newAssignment)
      setArray([...studentAssignments])
      console.log({studentAssignments})
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
            <div>{selected.name} {assignmentTitle} {assignmentTitle2} {assignmentTitle3}</div>
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
