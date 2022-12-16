import { useState } from "react";

const IndivStudents = () => {
    const [values, setValues] = useState(
        { title: "", description: "", notes: "" }
    );

    const [arrayOfAssignments, setArray] = useState([])
  
    const handleInputChange = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    };
  
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
                <select id="students" name="students">
                    <option value="Grace">Grace</option>
                    <option value="Alice">Alice</option>
                    <option value="Ella">Ella</option>
                    <option value="Liam">Liam</option>
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
