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
        let checkboxes = document.querySelectorAll('input[name="practice-day"]:checked');
        let totalScore = 0;
        checkboxes.forEach(() => {
            totalScore += 15;
        })
        console.log(totalScore)
    }

    return (
        <div className="card assignment-card">
            <h3>{demoAssignment.category}</h3>
            <h1>{demoAssignment.title}</h1>
            <p>{demoAssignment.description}</p>
            <p>{demoAssignment.notes}</p>
            <label>Monday</label>
            <input type="checkbox" name="practice-day" onChange={handleDayCheckboxes} />
            <label>Tuesday</label>
            <input type="checkbox" name="practice-day" onChange={handleDayCheckboxes} />
            <label>Wednesday</label>
            <input type="checkbox"  name="practice-day" onChange={handleDayCheckboxes} />
            <label>Thursday</label>
            <input type="checkbox" name="practice-day" onChange={handleDayCheckboxes} />
            <label>Friday</label>
            <input type="checkbox" name="practice-day" onChange={handleDayCheckboxes} />
            <label>Saturday</label>
            <input type="checkbox" name="practice-day" onChange={handleDayCheckboxes} />
            <label>Sunday</label>
            <input type="checkbox" name="practice-day" onChange={handleDayCheckboxes} />
        </div>
    )
};

export default AssignmentCard;