import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
// import Contact from "./pages/Contact";
// import  Home  from "./pages/Home/Home";
// import MedicalOpinions from "./pages/MedicalOpinons";
// import Treatment from "./pages/Treatment/Treatment";
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
