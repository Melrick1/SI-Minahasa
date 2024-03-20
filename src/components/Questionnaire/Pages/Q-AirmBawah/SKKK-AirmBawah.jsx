import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import FetchQuestions from '../../../Dashboard/SubComponents/FetchQuestions.jsx';
import StarRating from '../../PageFunctions/StarRating.jsx';
import Question from '../../PageFunctions/Questions.jsx';

const SKKKAirmBawah = () =>{
    const [Comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [fetchedQuestions, setFetchedQuestions] = useState([])
    const DBdoc = 'Questions SKKK AirmBawah';

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
                <h3>Airmadidi Bawah</h3>
                <div className='log-out'>
                    <Link to='/'><i className="bi bi-box-arrow-left"></i></Link>
                </div>
                <div className='header-nav'>
                    <Link to="/SKCK-AirmBawah" className='button landing-link'>Layanan SKCK</Link>
                    <Link to="/SKKK-AirmBawah" className='button landing-link active'>Layanan SKKK</Link>
                    <Link to="/SKP-AirmBawah" className='button landing-link'>Layanan SKP</Link>
                </div>
            </header>
            <div className='landingContent'>
                <div className='line'></div>
                <h2>Layanan Pembentukan Surat Keterangan Kartu Keluarga</h2>

                <div className="questionDisplay">
                    {fetchedQuestions.map((index) => (
                        <Question key={index} question={index}/>
                    ))}
                </div>

                <div className='comment-section questionCard'>
                    <h3>Apakah ada saran untuk pengembangan pelayanan SKKK Airmadidi Bawah?</h3>
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
            </div>
            <button className='submit-response'>Submit</button>
        </section>
    )
}

export default SKKKAirmBawah