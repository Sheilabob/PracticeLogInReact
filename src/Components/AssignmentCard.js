import Checkboxes from "./Checkboxes";

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
        <div className="card assignment-card">
            <h3>{demoAssignment.category}</h3>
            <h1>{demoAssignment.title}</h1>
            <p>{demoAssignment.description}</p>
            <p>{demoAssignment.notes}</p>
            <Checkboxes checkboxID={'assignment-card-checks'}/>
        </div>
    )
};

export default AssignmentCard;