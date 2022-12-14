import { useEffect, useState } from "react";
import AssignmentCard from "../AssignmentCard";

function Carousel() {
  let div1 = {
    title: "Ear Training",
    description: "Listen to songs up through Cuckoo",
    notes: "Notes: ",
    other: "Put in radio button"
  }
  let div2 = {
    title: "Sight Reading",
    description: "The Pony Song, p. 24",
    notes: "Notes: Pay attention to quarter rests.",
    other: "Put in radio button"
  }
  let div3 = {
    title: "Main Practice Piece",
    description: "Honeybee, RH and then LH, separately",
    notes: "Notes: Pay attention to quarter rests.",
    other: "Put in radio box for repetition or minutes"
  }
  let div4 = {
    title: "Review",
    description: "Mississippi Hop Frog, Ice Cream Cone, Run Pony, Twinkle",
    notes: "Notes: Pick one per hand per day, rotate through all at least once a week.",
    other: "Put in radio box for repetition or minutes"
  }
  let div5 = {
    title: "Preview",
    description: "Cuckoo",
    notes: "Notes: Starts on G in RH with finger 5 - play as far as you can sound out",
    other: "Put in radio box for repetition or minutes"
  }
  let div6 = <AssignmentCard />


  const data = [div1, div2, div3, div4, div5, div6]
  // const [currentIndex, setCurrentIndex] = useState(0)
  // const carouselInfiniteScroll = () => {
  //   if (currentIndex === data.length-1) {
  //     return setCurrentIndex(0)
  //   }
  //   return setCurrentIndex(currentIndex+1)
  // }

  // useEffect(()=> {
  //   const interval = setInterval(()=> {carouselInfiniteScroll()}, 3000)
  //   return()=> clearInterval(interval)
  // })
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);}

    return (
      <div className="styled-slider">
          
            <div
        className="arrow left-arrow"
        onClick={prevSlide}
      >&larr;</div>
      
          { data.map((item, index)=> {
            return <div className="slide-image" 
            key={index}>
              <div className="Assignment">
                <h3>{index === current && (item.title)}</h3>
                <p>{index === current && (item.description)}</p>
                <p>{index === current && (item.notes)}</p>
                <p>{index === current && (item.other)}</p>
              </div>
            </div>
          })}

<div
        className="arrow right-arrow"
        onClick={nextSlide}
      >&rarr;</div>
        </div>)
};

export default Carousel;