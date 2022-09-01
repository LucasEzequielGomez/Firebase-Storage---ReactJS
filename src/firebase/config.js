
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyCYnX_Hgi5qsjnKPwGGlUZ06a-yTBGNTRQ",
  authDomain: "react-firebase-fbcd5.firebaseapp.com",
  projectId: "react-firebase-fbcd5",
  storageBucket: "react-firebase-fbcd5.appspot.com",
  messagingSenderId: "343155559427",
  appId: "1:343155559427:web:36e4ae11afc2ea77c35236",
  measurementId: "G-3W3TES1KF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file) {
    const storageRef = ref(storage, v4())
    await uploadBytes (storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}