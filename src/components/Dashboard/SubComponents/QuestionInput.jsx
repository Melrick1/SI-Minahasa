import { useState } from 'react';
import { useMyContext } from '../../../MyContext.jsx';

const QuestionInput = ({ docName }) => {
    const [submittedQuestion, setQuestion] = useState ('')
    const [loadingMessage, setMessage] = useState('')
    const [activateForm, SetActivateForm] = useState(false);
    const { StoreQuestion } = useMyContext();

    const addQuestionHandler = () => {
        if (activateForm == false) {
            SetActivateForm(true)
        } else {
            SetActivateForm(false)
        }
    }

    const submitQuestionHandler = async (e) => {
        e.preventDefault();
        setMessage('Loading...');
        await StoreQuestion(docName, submittedQuestion);
        SetActivateForm(false);
    }
    
    return(
        <div className='inputCard'>
            {activateForm === false &&                    
                <button className='add-question questionCard' onClick={addQuestionHandler}>
                    <i className="bi bi-plus-square"></i>
                </button>
            }
            
            {activateForm === true && 
                <div className='questionCard question-input'>
                    <button className='close' onClick={addQuestionHandler}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                    <h3>Tambahkan Pertanyaan</h3>
    
                    <form onSubmit={submitQuestionHandler}>
                        <div className="form-content-question">
                            <input 
                                className='inputbox typed' 
                                type="text" 
                                placeholder="Input pertanyaan disini..."
                                value={submittedQuestion}
                                onChange={(e) => setQuestion(e.target.value)}>
                            </input>
                        </div>

                        <p>{loadingMessage}</p>
                        <button type="submit" className="submit button">Submit</button>
                    </form>
                    
                </div>
            }
        </div>
    )
}

export default QuestionInput