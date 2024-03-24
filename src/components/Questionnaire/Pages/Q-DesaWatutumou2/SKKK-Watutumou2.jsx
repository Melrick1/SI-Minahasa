import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import FetchQuestions from '../../../Dashboard/SubComponents/FetchQuestions.jsx';
import StarRating from '../../SubComponents/StarRating.jsx';
import Question from '../../SubComponents/Questions.jsx';

const SKKKWatutumouDua = () =>{
    const [answers, setAnswers] = useState({});
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(0)
    const [numbersArray, setNumbersArray] = useState([]);
    const [valuesArray, setValuesArray] = useState([]);
    const questionDoc = 'Questions SKKK WatutumouDua';
    const answerDoc = 'Answers SKKK WatutumouDua';

    useEffect(() => {
        const fetchFormattedData = async () => {
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
        fetchFormattedData();
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
        let userID = 'test'
        StoreAnswers(userID, rating, comment, answerDoc, answers);
    }

    return(
        <section className='questionnaire'>
            <header>
                <h3>Desa Watutumou Dua</h3>
                <div className='log-out'>
                    <Link to='/'><i className="bi bi-box-arrow-left"></i></Link>
                </div>
                <div className='header-nav'>
                    <Link to="/SKCK-WatutumouDua" className='button landing-link'>Layanan SKCK</Link>
                    <Link to="/SKKK-WatutumouDua" className='button landing-link active'>Layanan SKKK</Link>
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
                <button className='submit-response button' onClick={submitResponse}>Submit</button>
            </div>
        </section>
    )
}

export default SKKKWatutumouDua