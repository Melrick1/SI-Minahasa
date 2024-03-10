// fetchDataComponent.jsx
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { DB } from '../../Firebase.js';

const FetchDataComponent = () => {
  const [userData, setUserData] = useState(null);

    const FetchData = async () => {
        const user = getAuth().currentUser;

        if (user) {
            // If user is signed in, fetch additional user data
            const userQuery = query(collection(DB, 'users'), where('uid', '==', user.uid));
            const querySnapshot = await getDocs(userQuery);

            if (querySnapshot.size === 1) {
                setUserData(querySnapshot.docs[0].data());
            } 
            else {
                console.error('User data not found');
            }
        } 
        else {
            console.error('User not signed in');
        }
    };
  
    //Call Function (FetchData) in UseEffect
    useEffect(() => {
        FetchData();
    }, []); // Empty dependency array ensures the effect runs only on mount

    console.log(userData);
    return userData;
};

export default FetchDataComponent;