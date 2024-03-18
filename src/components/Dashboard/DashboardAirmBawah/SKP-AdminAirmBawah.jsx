import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import AdminQuestion from '../SubComponents/AdminQuestion';
import QuestionInput from '../SubComponents/QuestionInput';
import FetchQuestions from '../SubComponents/FetchQuestions';

const AdminSKPAirmBawah = () =>{
    const chartdata = [1,2,4,2]
    const [fetchedQuestions, setFetchedQuestions] = useState([])

    useEffect(() => {
        const fetchFormattedData = async () => {
            const docName = 'Questions SKCK AirmBawah';
            const formattedData = await FetchQuestions(docName);
            setFetchedQuestions(formattedData);
        }
        fetchFormattedData();
    },[])

    return(
        <section className='questionnaire'>
            <header>
                <h3>Airmadidi Bawah</h3>
                <div className='log-out'>
                    <Link to='/'><i className="bi bi-box-arrow-left"></i></Link>
                </div>
                <div className='header-nav'>
                    <Link to="/Admin-SKCK-AirmBawah" className='button landing-link'>Layanan SKCK</Link>
                    <Link to="/Admin-SKKK-AirmBawah" className='button landing-link'>Layanan SKKK</Link>
                    <Link to="/Admin-SKP-AirmBawah" className='button landing-link active'>Layanan SKP</Link>
                </div>
            </header>
            <div className='landingContent'>
                <div className='line'></div>
                <h2>Layanan Pembentukan Surat Keterangan Penduduk</h2>

                <div className="questionDisplay">
                    <QuestionInput docName={'Questions SKP AirmBawah'}/>

                    {fetchedQuestions.map((index) => (
                        <AdminQuestion key={index} question={index} data={chartdata}/>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default AdminSKPAirmBawah