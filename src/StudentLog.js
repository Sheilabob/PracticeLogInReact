import Carousel from "./Components/CarouselComponent/Carousel";
import Checkboxes from "./Components/Checkboxes";

function StudentLog() {

    class Assignment {
      constructor (title, description, notes, checkboxIDname) {
        this.title = title;
        this.description = description;
        this.notes = notes;
        this.checkboxIdname = checkboxIDname;
      }
    }

    const assignment1 = new Assignment("Ear Training", "Listen to songs up through Cuckoo","", "et-log-checks" )
    const assignment2 = new Assignment("Sight Reading", "The Pony Song, p. 24","Pay attention to quarter rests.", "sr-log-checks" )

    const assignmentArray = [assignment1, assignment2]

    return (
      <div className="studentlog card">
        Student Name

        Due on Wednesday, January 10, 2023:

        <ul>
        {assignmentArray.map(assignment => 

          <li className="assignment">
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
            <p>Notes:{assignment.notes}</p>
            <Checkboxes checkboxID={assignment.checkboxIdname}/>
          </li>)}
          <li className="assignment">
            <h3>Sight Reading</h3>
            <p>The Pony Song, p. 24</p>
            <p>Notes: Pay attention to quarter rests.</p>
            <p>Put in radio box for repetition or minutes</p>
          </li>
          <li className="assignment">
            <h3>Main Practice Piece</h3>
            <p>Honeybee, RH and then LH, separately</p>
            <p>Notes: Pay attention to quarter rests.</p>
            <p>Put in radio box for repetition or minutes</p>
          </li>
          <li className="assignment">
            <h3>Review</h3>
            <p>Mississippi Hop Frog, Ice Cream Cone, Run Pony, Twinkle</p>
            <p>Notes: Pick one per hand per day, rotate through all at least once a week.</p>
            <p>Put in radio box for repetition or minutes</p>
          </li>
          <li className="assignment">
            <h3>Preview</h3>
            <p>Cuckoo</p>
            <p>Notes: Starts on G in RH with finger 5 - play as far as you can sound out</p>
            <p>Put in radio box for repetition or minutes</p>
          </li>
        </ul>
        <Carousel />
      </div>
    );
  }
  
  export default StudentLog;