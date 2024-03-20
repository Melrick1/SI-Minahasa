import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useMyContext } from '../../../MyContext';
import QuestionInput from '../SubComponents/QuestionInput';
import QuestionAdmin from '../SubComponents/QuestionAdmin';
import FetchQuestions from '../SubComponents/FetchQuestions';

const AdminSKKKAirmBawah = () =>{
    const chartdata = [1,2,4,2]
    const { boolRefresh } = useMyContext();
    const [numbersArray, setNumbersArray] = useState([]);
    const [valuesArray, setValuesArray] = useState([]);
    const DBdoc = 'Questions SKKK AirmBawah';

    useEffect(() => {
        const fetchFormattedData = async () => {
            const { numbers, values } = await FetchQuestions(DBdoc);
            setNumbersArray(numbers);
            setValuesArray(values);
        }
        fetchFormattedData();
    },[boolRefresh])

    return(
        <section className='questionnaire'>
            <header>
                <h3>Airmadidi Bawah</h3>
                <div className='log-out'>
                    <Link to='/'><i className="bi bi-box-arrow-left"></i></Link>
                </div>
                <div className='header-nav'>
                    <Link to="/Admin-SKCK-AirmBawah" className='button landing-link'>Layanan SKCK</Link>
                    <Link to="/Admin-SKKK-AirmBawah" className='button landing-link active'>Layanan SKKK</Link>
                    <Link to="/Admin-SKP-AirmBawah" className='button landing-link'>Layanan SKP</Link>
                </div>
            </header>

            <div className='landingContent'>
                <div className='line'></div>
                <h2>Layanan Pembentukan Surat Keterangan Kartu Keluarga</h2>
                <QuestionInput docName={DBdoc}/>
                
                <div className="questionDisplay">
                    {valuesArray.map((value, index) => (
                        <QuestionAdmin 
                        key={numbersArray[index]} 
                        n={numbersArray[index]} 
                        question={value} 
                        data={chartdata}
                        docName={DBdoc}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default AdminSKKKAirmBawah