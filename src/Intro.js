import React from 'react'

function Intro(props) {
    return (
        <div className='intro-div'>
            <h1 className='h1-intro'>Quizzical</h1>
            <p className='p-intro'>A quiz app that does so and so..</p>
            <button onClick={props.beginQuiz} className='button-intro'>Start Quiz</button>
        </div>
    )
}

export default Intro