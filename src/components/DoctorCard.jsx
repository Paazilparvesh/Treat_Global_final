import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
// import doctorsData from "../data/constants";

// export default function DoctorCard({ name, field, experience, hospital, image, id }) {
export default function DoctorCard({doctor}) {

  // const doctorsInfo = [
  //   {
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
  //   },
    
  // ];

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      <div className="relative">
        <img
          src={doctor.image}
          alt={`${doctor.name}'s Photo`}
          className="w-full h-80 object-fill p-3 rounded-3xl"
        />
        <div className="absolute top-5 right-5 bg-white rounded-full shadow p-2 cursor-pointer">
          <Icon icon="mdi:linkedin" className="text-blue-600 w-5 h-5" />
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-figtree font-semibold text-gray-800">
          {doctor.name}
        </h2>
        <p className="text-gray-500 font-manrope">{doctor.field}</p>

        <div className="flex items-center space-x-4 my-2 text-gray-500">
          <div className="flex items-center">
            <Icon icon="mdi:pencil" className="w-5 h-5 mr-1 text-secondary" />
            <span>500+</span>
          </div>
          <div className="flex items-center">
            <Icon icon="mdi:briefcase" className="w-5 h-5 mr-1 text-secondary" />
            <span>{doctor.experience}+ Years</span>
          </div>
        </div>

        <p className="font-manrope text-gray-600">
          <span className="font-semibold text-gray-800 font-figtree">
            Consults At:
          </span>{" "}
          {doctor.hospital}
        </p>

        <Link to={`/doctor/${doctor.id}`}>
          <button className="w-full cursor-pointer bg-secondary text-white mt-4 py-2 rounded-3xl border hover:bg-transparent hover:border-primary hover:text-primary transition">
            Request Appointment
          </button>
        </Link>
      </div>
    </div>
  );
}
