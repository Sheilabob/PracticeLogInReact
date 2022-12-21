import Checkboxes from "./Checkboxes";

function AssignmentCard() {

    class Assignment {
        constructor (id, category, title, description, notes) {
            this.id = id;
            this.category = category;
            this.title = title;
            this.description = description;
            this.notes = notes;
        }
    }

    const demoAssignment = new Assignment("ac1", "Dummy Category", "Assignment Title", "Description", "Notes")


    return (
        <div className="card assignment-card">
            <h3>{demoAssignment.category}</h3>
            <h1>{demoAssignment.title}</h1>
            <p>{demoAssignment.description}</p>
            <p>{demoAssignment.notes}</p>
            <Checkboxes checkboxID={`${demoAssignment.id}-assignment-card-checks`}/>
        </div>
    )
};

export default AssignmentCard;