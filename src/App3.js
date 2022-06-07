import React from 'react';
//import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';
import './App.css';
//import bootstrap from 'bootstrap'
//import Button from 'react-bootstrap/Button';
//import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCaro from './components/MyCaro';
//const $ = window.$;
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

const QuoteBox = () => {
  return (
    <div id="quote-box-outer">
      <div id="quote-box-inner">
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
        <MyCaro />
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
function App3() {
  return (
    <div id = "container">
     <css-doodle use="var(--rule1)"id = "doodle"></css-doodle>
    
    <QuoteBox />
     <Profile />
     </div>
  );
}

export default App3;