import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useMyContext } from '../../../MyContext';
import QuestionInput from '../SubComponents/QuestionInput';
import QuestionAdmin from '../SubComponents/QuestionAdmin';
import {FetchQuestions, FetchDashboardAnswers} from '../SubComponents/FetchQnA';
import '../../Questionnaire/Pages/QuestionsMasyarakat.css'
import '../Dashboard.css'

const AdminSKCKAirmBawah = () =>{
    const chartdata = [1,2,4,2]
    const { boolRefresh } = useMyContext();
    const [numbersArray, setNumbersArray] = useState([]);
    const [valuesArray, setValuesArray] = useState([]);
    const questionDoc = 'Questions SKCK AirmBawah';
    const answerDoc = 'Answers SKCK AirmBawah';

    useEffect(() => {
        const fetchFormattedQuestions = async () => {
            const { numbers, values } = await FetchQuestions(questionDoc);
            setNumbersArray(numbers);
            setValuesArray(values);
        }

        const fetchAnswers = async () => {
            const result = await FetchDashboardAnswers(answerDoc); // Provide the desired docName
            console.log(result)
        };

        fetchFormattedQuestions();
        fetchAnswers();
    },[boolRefresh])

    return(
        <section className='questionnaire'>
            <header>
                <h3>Airmadidi Bawah</h3>
                <div className='log-out'>
                    <Link to='/'><i className="bi bi-box-arrow-left"></i></Link>
                </div>
                <div className='header-nav'>
                    <Link to="/Admin-SKCK-AirmBawah" className='button landing-link active'>Layanan SKCK</Link>
                    <Link to="/Admin-SKKK-AirmBawah" className='button landing-link'>Layanan SKKK</Link>
                    <Link to="/Admin-SKP-AirmBawah" className='button landing-link'>Layanan SKP</Link>
                </div>
            </header>
            <div className='landingContent'>
            <div className='line'></div>
                <h2>Layanan Pembentukan Surat Keterangan SKCK</h2>
                <QuestionInput docName={questionDoc}/>

                <div className="questionDisplay">
                    {valuesArray.map((value, index) => (
                        <QuestionAdmin 
                        key={numbersArray[index]} 
                        n={numbersArray[index]} 
                        question={value} 
                        data={chartdata}
                        docName={questionDoc}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AdminSKCKAirmBawah