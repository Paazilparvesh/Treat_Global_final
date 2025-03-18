import { Route, Routes } from "react-router-dom";
import  Home  from "../pages/Home/Home";
import routesPath from "./routesPath";
import Treatment from "../pages/Treatment/Treatment";
import SingleTreatment from "../pages/Treatment/SingleTreatment";
import Doctor from "../pages/Doctor/Doctor";
import IndividualDoctor from "../pages/Doctor/IndividualDoctor";
import MedicalOpinions from "../pages/MedicalOpinons";
import Contact from "../pages/Contact";
import Join from "../pages/Join";
import Blog from "../pages/Blog/Blog";
import SingleBlog from "../pages/Blog/SingleBlog";
import HospitalList from "../pages/Hospital/HospitalPage";
import IndividualHospital from "../pages/Hospital/IndividualHospital/IndividualHospital";
import WellnessTourismPage from "../pages/WellnessTourism/WellnessTourism";
import IndividualPage from "../pages/WellnessTourism/IndividualTourism/IndividualWellnessTourism";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path={routesPath.HOME} element={<Home />} />

      <Route path={routesPath.TREATMENTS} element={<Treatment />} />
      <Route path={routesPath.TREATMENTS_TOPIC} element={<SingleTreatment />} />

      <Route path={routesPath.MEDICAL_OPINION} element={<MedicalOpinions />} />

      <Route path={routesPath.HOSPITALS} element={<HospitalList />} />
      <Route path={routesPath.HOSPITALS_ID} element={<IndividualHospital/>} />

      <Route path={routesPath.WELLNESS_TOURISM} element={<WellnessTourismPage/>} />
      <Route path={routesPath.WELLNESS_TOURISM_ID} element={<IndividualPage/>} />

      <Route path={routesPath.DOCTORS} element={<Doctor />} /> 
      <Route path={routesPath.DOCTORS_ID} element={<IndividualDoctor />} />

      <Route path={routesPath.contact} element={<Contact />} /> 

      <Route path={routesPath.join} element={<Join />} /> 

      <Route path={routesPath.blog} element={<Blog />} /> 
      <Route path={routesPath.blog_Id} element={<SingleBlog />} /> 
      
    </Routes>
  );
};

export default AppRoutes;
