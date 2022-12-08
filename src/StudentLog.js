import { useEffect, useState } from "react";

function StudentLog() {
  const data = ["1", "2", "3", "4", "5"]
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length-1) {
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex+1)
  }

  useEffect(()=> {
    const interval = setInterval(()=> {carouselInfiniteScroll()}, 3000)
    return()=> clearInterval(interval)
  })
    return (
      <div className="studentlog card">
        Student Name

        Due on Wednesday, January 10, 2023:

        <ul>
          <li className="assignment">
            <h3>Ear Training</h3>
            <p>Listen to songs up through Cuckoo</p>
            <p>Notes:</p>
            <p>Put in radio box for repetition or minutes</p>
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
        <div className="carousel-container">
          { data.map((item, index)=> {
            return <h1 className="carousel-item" style={{transform: `translate(-${currentIndex * 100}%)`}}
            key={index}>{item}</h1>
          })}
        </div>
      </div>
    );
  }
  
  export default StudentLog;