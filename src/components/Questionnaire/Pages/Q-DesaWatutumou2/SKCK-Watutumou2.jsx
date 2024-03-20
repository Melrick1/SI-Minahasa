import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import FetchQuestions from '../../../Dashboard/SubComponents/FetchQuestions.jsx';
import StarRating from '../../PageFunctions/StarRating.jsx';
import Question from '../../PageFunctions/Questions.jsx';
import '../QuestionsMasyarakat.css'

const SKCKWatutumouDua = () =>{
    const [Comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [fetchedQuestions, setFetchedQuestions] = useState([])
    const DBdoc = 'Questions SKCK WatutumouDua';

    useEffect(() => {
        const fetchFormattedData = async () => {
            const formattedData = await FetchQuestions(DBdoc);
            setFetchedQuestions(formattedData);
        }
        fetchFormattedData();
    },[])

    const commentChange = (event) => {
        setComment(event.target.value);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

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
                    {fetchedQuestions.map((index) => (
                        <Question key={index} question={index}/>
                    ))}
                </div>

                <div className='comment-section questionCard'>
                    <h3>Apakah ada saran untuk pengembangan pelayanan SKCK Airmadidi Bawah?</h3>
                    <p>Berikan komentar anda :</p>
                    <textarea
                    className='comment-box'
                    type="text"
                    value={Comment}
                    onChange={commentChange}
                    placeholder="Komentar..."
                    />
                    <StarRating initialRating={rating} onRatingChange={handleRatingChange} />
                </div>
                <button className='submit-response'>Submit</button>
            </div>
        </section>
    )
}

export default SKCKWatutumouDua