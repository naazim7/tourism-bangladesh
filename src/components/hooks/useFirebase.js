import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged,
    signInWithEmailAndPassword, signInWithPopup, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";




initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading]=useState(true);
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	
   




//Eroor
	useEffect(() => {
		setTimeout(() => {
			setError("");
		}, 5000);
	}, [error]);
	
//googleSignIn
    const googleSignIn = () => {
       return signInWithPopup(auth, googleProvider)
			

    }

//SignUp With EmailPass

    const signUpWithEmail = () => {
        
      
       return createUserWithEmailAndPassword(auth, email, password)
		
	}
	
//signInWithEmail
    
    const emailSignIn = () => {
           
      return  signInWithEmailAndPassword(auth, email, password)
    }


    //OnAuthStageChange

useEffect(() => {
	const unsubscribe = onAuthStateChanged(auth, (user) => {
		if (user) {
			setUser(user);
		} else {
			setUser({});
		}
		setLoading(false);
	});
	return () => unsubscribe;
}, []);
	
	
	//logout 

	 function logOut() {
			signOut(auth)
				.then((res) => {
					setUser({});
				})
				.catch((error) => {
					setError(error.message);
				})
				.finally(() => setLoading(false));
		}
   


	return {
		googleSignIn,
		signUpWithEmail,
		setEmail,
		setPassword,
		emailSignIn,
		error,
		user,
		logOut,
		loading,
		setUser,
		setError,
		setLoading
		
	};

};
export default useFirebase;