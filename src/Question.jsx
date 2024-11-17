import {decode} from 'html-entities'
import { useEffect, useState } from 'react'

export default function Question(props){

    //correct answer for this question
    const [answer, setAnswer] = useState(props.correctAnswer)

    //user answer
    const [userAnswer, setUserAnswer] = useState('')

    function handleSetAnswer(e){
        const {name, value} =  e.target
        setUserAnswer(value)
    }

    //use to count correct answers
    useEffect(()=>{
        if(userAnswer===props.correctAnswer){
            props.count()
        }
    },[userAnswer])


    //all styles are inline
    return(
        <fieldset  className="question">
            <div><legend>{decode(props.question)}</legend></div>
            <div className="questionRadios">
                <div className="eachOption">
                    <input onChange={(e)=>handleSetAnswer(e)} 
                        type="radio" 
                        id={props.answers[0]}
                        disabled={props.showResults}
                        value={decode(props.answers[0])}
                        name={props.name} />
                    <label style={{backgroundColor: props.showResults && props.answers[0] === answer? '#94D7A2' : 
                                    props.showResults && userAnswer === props.answers[0]? '#F8BCBC': '',
                                    border: props.showResults && props.answers[0] === answer? 'none': ''}
                                } 
                                htmlFor={props.answers[0]}>{decode(props.answers[0])}</label>
                </div>
                <div className="eachOption">
                    <input type="radio" 
                        disabled={props.showResults}
                        onChange={(e)=>handleSetAnswer(e)} 
                        id={props.answers[1]}
                        value={decode(props.answers[1])} 
                        name={props.name} />
                    <label style={{backgroundColor: props.showResults && props.answers[1] === answer? '#94D7A2' : 
                            props.showResults && userAnswer === props.answers[1]? '#F8BCBC': '',
                            border: props.showResults && props.answers[1] === answer? 'none': ''}} 
                        htmlFor={props.answers[1]}>{decode(props.answers[1])}</label>
                </div>
                <div className="eachOption">
                    <input type="radio" 
                        onChange={(e)=>handleSetAnswer(e)} 
                        disabled={props.showResults}
                        id={props.answers[2]} 
                        name={props.name}
                        value={decode(props.answers[2])}
                        />
                    <label style={{backgroundColor: props.showResults && props.answers[2] === answer? '#94D7A2' : 
                                    props.showResults && userAnswer === props.answers[2]? '#F8BCBC': '', 
                                    border: props.showResults && props.answers[2] === answer? 'none': ''}} 
                        htmlFor={props.answers[2]}>{decode(props.answers[2])}</label>
                </div>
                <div className="eachOption">
                    <input type="radio" 
                        onChange={(e)=>handleSetAnswer(e)} 
                        disabled={props.showResults}
                            id={props.answers[3]} 
                            name={props.name}
                            value={decode(props.answers[3])} 
                            />
                    <label style={{backgroundColor: props.showResults && props.answers[3] === answer? '#94D7A2' : 
                                    props.showResults && userAnswer === props.answers[3]? '#F8BCBC': '', 
                                    border: props.showResults && props.answers[3] === answer? 'none': ''}} 
                        htmlFor={props.answers[3]}>{decode(props.answers[3])}</label> 
                        
                </div>
            </div>
        </fieldset>
    )
}