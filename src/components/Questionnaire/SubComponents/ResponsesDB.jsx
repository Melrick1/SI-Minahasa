import { collection, doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import { DB } from '../../../Firebase.js';

const StoreAnswers = async (rating, comment, answerDocName, innerField ,userID, setMessage) => {
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

        setMessage('Respon anda telah disimpan!')
        console.log('Answers successfully stored!');
    } catch (error) {
        console.error('Error storing answers: ', error);
    }
}

const InitializeUserResponse = async (userID) => {
    try {
        // Check if the user response has been initialized
        const outerDocRef = doc(collection(DB, 'responses'), userID);
        const outerDocSnapshot = await getDoc(outerDocRef);

        // Initialize user response only if it hasn't been initialized already
        if (!outerDocSnapshot.exists()) {
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

            console.log('Data successfully initialized!');
        } else {
            console.log('User response already initialized.');
        }
    } catch (error) {
        console.error('Error saving data: ', error);
    }
}

// Fetch Rating and Comment from Firestore
const FetchRatingAndComment = async (userID) => {
    try {
        const outerDocRef = doc(collection(DB, 'responses'), userID);
        const docSnap = await getDoc(outerDocRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            const prevRating = data.Rating
            const prevComment = data.Comment
            return { prevRating, prevComment };
        } else {
            console.log('No data found for the user');
            return;
        }
    } catch (error) {
        console.error('Error fetching rating and comment: ', error);
        return;
    }
}

// Fetch inner fields from Firestore based on the chosen inner document
const FetchAnswers = async (userID, answerDocName) => {
    try {
        const innerDocRef = doc(collection(DB, 'responses', userID, 'answers'), answerDocName);
        const docSnap = await getDoc(innerDocRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log('No data found for the chosen inner document');
            return;
        }
    } catch (error) {
        console.error('Error fetching inner fields: ', error);
        return;
    }
}

export { StoreAnswers, FetchRatingAndComment, FetchAnswers };