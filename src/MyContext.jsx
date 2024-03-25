// ReactContext
import { createContext, useContext, useState, useEffect } from 'react';
import { DB } from './Firebase.js';
import { doc, collection, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const MyContext = createContext();

export const PageContext = ({ children }) => {
    const [ boolRefresh , setBoolRefresh ] = useState(false)

    const [ userID, setUserID ] = useState(() => {
        // Retrieve userID from session storage when component mounts
        const storedUserID = sessionStorage.getItem('userID');
        return storedUserID || ''; // Return storedUserID if exists, otherwise return an empty string
    })

    useEffect(() => {
        // Set userID in session storage
        sessionStorage.setItem('userID', userID);
    }, [userID])


    const RefreshData = () => {
        if (boolRefresh == false) {
            setBoolRefresh(true)
        } else {
            setBoolRefresh(false)
        }
    }

    const StoreQuestion = async (docName, submittedQuestion) => {
        const docRef = doc(collection(DB, 'questions'), docName);

        try {
            // Fetch document snapshot
            const docSnapshot = await getDoc(docRef);

            let n = 1; //default

            if (docSnapshot.exists()) {
                // If document exists, count number of fields
                const data = docSnapshot.data();
                n = Object.keys(data).length + 1;
            }

            // Update questions data
            await updateDoc(docRef, {
                [`pertanyaan${n}`]: submittedQuestion
            });

            console.log(`Question ${n} stored successfully`);
            RefreshData()

        } catch (error) {
            console.error('Error storing question data:', error);
        }
    }

    const DeleteQuestion = async (n, docName) => {
        const docRef = doc(collection(DB, 'questions'), docName);
    
        try {
            const docSnapshot = await getDoc(docRef);
    
            if (docSnapshot.exists()) {
                // Get document data as an object
                const docData = docSnapshot.data();
    
                // Deleting the field pertanyaan{n}
                delete docData[`pertanyaan${n}`];
    
                // Sort fields
                for (let i = n + 1; i <= Object.keys(docData).length + 1; i++) {
                    if (docData[`pertanyaan${i}`] !== undefined) {
                        docData[`pertanyaan${i - 1}`] = docData[`pertanyaan${i}`];
                        delete docData[`pertanyaan${i}`];
                    }
                }

                // Update the document with the modified data
                await setDoc(docRef, docData);
                console.log(`pertanyaan${n} deleted successfully!`);
                RefreshData()

            } else {
                console.log('Document does not exist.');
            }
        } catch (error) {
            console.error('Error deleting field:', error);
        }
    }

    return (
        <MyContext.Provider value={{ boolRefresh, userID, setUserID, StoreQuestion, DeleteQuestion }}>
        {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
  return useContext(MyContext);
};