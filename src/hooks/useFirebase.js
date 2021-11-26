import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);

  const auth = getAuth();

  const createUserByEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        setErrors(...errors, error.message);
      })
      .finally(() => {
        setIsLoading(false);
        window.location.reload();
      });
  };
  const logInUserByEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        setErrors(...errors, error.message);
      })
      .finally(() => {
        setIsLoading(false);
        window.location.reload();
      });
  };

  const signInUserByGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        setErrors(...errors, error.message);
      })
      .finally(() => {
        setIsLoading(false);
        window.location.reload();
      });
  };

 

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetch("./Data/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  return {
    createUserByEmail,
    logInUserByEmail,
    signInUserByGoogle,

    user,
    errors,
    isLoading,
    services,

    logOut,
  };
};

export default useFirebase;
