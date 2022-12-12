import React from 'react'
import { nanoid } from 'nanoid'

function AnswerChoice(props) {

    const styles = {
        backgroundColor: props.isSelected ? "#D6DBF5" : "white",
        border: props.isSelected ? 'none' : 'solid 0.794239px'
    }

  return (
    <p key={nanoid()}
        onClick={props.handleClick}
        style={styles}    
        className='p-answers'
        id={props.id}
        >{props.text}
    </p>)
  
}

export default AnswerChoice