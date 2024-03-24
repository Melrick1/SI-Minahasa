import { useState } from 'react';

const Question = ({question, n, onAnswerChange}) =>{
    const [checkedAnswer, setCheckedAnswer] = useState('')

    const detectAnswerChange = async (event) => {
        const selectedOption = event.target.value;
        await setCheckedAnswer(selectedOption);
        onAnswerChange(`question${n}`, selectedOption);
    };

    return(
        <div className="questionCard">
            <h3>{n}. {question}</h3>
            <div className="question-inputs">
                <div className='input-checks'>
                    <input type="radio" value='Sangat Setuju' onChange={detectAnswerChange} checked={checkedAnswer === 'Sangat Setuju'}/>
                    <span>Sangat Setuju</span>
                </div>
                <div className='input-checks'>
                    <input type="radio" value='Cukup Setuju' onChange={detectAnswerChange} checked={checkedAnswer === 'Cukup Setuju'}/>
                    <span>Cukup Setuju</span>
                </div>
                <div className='input-checks'>
                    <input type="radio" value='Netral' onChange={detectAnswerChange} checked={checkedAnswer === 'Netral'}/>
                    <span>Netral</span>
                </div>
                <div className='input-checks'>
                    <input type="radio" value='Kurang Setuju' onChange={detectAnswerChange} checked={checkedAnswer === 'Kurang Setuju'}/>
                    <span>Kurang Setuju</span>
                </div>
                <div className='input-checks'>
                    <input type="radio" value='Tidak Setuju' onChange={detectAnswerChange} checked={checkedAnswer === 'Tidak Setuju'}/>
                    <span>Tidak Setuju</span>
                </div>
            </div>
        </div>
    )
}

export default Question;