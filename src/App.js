import React from 'react';
//import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import bootstrap from 'bootstrap'
//import Carousel from 'react-bootstrap/Carousel';
//import bootstrap from 'bootstrap.dist.js';
//import Bootstrap from 'bootstrap/bundle.js'
const $ = window.$;
//import 'css-doodle';
//import '../Public/css-doodle';
console.clear()
var r = document.querySelector(":root");
/*Colors array*/
var c1 = [
  "#cecae8",
  "#483d8b",
  "#9991cf",
  "#f7eaba",
  "#ebac47",
  "#e4be81",
  "#a7b9f1",
  "#193ca3",
  "#6585e7",
  "gold",
  "navy",
  "#979472"
];
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
/*Color index*/
var colorCount = 3;
var caroCount = 0;
var startNum = Math.floor(Math.random() * 10);
var myRand = startNum;
var prevRand = startNum;
var from = 0;
var currentQuote = aocQuotes[startNum];
var currentAuthor = "-Alexandria-Ocasio-Cortez";



class Box1 extends React.Component {
  constructor(props) {
    super(props);
    this.quoteClick = this.quoteClick.bind(this);
  }
  quoteClick() {
  
    console.log("hello");
    //$("#carodemo").carousel("prev");
  
  }
  render() {
   
    return (
<div>
      <div id="quotes-by-box">
          <h2 id="quotes-by">
            <span id="q1">QUOTES BY </span>
            <a id="q2">CITA POR</a>
          </h2>
        </div>
        <div id="alex-box">
          <h2 id="alex">ALEXANDRIA</h2>
        </div>
        <div id="ocasio-box">
          <h2 id="ocasio">
            <span id="exclaim">&#x00a1;</span>
            <span id="square1">&#x25a0;</span>
            <span id="star1">&#x2605;</span>OCASIO!
            <span id="square2">&#x25a0;</span>
            <span id="star2">&#x2605;</span>
          </h2>
        </div>
      <div id="cortez-box">
          <h2 id="cortez">CORTEZ</h2>
        </div>
      <div className="caro">
        <div id="carodemo" className="carousel slide" data-bs-ride="carousel">
        
  <div className="carousel-inner">
    <div className="carousel-item active">
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
        <div className="carousel-caption">
          <p id= "text" className="quote">
            {"“" + aocQuotes[0] + "”"}
          </p>
          <p id= "auth" className="quote">
            <br />- Alexandria Ocasio-Cortez
          </p>
        </div>
    </div>
    <div className="carousel-item">
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
        <div className="carousel-caption">
          <p id="text" className="quote">
            {"“" + aocQuotes[1] + "”"}
          </p>
          <p id= "auth" className="quote">
            <br />- Alexandria Ocasio-Cortez
          </p>
        </div>
        </div>
    <div className="carousel-item">
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
        <div className="carousel-caption">
          <p id= "text" className="quote">
            {"“" + aocQuotes[0] + "”"}
          </p>
          <p id= "auth" className="quote">
            <br />- Alexandria Ocasio-Cortez
          </p>
        </div>
          </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carodemo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carodemo" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
       <div id="new-tweet-box">
          <h2 id="new-tweet">
            <span id="new-quote" onClick={this.quoteClick}>
              NEW QUOTE
         </span>
            
          </h2>
         
        </div>
      </div>
    );
  }
}
const QuoteBox = () => {
  return (
    <div id="quote-box-outer">
      <div id="quote-box-inner">
        <Box1 />
      </div>
    </div>
  );
};



     
const Profile = () => {
  return (
    <div id="profile-text">
       <h1 id = "aboutAOC">ABOUT 'AOC'</h1>
      <div id="pic-box">
  <img
      id="aoc-image"
      src="https://tse1.mm.bing.net/th?id=OIP.m0HYREM8FGVnsQo9dlcDCAHaE8&pid=Api&P=0&w=276&h=185"
      alt="Alexandria Ocasio-Cortez portrait"
    />
</div>
      <div id="line"></div>
      <h3>
        Alexandria Ocasio-Cortez or 'AOC' for short, is a Democrat politician who shocked everyone in 2018 when aged 29, she won the election for New York's 14th district and become the youngest woman ever to serve in the U.S congress. 
        One part of her groundbreaking campaign was the unique design of her adverts, which have been highly acclaimed and copied by others. This quote generator is based on them. You can find the original election posters at AOC's official store here. 
        <a target="_blank" href="https://shop.ocasiocortez.com/?"> Link to store</a>
      </h3>
      
    </div>
  );
};

function App() {
  return (
    <div id = "container">
     <css-doodle use="var(--rule1)"id = "doodle"></css-doodle>
     
    <QuoteBox />
     <Profile />
     </div>
  );
}

export default App;