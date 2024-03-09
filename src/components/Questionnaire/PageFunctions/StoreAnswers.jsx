import { collection, addDoc } from 'firebase/firestore';
import { DB } from '../../../Firebase.js';

const StoreAnswers = async (answers, rating, answerDocType) => {
    try {
        const dataToAdd = {};

        for (let i = 0; i < 5; i++) {
            dataToAdd[`answer${i + 1}`] = answers[i];
        }
        dataToAdd['Rating'] = rating;

        await addDoc(collection(DB, answerDocType), dataToAdd);

        console.log('Documents added successfully :', dataToAdd);
    } catch (error) {
        console.log(error.message);
    }
}

export default StoreAnswers

