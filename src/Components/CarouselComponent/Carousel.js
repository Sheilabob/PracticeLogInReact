import { useEffect, useState } from "react";

function Carousel() {
  let div1 = <div className="Assignment"><h3>Ear Training</h3>
  <p>Listen to songs up through Cuckoo</p>
  <p>Notes:</p>
  <p>Put in radio box for repetition or minutes</p></div>
  let div2 = <div className="Assignment"><h3>Sight Reading</h3>
  <p>The Pony Song, p. 24</p>
  <p>Notes: Pay attention to quarter rests.</p>
  <p>Put in radio box for repetition or minutes</p></div>
  let div3 = <div className="Assignment"><h3>Main Practice Piece</h3>
  <p>Honeybee, RH and then LH, separately</p>
  <p>Notes: Pay attention to quarter rests.</p>
  <p>Put in radio box for repetition or minutes</p></div>
  let div4 = <div className="Assignment"><h3>Review</h3>
  <p>Mississippi Hop Frog, Ice Cream Cone, Run Pony, Twinkle</p>
  <p>Notes: Pick one per hand per day, rotate through all at least once a week.</p>
  <p>Put in radio box for repetition or minutes</p></div>
  let div5 = <div className="Assignment"><h3>Preview</h3>
  <p>Cuckoo</p>
  <p>Notes: Starts on G in RH with finger 5 - play as far as you can sound out</p>
  <p>Put in radio box for repetition or minutes</p></div>


  const data = [div1, div2, div3, div4, div5]
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
          <div className="carousel-container">
          { data.map((item, index)=> {
            return <h1 className="carousel-item" style={{transform: `translate(-${currentIndex * 100}%)`}}
            key={index}>{item}</h1>
          })}
        </div>)
};

export default Carousel;