import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, setDoc, query, where, doc } from 'firebase/firestore';
import { Auth, DB } from '../../../Firebase.js';

{/* Masyarakat Authentication */}
const AuthMasyarakat = async (email, password, kantor, navigate, setErrorMessage, setUserID) => {
  try {
    // Sign in with email and password
    const userCredential = await signInWithEmailAndPassword(Auth, email, password);

    // Query Firestore
    const userQuery = query(collection(DB, 'users'), where('uid', '==', userCredential.user.uid));
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.docs.length > 0) {
      const userData = querySnapshot.docs[0].data();
      //check if user is masyarakat
      if (userData.accType !== 'Masyarakat') {
        setErrorMessage("User ini bukan Masyarakat");
        return;
      }
      else {
        setUserID(userCredential.user.uid)
      }
    }
    else{
      setErrorMessage("User tidak ditemukan")
      return;
    }

    //Validate Kantor
    if (kantor === "Masyarakat Airmadidi Bawah") {
      navigate('/Masyarakat-AirmBawah');
    } else if (kantor === "Masyarakat Watutumou Dua") {
      navigate('/Masyarakat-WatutumouDua');
    } else {
      setErrorMessage("Pilih Kantor");
      return;
    }
  }
  catch (error) {
    ErrorHandler(error, setErrorMessage);
  }
};

{/* Admin Authentication */}
const AuthAdmin = async (email, password, kantor, navigate, setErrorMessage) => {
    try {
        // Sign in with email and password
        const userCredential = await signInWithEmailAndPassword(Auth, email, password);

        // Check if the user has an accType
        const userQuery = query(collection(DB, 'users'), where('uid', '==', userCredential.user.uid));
        const querySnapshot = await getDocs(userQuery);

        if (querySnapshot.docs.length > 0) {
            const userData = querySnapshot.docs[0].data();

            if (userData.accType !== 'Admin') {
                //Check if user is admin
                setErrorMessage("User ini bukan Admin");
                return;
            }
        }
        else{
          setErrorMessage("User tidak ditemukan")
          return;
        }

        //Validate Kantor
        if (kantor === "Admin Airmadidi Bawah") {
            navigate('/Admin-SKCK-AirmBawah');
        } else if (kantor === "Admin Watutumou Dua") {
            navigate('/Admin-SKCK-WatutumouDua');
        } else {
            setErrorMessage("Pilih Kantor");
            return;
        }
    } 
    catch (error) {
      ErrorHandler(error, setErrorMessage);
    }
}

{/* SignUp */}
const SignUp = async (fullName, email, password1, setErrorMessage) => {
  try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(Auth, email, password1);

      const docName = email

      // Update user profile with data
      await setDoc(doc(collection(DB, 'users'), docName), {
          uid: userCredential.user.uid,
          fullName: fullName,
          accType: 'Masyarakat',
      });

      // Registered successfully
      setErrorMessage("Sign Up Berhasil")
      console.log("Sign Up Berhasil")
  }
  catch (error) {
    ErrorHandler(error, setErrorMessage);
  }
}

{/* Error Handler */}
const ErrorHandler = (error, setErrorMessage) => {
  switch(error.code){
    case 'auth/invalid-email':
      setErrorMessage("Format Email salah");
      break;
    case 'auth/email-already-in-use':
      setErrorMessage("Email sudah dipakai");
      break;
    case 'auth/missing-password':
      setErrorMessage("Password tidak boleh kosong")
      break
    case 'auth/weak-password':
      setErrorMessage("Password anda lemah");
      break;
    case 'auth/invalid-credential':
      setErrorMessage("Email atau Password salah");
      break;
    default:
      setErrorMessage("Terjadi kesalahan");
      console.log(error.message)
      break;
  }
}

export { AuthMasyarakat, AuthAdmin, SignUp };