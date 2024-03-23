// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDxwWCfZcUmGAWTf5O0MlyFYQ05VS7F9GU",
  authDomain: "quiz-b3afb.firebaseapp.com",
  databaseURL: "https://quiz-b3afb-default-rtdb.firebaseio.com",
  projectId: "quiz-b3afb",
  storageBucket: "quiz-b3afb.appspot.com",
  messagingSenderId: "562518148518",
  appId: "1:562518148518:web:6782b1d545417a2a7a7b67",
  measurementId: "G-7GBJS4X04D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function bttn() {
  let que = document.querySelector("#question");
  let ansparent = document.querySelector("#answer-buttons");
  let ansuttons = ansparent.querySelectorAll("button");
  let answersArr = []
  let btn = document.querySelector("button");
  ansuttons.forEach(button => {
    answersArr.push(button.innerHTML);
  });
  let answers = answersArr.join(", ");
  const docRef = addDoc(collection(db, "quiz"), {
    question: que.innerHTML,
    answer: answers,
    select: btn.innerHTML,
    Time: new Date().toLocaleString(),
  });
  console.log("Document written with ID: ", docRef.id);
}

window.bttn = bttn;
