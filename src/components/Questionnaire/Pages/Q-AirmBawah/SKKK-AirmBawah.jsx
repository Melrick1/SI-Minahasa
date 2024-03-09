import React, { useState } from 'react';
import StarRating from '../../PageFunctions/StarRating.jsx';
import Question from '../../PageFunctions/Questions.jsx';

const SKKKAirmBawah = () =>{
    const [Comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

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
            </header>
            <div className='landingContent'>
                <div className='line'></div>
                <h2>Layanan Pembentukan Surat Keterangan Kartu Keluarga</h2>

                <div className="questionDisplay">
                    <Question
                    n={1}
                    question="Sejauh mana Anda puas dengan kondisi fisik kantor kelurahan Airmadidi Bawah yang digunakan untuk pembuatan SKP?"
                    input1="Sangat Puas"
                    input2="Cukup Puas"
                    input3="Netral"
                    input4="Kurang Puas"
                    input5="Tidak Puas"
                    onAnswerChange={(selectedAnswer) => UpdateList(1, selectedAnswer)}
                    />
                    <Question
                    n={2}
                    question="Seberapa sering Anda mengalami kelambatan atau ketepatan waktu dalam pengurusan SKP di kantor kelurahan Airmadidi Bawah?"
                    input1="Sangat sering"
                    input2="Cukup sering"
                    input3="Netral"
                    input4="Tidak sering"
                    input5="Tidak pernah"
                    onAnswerChange={(selectedAnswer) => UpdateList(2, selectedAnswer)}
                    />
                    <Question
                    n={3}
                    question="Seberapa cepat Anda mendapatkan tanggapan atau pelayanan saat mengajukan permohonan pembuatan SKP di kantor kelurahan Airmadidi Bawah?"
                    input1="Sangat cepat"
                    input2="Cukup cepat"
                    input3="Netral"
                    input4="Cukup lambat"
                    input5="Sangat lambat"
                    onAnswerChange={(selectedAnswer) => UpdateList(3, selectedAnswer)}
                    />
                    <Question
                    n={4}
                    question="Seberapa yakin Anda dengan keamanan dan keakuratan data yang terdapat dalam SKP yang Anda terima dari kantor kelurahan Airmadidi Bawah?"
                    input1="Sangat yakin"
                    input2="Cukup yakin"
                    input3="Netral"
                    input4="Kurang yakin"
                    input5="Tidak yakin"
                    onAnswerChange={(selectedAnswer) => UpdateList(4, selectedAnswer)}
                    />
                    <Question
                    n={5}
                    question="Seberapa baik staff kantor kelurahan Airmadidi Bawah memahami kebutuhan dan keluhan Anda selama proses pembuatan SKP?"
                    input1="Sangat baik"
                    input2="Cukup baik"
                    input3="Netral"
                    input4="Kurang baik"
                    input5="Tidak baik"
                    onAnswerChange={(selectedAnswer) => UpdateList(5, selectedAnswer)}
                    />
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