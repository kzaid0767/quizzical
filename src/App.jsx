import { useState, useEffect } from "react";
// import res from "./data";
import Intro from "./Intro";
import Confetti from "react-confetti";
import Question from "./Question";
import "./App.css";


function App() {
  const [quizStarted,setQuizStarted] = useState(false)
  
  const [allItems, setAllItems] = useState([])

  useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(res=> res.json())
      .then(data=> {
          console.log(data)
          let arr =[]
          for(let item of data.results){
            // arr.push(item.correct_answer)
            arr.push({...item, answers:shuffler([...item.incorrect_answers, item.correct_answer])})
          }
          setAllItems(arr)
      })
  },[quizStarted])

  
  const [showResults,setShowResults] = useState(false)
  //number of correct answers
  const [count, setCount] =useState(0)

  function handleCount(){
        setCount(prevState => prevState +1)
  }


  function reset(){
    setCount(0)
    setQuizStarted(false)
    setShowResults(false)

  }

  function handleStart(){
    setQuizStarted(!quizStarted)
  }

  function handleShowResults(){
      setShowResults(prevState=> !prevState)
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

  const radios = allItems.map((item,idx) => {
    return showResults? <Question key={idx+1} 
                          answers={item.answers} 
                          correctAnswer={item.correct_answer} 
                          question={item.question}
                          showResults={showResults}
                          count={handleCount} 
                          name={item.question}/>:
                        <Question key={idx+1} 
                          answers={item.answers} 
                          showResults={showResults}
                          count={handleCount} 
                          correctAnswer={item.correct_answer} 
                          question={item.question} 
                          name={item.question}/>
  });

  return (
    <div className="mainDiv">
      {count===5 && <Confetti style={{width:'100%'}} />}
      {!quizStarted && <Intro start={handleStart}/> }
      {quizStarted && radios}
      {quizStarted && !showResults && <button onClick={handleShowResults} className="checkAnswers Btn">Check answers</button>}
      {showResults && <div className="playerResults"><p>{`You scored ${count}/5 corrent answers`}</p><button onClick={reset} className="Btn">Play again</button></div>}
    </div>
  );
}

export default App;
