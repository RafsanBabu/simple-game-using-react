import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './Component/Quiz/Quiz';
import Result from './Component/Result/Result';

function App() {

  const values=[];
  const number1 =getRandomInt(100);
  const number2=getRandomInt(100);
  const resultvalue = number1+number2;
  values.push(resultvalue);
  const fakeResult1 = getRandomInt(resultvalue-1);
    values.push(fakeResult1);
  
  const fakeResult2 = getRandomInt(resultvalue+1);
  values.push(fakeResult2);
  values.push(resultvalue-1);
  shuffle(values);
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const [correct, setCorrect]=useState([]);
  const handleAddProduct= (value)=>{
        
  //console.log(value);
      if(value===resultvalue){
        const newCorrect = [...correct,1];
        setCorrect(newCorrect);
      }
      if(value!==resultvalue){
        const newCorr=[...correct];
        setCorrect(newCorr);
      }

 }

  
  return (
    <div className="app">

   <h2>What is the sum of {number1} and {number2}</h2> 
    <div className="app-container">
    {

    values.map(value=> <Quiz
      
      value={value}
      handleAddProduct = {handleAddProduct}>
      </Quiz>)
    }
    </div>
    <div className="result">
     <Result correct={correct}></Result>
    </div>
    <div className="app-button">
  
    </div>
    </div>
  );
}

export default App;
