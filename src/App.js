import ScrollToTop from "./actions/ScrollToTop";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

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
