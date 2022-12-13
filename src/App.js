import './App.css';
import Intro from './Intro';
import {useState, useEffect } from 'react';
import Trivia from './Trivia';
import { nanoid } from 'nanoid';

function App() {

  /* set state as to begin quiz or not */
  const [startQuiz, setStartQuiz] = useState(false)

  /* setting imported data in state */
  const [trivias, setTrivia] = useState([])

  const [count, setCount] = useState(0)
  const [showAnswers, setShowAnswers]=useState(false)

  /* fetch data API */

 useEffect(
    ()=>{
      fetch('https://opentdb.com/api.php?amount=5')
        .then(res => res.json())
        .then(data => {
          setTrivia(setQuestions(data.results))
        })
    },[]
  )


  /* add unique ids to the five questions */
  function setQuestions(inputArray){
    let tempArr=[]
    for(let question of inputArray){
      tempArr.push({...question, id:nanoid()})
    }
    return tempArr
  }

  function countRightAnswers(){
    setCount(prevState => prevState+1)
  }
  
  function countRightAnswersDown(){
    setCount(prevState => prevState-1)
  }
  

  function showQuiz(){
    setStartQuiz(true)
  }

  /* 5 questions or answers generated here */
  const allTrivias = trivias.map(trivia =>
    <Trivia allData={trivia}
      key={trivia.id}
      showAnswers={showAnswers}
      questionNumber={trivias.indexOf(trivia)+1}
      count={count}
      countRightAnswers={()=>countRightAnswers()}
      countRightAnswersDown={()=>countRightAnswersDown()}
      />
  )

  /* changes state to display results */
  function showQuizResults(){
    setShowAnswers(true)
  }

  /* generates new set of 5 random questions */
  function playAgain(){
    setShowAnswers(false)
      fetch('https://opentdb.com/api.php?amount=5')
        .then(res => res.json())
        .then(data => {
          setTrivia(setQuestions(data.results))
        })
    setCount(prevState => prevState = 0)
  }
  
  
  return (
    <div className="App">
      {!startQuiz && <Intro beginQuiz={()=>showQuiz()} />}
      {startQuiz && allTrivias}
      {showAnswers && <div className='score-display'> <h3>You scored {count}/{trivias.length} correct answers </h3>
      <button onClick={playAgain} className='button-check'>Play again</button>
      </div>}
      {!showAnswers && startQuiz && <button onClick={showQuizResults} className='button-check'>Check answers</button> }
    </div>
  );
}

export default App;
