import Carousel from "./Components/CarouselComponent/Carousel";
import Checkboxes from "./Components/Checkboxes";

function StudentLog() {

    return (
      <div className="studentlog card">
        Student Name

        Due on Wednesday, January 10, 2023:

        <ul>
          <li className="assignment">
            <h3>Ear Training</h3>
            <p>Listen to songs up through Cuckoo</p>
            <p>Notes:</p>
            <Checkboxes checkboxID={'student-log-checks'}/>
          </li>
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