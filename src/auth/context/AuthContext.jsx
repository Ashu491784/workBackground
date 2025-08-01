import { useEffect, useState, createContext, useContext, use } from "react";
import { auth } from "../../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext(); //context eken karanne authontications walata awashya functions, data store karagannawa (component athara data share karanna)

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //handle user state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  //emainl , password login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //email, password registration
  const registration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //google login
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleprovider);
  };

  //password reset
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //logout
  const logout = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    login,
    registration,
    loginWithGoogle,
    resetPassword,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )

}
export function useAuth (){
    return useContext(AuthContext);
}
