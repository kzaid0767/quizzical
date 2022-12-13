import './App.css';
import Intro from './Intro';
import {useState } from 'react';
import data from './data';
import Trivia from './Trivia';
import { nanoid } from 'nanoid';

function App() {

  /* set state as to begin quiz or not */
  const [startQuiz, setStartQuiz] = useState(false)

  /* setting imported data in state */
  const [trivias, setTrivia] = useState(setQuestions(data.results))

  const [count, setCount] = useState(0)
  const [showAnswers, setShowAnswers]=useState(false)

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
  
  

  function showQuiz(){
    setStartQuiz(true)
  }


  const allTrivias = trivias.map(trivia =>
    <Trivia allData={trivia}
      key={trivia.id}
      showAnswers={showAnswers}
      questionNumber={trivias.indexOf(trivia)+1}
      count={count}
      countRightAnswers={()=>countRightAnswers(count)}
      />
  )

  function showQuizResults(){
    setShowAnswers(true)
  }

  function playAgain(){
    setShowAnswers(false)
    setTrivia(setQuestions(data.results))
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
