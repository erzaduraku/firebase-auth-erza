import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZNy83oknHSB6EENpW8-VKvqD2AdQUcbI",
  authDomain: "fir-auth-erza.firebaseapp.com",
  projectId: "fir-auth-erza",
  storageBucket: "fir-auth-erza.firebasestorage.app",
  messagingSenderId: "17956248639",
  appId: "1:17956248639:web:8fea9a866d8ba71da6ec8a",
  measurementId: "G-ZGERRW7DYT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("googleLogin").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      showPopup(`🌸 Mirë se erdhe, ${user.displayName}!`);
      console.log("User info:", user);
    })
    .catch((error) => {
      showPopup(`⚠️ Gabim gjatë login: ${error.message}`, true);
      console.error("Gabim:", error.message);
    });
});


function showPopup(message, isError = false) {
  const popup = document.createElement("div");
  popup.className = `popup ${isError ? 'error' : ''}`;
  popup.textContent = message;
  document.body.appendChild(popup);


  setTimeout(() => popup.classList.add("show"), 100);

 
  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 500);
  }, 4000);
}
