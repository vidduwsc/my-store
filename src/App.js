import ScrollToTop from "./actions/ScrollToTop";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1x8VVJtAYyw8msKsjviuYQfJ8R2SZFjg",
  authDomain: "my-store-1807vd.firebaseapp.com",
  projectId: "my-store-1807vd",
  storageBucket: "my-store-1807vd.appspot.com",
  messagingSenderId: "503923798502",
  appId: "1:503923798502:web:e1e558bb955ef05b77e627",
  measurementId: "G-5313D58NNK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
