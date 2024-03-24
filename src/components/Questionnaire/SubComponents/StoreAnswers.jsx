import { collection, doc, setDoc, updateDoc } from 'firebase/firestore';
import { DB } from '../../../Firebase.js';

const InitializeUserResponse = async (userID) => {
    try {
        const outerDocRef = doc(collection(DB, 'responses'), userID);

        // Add a document to the outer collection
        await setDoc(outerDocRef, {
            Rating: 0,
            Comment: ""
            //inner collection to be added
        });

        // Access the inner collection
        const innerCollectionRef = collection(outerDocRef, 'answers');

        // Add six documents with names and empty fields to the inner collection
        const names = [
            'Answers SKCK AirmBawah',
            'Answers SKKK AirmBawah',
            'Answers SKP AirmBawah',
            'Answers SKCK WatutumouDua',
            'Answers SKKK WatutumouDua',
            'Answers SKP WatutumouDua'
        ];

        for (const name of names) {
            await setDoc(doc(innerCollectionRef, name), {});
        }

        console.log('Data successfully saved!');
    } catch (error) {
        console.error('Error saving data: ', error);
    }
}

const StoreAnswers = async (userID, rating, comment, answerDocName, innerField) => {
    try {
        // Initialize user response if not already initialized
        await InitializeUserResponse(userID);

        // Access the outer document
        const outerDocRef = doc(collection(DB, 'responses'), userID);

        // Access the inner collection
        const innerCollectionRef = collection(outerDocRef, 'answers');

        // Choose the inner document to add the inner field
        const innerDocRef = doc(innerCollectionRef, answerDocName);

        // Add the inner field to the chosen inner document
        await setDoc(innerDocRef, innerField);

        // Update rating and comment fields in the outer document if provided
        await updateDoc(outerDocRef, {
            Rating: rating,
            Comment: comment
        });

        console.log('Answers successfully stored!');
    } catch (error) {
        console.error('Error storing answers: ', error);
    }
}

export default StoreAnswers;