import {decode} from 'html-entities'

export default function Question(props){

    return(
        <fieldset  className="question">
            <div><legend>{decode(props.question)}</legend></div>
            <div className="questionRadios">
                <div className="eachOption">
                    <input onClick={(e)=>props.handleSelection(e)} type="radio" id={props.answers[0]} name={props.name} />
                    <label htmlFor={props.answers[0]}>{decode(props.answers[0])}</label>
                </div>
                <div className="eachOption">
                    <input type="radio" id={props.answers[1]} name={props.name} />
                    <label htmlFor={props.answers[1]}>{decode(props.answers[1])}</label>
                </div>
                <div className="eachOption">
                    <input type="radio" id={props.answers[2]} name={props.name}/>
                    <label htmlFor={props.answers[2]}>{decode(props.answers[2])}</label>
                </div>
                <div className="eachOption">
                    <input type="radio" id={props.answers[3]} name={props.name} />
                    <label htmlFor={props.answers[3]}>{decode(props.answers[3])}</label>
                </div>
            </div>
        </fieldset>
    )
}