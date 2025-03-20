import { useState } from "react";
import "./IndividualHospital.css";
import Appoinment from "/src/components/Appoiment.jsx";
import image from "/src/assets/images/mayoClinic.jpg"
import FAQ from "/src/components/Faq";
import { faqs } from "/src/data/constants";
import Comp1 from "../../../components/ReusableBlog";

const tabData = {
  About: {
    Image: [{src: image, alt: "Main Hospital"}, {src: image, alt: "Side 1"}, {src: image, alt: "Side 2"}],
    title: "Quironsalud Hospital Group",
    rating: "4.96",
    reviews: "672",
    location: "USA",

    sections: [
      {
        // heading: "About",
        content: [
            "Our hospital offers comprehensive healthcare services, including 24/7 emergency care, advanced diagnostic imaging, state-of-the-art surgical facilities, specialized cancer treatment, and personalized rehabilitation programs. Our team of experienced medical professionals provides compassionate, patient-centered care, ensuring the highest standards of safety and comfort.We are committed to continuous improvement, utilizing the latest medical technologies to deliver exceptional healthcare outcomes. "
        ]
      },
      // {
      //   heading: "Key Features",
      //   content: [
      //       "Women's Health Department",
      //       "Cardiology",
      //       "Heart Department",
      //       "Cosmetic Surgery",
      //       "General / Metabolic Surgery",
      //       "Thoracic Surgery",
      //       "Neuroscience Department",
      //       "Ophthalrnology",
      //       "Oncology Department",
      //       "Childrens Health Department",
      //       "Assisted Reproduction",
      //       "Locomotive System Department",
      //       "Urology",
      //       "Genetics",
      //       "Angiology and Vascular Surgery",
      //       "Dermatology",
      //       "Oral and Maxillofacial Surgery",
      //       "Pneumology"
      //   ]
      // }
    ]
  },
  Specialization: {
    title: "Team & Specialisation",
    sections: [
      {
        // heading: "Departments",
        content: [
          "Our hospital's multidisciplinary team comprises experienced physicians, the best nurses, and allied health professionals who collaborate to deliver comprehensive patient care. The topmost Specializations include cardiology, neurology, oncology, orthopedics, and pediatrics, ensuring tailored treatments for diverse medical needs. This collaborative approach enhances patient outcomes and safety. "
        ]
      },
      // {
      //   heading: "Expertise",
      //   content: [
      //     "Highly qualified medical professionals",
      //     "Comprehensive treatment across various specialities",
      //     "State-of-the-art medical technology"
      //   ]
      // }
    ]
  },
  Infrastructure: {
    title: "Infrastructure",
    sections: [
      {
        // heading: "Facilities",
        content: ["Our hospital's infrastructure is meticulously designed to provide top-tier healthcare services, ensuring patient safety, comfort, and optimal medical outcomes.",
                  "A hospital's infrastructure includes:",

                  "Medical Facilities:",
                  "Hospitals, clinics, and specialized centers are equipped to provide patient care at Treat global in India.",

                  "Healthcare Workforce:",
                  "Best Doctors, nurses, and support staff who deliver medical services.",

                  "Technology Systems:",
                  "Top Electronic health records and telemedicine platforms that manage patient information and facilitate remote consultations."
                 ]
      },
      {
        heading: "A hospital's infrastructure includes:",
        content: [
          "Medical Facilities:",
          "Hospitals, clinics, and specialized centers are equipped to provide patient care at Treat global in India.",

          "Healthcare Workforce:",
          "Best Doctors, nurses, and support staff who deliver medical services.",

          "Technology Systems:",
          "Top Electronic health records and telemedicine platforms that manage patient information and facilitate remote consultations."
        ]
      }
    ]
  }
};

export default function IndividualHospital() {
  const [activeTab, setActiveTab] = useState("About");
  
  return (

    

    <div className="tabs-gallery-container">

      <div className="flex justify-between items-center">
      {/* Left Section: Title & Details */}
      <div className="w-full mx-10 mt-20">
        <h1 className="text-5xl font-bold ">{tabData[activeTab].title}</h1>
        <div className="flex items-center text-gray-600 mt-1">
          <span className="ml-3 flex items-center">
            <img src="/src/assets/svg/Vector.svg" alt="Location" className="w-4 h-4 mr-1" />
          </span>
          <span className=" text-lg font-semibold">{tabData[activeTab].rating}</span>
          <span className="text-sm ml-1">({tabData[activeTab].reviews} reviews)</span>

          <span className="ml-3 flex items-center">
            <img src="\src\assets\svg\location.svg" alt="Location" className="w-4 h-4 mr-1" />
          </span>
          <span className=" text-lg font-semibold">{tabData[activeTab].location}</span>
        </div>
        
      </div>

      {/* Right Section: Share Button */}
      <div className="text-black text-2xl mt-15 flex items-center cursor-pointer mr-15">
        <img src="\src\assets\svg\share.svg" alt="Share" className="w-5 h-5 mr-1" />
        <span>Share</span>
      </div>
      </div>

        {/* Gallery */}
      <div className="gallery">
        
        <div className="gallery-images">
            <div className="left-images">
                <img className="main-image" src= {image} alt="Main Hospital" />
            </div>
           
            <div className="side-images">
                <div className="col1">
                    <img className="rounded-image" src={image} alt="Side 1" />
                    <img className="rounded-image" src={image} alt="Side 2" />
                </div>
                <div className="col2">
                  <div className="overlayBox">View More</div>
                  <img className="rounded-image" src={image} alt="Side 1" />
                  <img className="rounded-image" src={image} alt="Side 2" />
                </div>
                
            </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {Object.keys(tabData).map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="content-container">
        <div className="left-content">
          <div className="diff-back">
            <h2 className="hospital-title">{tabData[activeTab].title}</h2>
            {tabData[activeTab].address && <p>{tabData[activeTab].address}</p>}
          </div>
          
          {tabData[activeTab].sections.map((section, index) => (
            <div key={index} className="section">
              <h3 className="dynamic-head">{section.heading}</h3>
              {Array.isArray(section.content) ? (
                <ul>
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="dynamic-para ">{section.content}</p>
              )}
              {index !== tabData[activeTab].sections.length - 1 && <hr />}
            </div>
          ))}
        </div>
        <div className="right-content">
        <div className="bg-[#005897] text-white rounded-t-lg p-6">
            <h1 className="font-figtree font-bold text-center text-xl md:text-2xl lg:text-3xl">
              Request Appointment
            </h1>
            <p className="font-manrope mt-2 text-center w-90 mx-auto text-[18px]">
              Please provide your information, and one of our professionals will contact you
            </p>
          </div>
          <Appoinment/>
        </div>
      </div>

      <div>
        <Comp1/>
      </div>

      <div className="mt-20">
        <FAQ faqs={faqs} />
      </div>

    </div>
  );
}


