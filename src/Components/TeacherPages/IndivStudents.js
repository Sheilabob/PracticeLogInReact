import { useState } from "react";

const IndivStudents = ({students}) => {
    const d = new Date();
    const mm = d.getMonth() + 1;
    const dd = d.getDate();
    const yyyy = d.getFullYear();
    const currentDate = mm + '/' + dd + '/' + yyyy
    const [selected, setSelected] = useState(students[0])
    const [values, setValues] = useState(
        { title: "", description: "", notes: "" }
    );

    const [arrayOfAssignments, setArray] = useState([])
  
    const studentList = students.map(
        student => <option value={student.firstName}>{student.firstName}</option>
    )

    const studentAssignments = selected.arrayOfAssignments[0] ? selected.arrayOfAssignments[0] : [];

    const handleInputChange = (event) => {
      setValues({
        ...values,
        [event.target.firstName]: event.target.value
      });
    };
  
    const handleSelectStudent = (event) => {
        let selectedStudent = event.target.value
        let index = students.findIndex(student => student.firstName === selectedStudent)
        setSelected(students[index])
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      let newAssignment = {title: values.title, description: values.description, notes: values.notes, date:currentDate}
      selected.arrayOfAssignments.push(newAssignment)
      setArray([...selected.arrayOfAssignments])
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
            <div>{selected.firstName}</div>
            {selected.arrayOfAssignments.map(assignment => <div>{assignment.title}, {assignment.date}</div>)}
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
