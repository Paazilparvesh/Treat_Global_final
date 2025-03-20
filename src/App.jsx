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



// import { createContext, useState } from "react";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
// import ScrollToTop from "./components/ScrollToTop";
// import AppRoutes from "./routes/appRoute";

// const DoctorContext=createContext()

// function App() {
//   const [Activityarr,setActivityarr]=useState([{
//     id: 1,
//     image: "src/assets/images/Doctors/Dr. Tapan.jpeg",
//     name: "Dr. Tapan Singh Chauhan",
//     field: "Associate Consultant - Gastrointestinal and HPB Oncology '&' Surgical Oncology",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 2,
//     image: "src/assets/images/Doctors/Dr. Subodh.jpeg",
//     name: "Dr. Subodh Chandra Pande",
//     field: "Chief - Radiation Oncology & Co-Chief - Cyberknife Centre",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 3,
//     image: "src/assets/images/Doctors/Dr. Mukesh Patekar.jpeg",
//     name: "Dr. Mukesh Patekar",
//     field: "Unit Head - Medical Oncology",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 4,
//     image: "src/assets/images/Doctors/Dr. Parveen Yadav.jpeg",
//     name: "Dr. Parveen Yadav",
//     field: "Chief and Sr. Consultant - Robotic & Minimal Invasive Thoracic Oncosurgeon Thoracic Surgery and Surgical Oncology",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 5,
//     image: "src/assets/images/Doctors/Dr. Rupinder Gynae Onco.jpeg",
//     name: "Dr. Rupinder Sekhon",
//     field: "Chairperson - Gynaecological Oncology",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 6,
//     image: "src/assets/images/Doctors/Dr. Sanjeev.jpeg",
//     name: " Dr. Sanjeev Srivastava",
//     field: "Consultant - Neurosurgery",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 7,
//     image: "src/assets/images/Doctors/Dr. Sukirti.jpeg",
//     name: "Dr. Sukri Gupta",
//     field: "Consultant, BMT, Hematology",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 8,
//     image: "src/assets/images/Doctors/Dr. Gaurav Dixit.jpeg",
//     name: " Dr. Gaurav Dixit",
//     field: "Unit Head - Haemato -Oncology (Unit II)",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 9,
//     image: "src/assets/images/Doctors/Dr. Shashidhar Shree.jpeg",
//     name: "Dr. Shashidhar Shree Niwas",
//     field: "Sr. Consultant - Nephrology",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 10,
//     image: "src/assets/images/Doctors/Dr. Aditya Gupta.jpeg",
//     name: "Dr. Aditya Gupta",
//     field: "Chief - Neurosurgery & CNS Radiosurgery &Co-Chief-Cyberknife Centre",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 11,
//     image: "src/assets/images/Doctors/Dr. Hitesh Garg.jpeg",
//     name: "Dr. Hitesh Garg",
//     field: "Head - Ortho Spine Surgery",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 12,
//     image: "src/assets/images/Doctors/Dr. Priya Tiwari.jpeg",
//     name: "Dr. Priya Tiwari",
//     field: "Unit Head - Medical Oncology (Unit II)",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 13,
//     image: "src/assets/images/Doctors/Dr. Pawan Goyal.jpeg",
//     name: "Dr. Pawan Goyal",
//     field: "Sr. Consultant - Neurosurgery",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 14,
//     image: "src/assets/images/Doctors/Dr. Manju Aggarwal.jpeg",
//     name: "Dr. Manju Aggarwal",
//     field: "Chief - Medical Services & Chairperson - Nephrology",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 15,
//     image: "src/assets/images/Doctors/Dr. S jayalakshmi.jpeg",
//     name: "Dr. S jayalakshmi",
//     field: "Sr. Consultant - Oncology",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 16,
//     image: "src/assets/images/Doctors/Dr. Deepak Jha.jpeg",
//     name: "Dr. Deepak Jha",
//     field: "Chief, Breast Surgery & Sr. Consultant, Surgical Oncology",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 17,
//     image: "src/assets/images/Doctors/Dr. Devendra Yadav.jpeg",
//     name: "Dr. Devendra Yadav",
//     field: "Sr. Consultant - Orthopedics (Unit VI)",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },
//   {
//     id: 18,
//     image: "src/assets/images/Doctors/Dr. Hazarika.jpeg",
//     name: "Dr. Biswajyoti Hazarika",
//     field: "Cheif - Head & Neck Surgery",
//     experience: 3,
//     hospital: "Artemis Hospital, Gurugram"
//   },])
//   return (
//     <>
//     <DoctorContext.Provider value={Activityarr}>
//     <ScrollToTop/>
//       <Header />

//       <AppRoutes />

//       <Footer />
//       </DoctorContext.Provider>
//     </>
//   );
// }

// export {DoctorContext}
// export default App;