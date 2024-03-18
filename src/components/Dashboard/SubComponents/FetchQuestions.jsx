import { DB } from '../../../Firebase.js';
import { doc, collection, getDoc } from 'firebase/firestore';

const FetchQuestions = async (docName) => {
    const docRef = doc(collection(DB, 'questions'), docName);

    try {
        // Fetch document snapshot
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            // Get document data as an object
            const docData = docSnapshot.data();

            // Convert Doc to array
            const dataArray = Object.entries(docData).map(
                ([key, value]) => ({ number: Number(key.replace('pertanyaan', '')), value })
            );
            //map(([key, value]) => ({ number, value }) == {fieldname as number, value}
            //example [{number : 1, value : test1}, {number : 2, value : test2}]

            // Sort the array based on the numbers
            dataArray.sort((a, b) => a.number - b.number);

            // Extract numbers and corresponding values as strings
            const formattedData = dataArray.map(({ number, value }) => `${number}. ${value}`);

            console.log(formattedData)
            return formattedData;
        } else {
            console.log('Document does not exist.');
            return [];
        }
    } catch (error) {
        console.error('Error fetching document data:', error);
        return [];
    }
};

export default FetchQuestions