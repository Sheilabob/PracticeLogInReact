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

    const handleDayCheckboxes = () => {
        console.log('clicked a day')
    }

    return (
        <div className="card assignment-card">
            <h3>{demoAssignment.category}</h3>
            <h1>{demoAssignment.title}</h1>
            <p>{demoAssignment.description}</p>
            <p>{demoAssignment.notes}</p>
            <label>Monday</label>
            <input type="checkbox" onChange={handleDayCheckboxes}/>
            <label>Tuesday</label>
            <input type="checkbox" onChange={handleDayCheckboxes} />
            <label>Wednesday</label>
            <input type="checkbox"  onChange={handleDayCheckboxes}/>
            <label>Thursday</label>
            <input type="checkbox" onChange={handleDayCheckboxes} />
            <label>Friday</label>
            <input type="checkbox" onChange={handleDayCheckboxes} />
            <label>Saturday</label>
            <input type="checkbox" onChange={handleDayCheckboxes} />
            <label>Sunday</label>
            <input type="checkbox" onChange={handleDayCheckboxes} />
        </div>
    )
};

export default AssignmentCard;