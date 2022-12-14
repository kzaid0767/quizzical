import React, {useState,useEffect} from 'react'
import { nanoid } from 'nanoid'
import AnswerChoice from './AnswerChoice'
import Result from './Result'

function Trivia(props) {

        
    const possibleAnswers=[]
    /* addin correct answer and other answer choices */
    possibleAnswers.push({text:props.allData.correct_answer, isTheAnswer: true, isSelected:false, id:nanoid()})
    for(let el of props.allData.incorrect_answers){
        possibleAnswers.push({text:el, isTheAnswer:false, isSelected:false, id:nanoid()})
    }
    
    /* handles when user clicks to answer a quiz question */
    function handleAddAnswer(id){
        
        setTriviaChoices(prevState => prevState.map(el=>{
            if(el.id===id){
                
                return {...el, isSelected:true}
            } else return {...el, isSelected:false}
        }))

    }
    const [triviaChoices, setTriviaChoices] = useState(shuffle(possibleAnswers))

    useEffect(()=>{
        for(let obj of triviaChoices){
            if(obj.isSelected && obj.isTheAnswer){
                props.countRightAnswers()
            } 
        }
    }, [props.showAnswers])


    
    /* display questions for user to answer quiz */
    const answersTags = triviaChoices.map(answer=><AnswerChoice text={answer.text}
        handleClick = {()=>handleAddAnswer(answer.id)}
        id ={answer.id}
        key={answer.id}
        isSelected={answer.isSelected}/>)

    /* results to diplay when user checks his answers */
    const correctedTrivias = triviaChoices.map(answer => <Result 
        text={answer.text}
        key={answer.id}
        isSelected={answer.isSelected}
        isTheAnswer={answer.isTheAnswer}
        />
    )

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
    
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
    
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

          // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    /* this function decodes html entities */
    function decodeHTMLEntities(text) {
        let textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
      }


    return (
        <div className='trivia-div'>
            <h3 className='h3-question'>{decodeHTMLEntities(props.allData.question)}</h3>
            {props.showAnswers?correctedTrivias:answersTags}
            <hr />
        </div>
    )
}

export default Trivia