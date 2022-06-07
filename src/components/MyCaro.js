import React from 'react'
import '../App.css';
import { useState, useRef } from 'react';
import { Carousel, Button } from 'react-bootstrap'

/*quotes array*/
var aocQuotes = [
  "Capitalism has not always existed in the world and will not always exist in the world.",
  "Our democracy is designed to speak truth to power.",
  "I'm not running from the left; I'm running from the bottom. I'm running in fierce advocacy for working-class New Yorkers.",
  "I wake up every day, and I’m a Puerto Rican girl from the Bronx. Every single day.",
  "I believe that every American should have stable, dignified housing; health care; education — that the most very basic needs to sustain modern life should be guaranteed in a moral society.",
  "Billionaires need the working class. The working class does not need billionaires.",

  "I was born to a dad who was born in the South Bronx while the Bronx was burning, while landlords were committing arson to their own buildings.",
  "Congresswomen dance too!",
  "You shouldn’t need a Bible to tell you to protect our planet, but it does anyway.",
  "The Republicans galvanize their base by inciting a lot of fear; they operate on a lot of mythmaking. So we have to have something compelling. We shouldn't be afraid to be bold."
];
export default function MyCaro() {
  const [index, setIndex] = useState(0);
 const ref = useRef(null)
  const handleSelect = (selectedIndex, e) => {
    //console.log(selectedIndex);
    //console.log(e);
    setIndex(selectedIndex);
  };
  const handleIndex = () => {
    //console.log("hey");
     //console.log(index);
    ref.current.next()
  };
  return (
<div>
 
        <div className="caro">
<Carousel id="carodemo" ref={ref} activeIndex={index} onSelect={handleSelect} indicators={false} controls={false}>
  <Carousel.Item>
    <svg
          className="bd-placeholder-img"
          width="100%"
          height="150px"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="150px" fill="#c0a6d3" opacity="0" />
        </svg>
    <Carousel.Caption>
     <p id= "text" className="quote">
            {"“" + aocQuotes[0] + "”"}
          </p>
          <p id= "auth" className="quote">
            <br />- Alexandria Ocasio-Cortez
          </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <svg
          className="bd-placeholder-img"
          width="100%"
          height="150px"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="150px" fill="#c0a6d3" opacity="0" />
        </svg>

    <Carousel.Caption>
      <p id= "text" className="quote">
            {"“" + aocQuotes[1] + "”"}
          </p>
          <p id= "auth" className="quote">
            <br />- Alexandria Ocasio-Cortez
          </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <svg
          className="bd-placeholder-img"
          width="100%"
          height="150px"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="150px" fill="#c0a6d3" opacity="0" />
        </svg>

    <Carousel.Caption>
      <p id= "text" className="quote">
            {"“" + aocQuotes[2] + "”"}
          </p>
          <p id= "auth" className="quote">
            <br />- Alexandria Ocasio-Cortez
          </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<div id="new-tweet-box">
          <h2 id="new-tweet">
            <span id="new-quote" onClick={handleIndex}>
              NEW QUOTE
         </span>
            
          </h2>
         
        </div>
</div>
  )
}