import BarChart from './BarChart';
import { useMyContext } from '../../../MyContext';

const QuestionAdmin = ({n, question, docName, data }) =>{
    const { DeleteQuestion } = useMyContext()

    const deleteQuestionHandler = () => {
        DeleteQuestion(n, docName);
    }

    return(
        <div className="questionCard">
            <button className='close' onClick={deleteQuestionHandler}>
                <i className="bi bi-x-lg"></i>
            </button>
            <h3>{n}. {question}</h3>
            <BarChart questionNumber={n} answersLists={data} />
        </div>
    )
}

export default QuestionAdmin;