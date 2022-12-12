import React from 'react'

function Result(props) {

    const styles ={
        backgroundColor: props.isTheAnswer? '#94D7A2' : props.isSelected && !props.isTheAnswer? '#F8BCBC' : '',
        color: props.isTheAnswer? '#293264' :'',
        border: props.isTheAnswer? 'none' : props.isSelected && !props.isTheAnswer? 'none' : '',
        opacity: props.isTheAnswer? 1:'',
        
    }

    return (
        <p
        className='p-result'
        style={styles} 
        >{props.text}
        </p>
    )
}
export default Result