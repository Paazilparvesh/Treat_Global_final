import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/appRoute";

function App() {
  return (
    <>
    <ScrollToTop/>
      <Header />

      <AppRoutes />

      <Footer />
    </>
  );
}

export default App;
