import { useState } from 'react';

const Question = ({n, question, input1, input2, input3, input4, input5, onAnswerChange}) =>{
    const [checkedAnswer, setCheckedAnswer] = useState('')

    const handleAnswerChange = (event) => {
        const selectedOption = event.target.value;
        onAnswerChange(selectedOption);
        setCheckedAnswer(selectedOption);
    };

    return(
        <div className="questionCard">
            <h3>{n}. {question}</h3>
            <div className="question-inputs">
                <div className='input-checks'>
                    <input type="radio" name={`question-${n}`} value={input1} onChange={handleAnswerChange}/>
                    <span>{input1}</span>
                </div>
                <div className='input-checks'>
                    <input type="radio" name={`question-${n}`} value={input2} onChange={handleAnswerChange}/>
                    <span>{input2}</span>
                </div>
                <div className='input-checks'>
                    <input type="radio" name={`question-${n}`} value={input3} onChange={handleAnswerChange}/>
                    <span>{input3}</span>
                </div>
                <div className='input-checks'>
                    <input type="radio" name={`question-${n}`} value={input4} onChange={handleAnswerChange}/>
                    <span>{input4}</span>
                </div>
                <div className='input-checks'>
                    <input type="radio" name={`question-${n}`} value={input5} onChange={handleAnswerChange} checked={checkedAnswer === input5}  />
                    <span>{input5}</span>
                </div>
            </div>
        </div>
    )
}

export default Question;