import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { FetchQuestions } from '../../../Dashboard/SubComponents/FetchQnA.jsx';
import StarRating from '../../SubComponents/StarRating.jsx';
import Question from '../../SubComponents/Questions.jsx';
import { useMyContext } from '../../../../MyContext.jsx';
import {StoreAnswers, FetchRatingAndComment, FetchAnswers} from '../../SubComponents/ResponsesDB.jsx';
import '../QuestionsMasyarakat.css'

const SKCKWatutumouDua = () =>{
    const {userID} = useMyContext();
    const [answers, setAnswers] = useState({});
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(0)
    const [numbersArray, setNumbersArray] = useState([]);
    const [valuesArray, setValuesArray] = useState([]);
    const questionDoc = 'Questions SKCK WatutumouDua';
    const answerDoc = 'Answers SKCK WatutumouDua';
    const [message, setMessage] = useState('')

    useEffect(() => {
        const fetchFormattedQuestions = async () => {
            const { numbers, values } = await FetchQuestions(questionDoc);
            setNumbersArray(numbers);
            setValuesArray(values);

            // Set initial answers
            const initialAnswers = {};
            for (let i = 1; i <= numbers.length; i++) {
                initialAnswers[`question${i}`] = ""; // Initialize each question with an empty answer
            }
            setAnswers(prevAnswers => ({ ...prevAnswers, ...initialAnswers }));
        }

        //fetch previously submitted responses
        const fetchResponses = async () => {
            const { prevRating, prevComment } = await FetchRatingAndComment(userID);
            const innerFields = await FetchAnswers(userID, answerDoc);
            setAnswers(innerFields)
            setRating(prevRating);
            setComment(prevComment);
        }

        console.log('UserID :', userID)
        fetchFormattedQuestions();
        fetchResponses();
    },[])

    const handleAnswerChange = async (number, answer) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [number]: answer
        }));
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating)
    };

    useEffect(() => {
        console.log('All Answers:', answers);
        console.log('Comment : ', comment);
        console.log('Rating : ', rating);
    }, [answers, comment, rating]);

    const submitResponse = () => {
        setMessage('Please Wait...')
        StoreAnswers(rating, comment, answerDoc, answers, userID, setMessage);
    }

    return(
        <section className='questionnaire'>
            <header>
                <h3>Desa Watutumou Dua</h3>
                <div className='log-out'>
                    <Link to='/'><i className="bi bi-box-arrow-left"></i></Link>
                </div>
                <div className='header-nav'>
                    <Link to="/SKCK-WatutumouDua" className='button landing-link active'>Layanan SKCK</Link>
                    <Link to="/SKKK-WatutumouDua" className='button landing-link'>Layanan SKKK</Link>
                    <Link to="/SKP-WatutumouDua" className='button landing-link'>Layanan SKP</Link>
                </div>
            </header>

            <div className='landingContent'>
                <div className='line'></div>
                <h2>Layanan Pembentukan Surat Keterangan SKCK</h2>

                <div className="questionDisplay">
                    {valuesArray.map((value, index) => (
                        <Question 
                        key={numbersArray[index]} 
                        n={numbersArray[index]} 
                        question={value} 
                        selectedAnswer={answers[`answer${index+1}`]}
                        onAnswerChange={handleAnswerChange}/>
                    ))}
                </div>

                <div className='comment-section questionCard'>
                    <h3>Apakah ada saran untuk pengembangan pelayanan SKCK Airmadidi Bawah?</h3>
                    <p>Berikan komentar anda :</p>
                    <textarea
                    className='comment-box'
                    type="text"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Komentar..."
                    />
                    <StarRating initialRating={0} onRatingChange={handleRatingChange} />
                </div>
                <p>&nbsp;{message}</p>
                <button className='submit-response button' onClick={submitResponse}>Submit</button>
            </div>
        </section>
    )
}

export default SKCKWatutumouDua