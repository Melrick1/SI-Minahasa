import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../Firebase.js';

export const AuthMasyarakat = async (email, password, kantor, navigate) => {
  try {
    // Sign in with email and password
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Query Firestore
    const q = query(collection(db, 'users'), where('uid', '==', userCredential.user.uid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length > 0) {
      const userData = querySnapshot.docs[0].data();
      //check if user is masyarakat
      if (userData.accType !== 'Masyarakat') {
        console.log("User bukan Masyarakat");
        return;
      }
    }

    //Validate Kantor
    if (kantor === "Masyarakat Airmadidi Bawah") {
      navigate('/Masyarakat-AirmBawah');
    } else if (kantor === "Masyarakat Watutumou Dua") {
      navigate('/Masyarakat-WatutumouDua');
    } else {
      console.log("Pilih Kantor");
      return;
    }
  } catch (error) {
    console.error("Error signing in:", error.message);
  }
};



export const AuthAdmin = async (email, password, kantor, navigate) => {
    try {
        // Sign in with email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        // Check if the user has an accType
        const q = query(collection(db, 'users'), where('uid', '==', userCredential.user.uid));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.docs.length > 0) {
            const userData = querySnapshot.docs[0].data();

            if (userData.accType !== 'Admin') {
                //Check if user is admin
                console.log("User bukan Admin");
                return;
            }
        }

        //Validate Kantor
        if (kantor === "Admin Airmadidi Bawah") {
            navigate('/Admin-AirmBawah');
        } else if (kantor === "Admin Watutumou Dua") {
            navigate('/Admin-WatutumouDua');
        } else {
            console.log("Pilih Kantor");
            return;
        }
    } 
    catch (error) {
        console.error("Error signing in:", error.message);
    }
}