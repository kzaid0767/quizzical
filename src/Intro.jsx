export default function Intro(props){
    return(
        <main className="introPage">
            <h1>Quizzical</h1>
            <p>A quiz that tests you on various topics</p>
            <button onClick={props.start} className="introBtn">Start Quiz</button>
        </main>
    )
}