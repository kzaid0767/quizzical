import { useState, useEffect } from "react";
import res from "./data";
import Intro from "./Intro";
import Question from "./Question";
import "./App.css";


function App() {
  const [quizStarted,setQuizStarted] = useState(false)

  // useEffect(()=>{
  //   fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
  //     .then(res=> res.json())
  //     .the(data=> console.log(data))
  // },[])

  function handleStart(){
    setQuizStarted(!quizStarted)
  }

  function handleSelection(e){
      console.log(e.target.value)
  }

  function shuffler(arr) {
    let currIdx = arr.length;
    while (currIdx != 0) {
      let rndIdx = Math.floor(Math.random() * currIdx);
      currIdx--;
      [arr[currIdx], arr[rndIdx]] = [arr[rndIdx], arr[currIdx]];
    }
    return arr;
  }

  const radios = res.results.map((item,idx) => {
    const answers = shuffler([...item.incorrect_answers, item.correct_answer]);
    return <Question key={idx+1} answers={answers} handleSelection={handleSelection} question={item.question} name={item.question}/>
  });

  return (
    <>
      {!quizStarted && <Intro start={handleStart}/> }
      {quizStarted && radios}
      {quizStarted && <button className="checkAnswersBtn">Check answers</button>}
    </>
  );
}

export default App;
