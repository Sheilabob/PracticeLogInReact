function AssignmentCard() {

    class Assignment {
        constructor (category, title, description, notes) {
            this.category = category;
            this.title = title;
            this.description = description;
            this.notes = notes;
        }
    }
    const demoAssignment = new Assignment("Dummy Category", "Assignment Title", "Description", "Notes")
    return (
        <div className="card">
            <h3>{demoAssignment.category}</h3>
            <h1>{demoAssignment.title}</h1>
            <p>{demoAssignment.description}</p>
            <p>{demoAssignment.notes}</p>
            <label>Monday</label>
            <input type="checkbox"  />
            <label>Tuesday</label>
            <input type="checkbox"  />
            <label>Wednesday</label>
            <input type="checkbox"  />
            <label>Thursday</label>
            <input type="checkbox"  />
            <label>Friday</label>
            <input type="checkbox"  />
            <label>Saturday</label>
            <input type="checkbox"  />
            <label>Sunday</label>
            <input type="checkbox"  />

        </div>
    )
};

export default AssignmentCard;