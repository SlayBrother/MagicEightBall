import React, {useState} from 'react';

import "./App.css"
import defaultAnswers from "./answers.json";

function EightBall({ answers = defaultAnswers }) {
    const [answer, setAnswer] = useState({
        msg: "Think of a Question.",
        color: "black",
    });

    function choice(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex]
    }

    function handleClick(evt) {
        setAnswer(choice(answers));
    }

    return (
        <div className="Eightball" onClick={handleClick} style={{backgroundColor: answer.color}}>
            <b>{answer.msg}</b>
        </div>
    )
}

export default EightBall;