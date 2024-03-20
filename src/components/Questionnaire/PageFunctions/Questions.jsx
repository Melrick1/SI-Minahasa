import { useState } from 'react';

const Question = ({question}) =>{
    return(
        <div className="questionCard">
            <h3>{question}</h3>
            <div className="question-inputs">
                <div className='input-checks'>
                    <input type="radio"/>
                    <span>Sangat Setuju</span>
                </div>
                <div className='input-checks'>
                    <input type="radio"/>
                    <span>Cukup Setuju</span>
                </div>
                <div className='input-checks'>
                    <input type="radio"/>
                    <span>Netral</span>
                </div>
                <div className='input-checks'>
                    <input type="radio"/>
                    <span>Kurang Setuju</span>
                </div>
                <div className='input-checks'>
                    <input type="radio"/>
                    <span>Tidak Setuju</span>
                </div>
            </div>
        </div>
    )
}

export default Question;