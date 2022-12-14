import React from 'react'
import { nanoid } from 'nanoid'

function AnswerChoice(props) {

    const styles = {
        backgroundColor: props.isSelected ? "#D6DBF5" : "white",
        border: props.isSelected ? 'none' : 'solid 0.794239px'
    }

    function decodeHTMLEntities(text) {
        let textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
      }

  return (
    <p key={nanoid()}
        onClick={props.handleClick}
        style={styles}    
        className='p-answers'
        id={props.id}
        >{decodeHTMLEntities(props.text)}
    </p>)
  
}

export default AnswerChoice