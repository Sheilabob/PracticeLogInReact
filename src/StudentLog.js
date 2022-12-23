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
    const assignment3 = new Assignment("Main Practice Piece", "Honeybee, RH and then LH, separately","Pay attention to quarter rests.", "mpp-log-checks" )
    const assignment4 = new Assignment("Review", "Mississippi Hop Frog, Ice Cream Cone, Run Pony, Twinkle","Pick one per hand per day, rotate through all at least once a week.", "rev-log-checks" )
    const assignment5 = new Assignment("Preview", "Cuckoo","Starts on G in RH with finger 5 - play as far as you can sound out.", "prev-log-checks" )

    const assignmentArray = [assignment1, assignment2, assignment3, assignment4, assignment5]

    return (
      <div className="studentlog card">
        Student Name

        Due on Wednesday, January 10, 2023:

        <Carousel data={assignmentArray}/>
      </div>
    );
  }
  
  export default StudentLog;