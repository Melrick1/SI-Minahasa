import { useState } from 'react';
import { DB } from '../../../Firebase.js';
import { doc, collection, getDoc, updateDoc } from 'firebase/firestore';

const QuestionInput = ({ docName }) => {
    const [QuestionIn, setQuestion] = useState ('')
    const [activateForm, SetActivateForm] = useState(false);

    const addQuestionHandler = () => {
        if (activateForm == false) {
            SetActivateForm(true)
        } else {
            SetActivateForm(false)
        }
    }

    const StoreQuestion = async (e) => {
        e.preventDefault();
        const docRef = doc(collection(DB, 'questions'), docName);

        try {
            // Fetch document snapshot
            const docSnapshot = await getDoc(docRef);

            let n = 1; //default

            if (docSnapshot.exists()) {
                // If document exists, count number of fields
                const data = docSnapshot.data();
                n = Object.keys(data).length + 1;
            }

            // Update questions data
            await updateDoc(docRef, {
                [`pertanyaan${n}`]: QuestionIn
            });

            console.log(`Question ${n} stored successfully`);
            SetActivateForm(false)

        } catch (error) {
            console.error('Error storing question data:', error);
        }
    }
    
    return(
        <div className='Question-Input'>
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
    
                    <form onSubmit={StoreQuestion}>
                        <div className="form-content-question">
                            <input 
                                className='inputbox typed' 
                                type="text" 
                                placeholder="Input pertanyaan disini..."
                                value={QuestionIn}
                                onChange={(e) => setQuestion(e.target.value)}>
                            </input>
                        </div>
                    <button type="submit" className="submit button">Submit</button>
                    </form>
                    
                </div>
            }
        </div>
    )
}

export default QuestionInput