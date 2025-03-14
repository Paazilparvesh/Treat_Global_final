import { useState } from "react";
import "./IndividualHospital.css";
// import Appoinment from "./Appoinment";
import image from "/src/assets/images/mayoClinic.jpg"
const tabData = {
  About: {
    Image: [{src: image, alt: "Main Hospital"}, {src: image, alt: "Side 1"}, {src: image, alt: "Side 2"}],
    title: "Quironsalud Hospital Group, Spain",
    address: "C/ Zurbarán 28, Madrid, Comunidad de, 28010, Spain",
    sections: [
      {
        heading: "About",
        content: [
            "About our Hospital :",
            "Quironsalud is the largest private hospital group in Spain and Europe, with over 60 years of experience in healthcare.",
            "We provide high-quality medical care to over 5 million patients annually, with a team of over 40,000 professionals across 58 hospitals and 524 operating theatres.",
            "Our network of hospitals offers a wide range of medical services, including oncology, cardiology, neurology, and more.",
            "We are committed to providing our patients with the best possible care, using the latest medical technology and treatments to ensure the best outcomes.",
            "Our team of highly qualified medical professionals is dedicated to providing personalized care to each patient, with a focus on safety, quality, and patient satisfaction.",
            "We are proud to be at the forefront of medical innovation, with a strong commitment to research and development to improve patient care and outcomes.",
            "Our goal is to provide our patients with the best possible care, in a safe and comfortable environment, to help them achieve the best possible health outcomes."
        ]
      },
      {
        heading: "Key Features",
        content: [
            "Women's Health Department",
            "Cardiology",
            "Heart Department",
            "Cosmetic Surgery",
            "General / Metabolic Surgery",
            "Thoracic Surgery",
            "Neuroscience Department",
            "Ophthalrnology",
            "Oncology Department",
            "Childrens Health Department",
            "Assisted Reproduction",
            "Locomotive System Department",
            "Urology",
            "Genetics",
            "Angiology and Vascular Surgery",
            "Dermatology",
            "Oral and Maxillofacial Surgery",
            "Pneumology"
        ]
      }
    ]
  },
  Specialization: {
    title: "Team & Specialisation",
    sections: [
      {
        heading: "Departments",
        content: [
          "Women’s Health Department",
          "Cardiology",
          "Heart Department",
          "Cosmetic Surgery",
          "General / Metabolic Surgery",
          "Thoracic Surgery",
          "Neuroscience Department"
        ]
      },
      {
        heading: "Expertise",
        content: [
          "Highly qualified medical professionals",
          "Comprehensive treatment across various specialities",
          "State-of-the-art medical technology"
        ]
      }
    ]
  },
  Infrastructure: {
    title: "Infrastructure",
    sections: [
      {
        heading: "Facilities",
        content: "Multilingual Staff and International Patient Support: The hospital boasts a diverse team fluent in multiple languages ensuring effective communication... Equipped with advanced medical infrastructure, the hospital features a 3-Tesla MRI scanner, Cyber-Knife VSI, da Vinci Surgical System, PET-CT scanner, and more."
      },
      {
        heading: "Key Highlights",
        content: [
          "Advanced diagnostic and treatment facilities",
          "World-class surgical equipment",
          "Comfortable and patient-friendly environment"
        ]
      }
    ]
  }
};

export default function IndividualHospital() {
  const [activeTab, setActiveTab] = useState("About");
  
  return (

    

    <div className="tabs-gallery-container">

        {/* Gallery */}
      <div className="gallery">
        <h1 className="hos-title">{tabData[activeTab].title}</h1>
        <h2 className="hos-address">{tabData[activeTab].rating} <span><image src="" alt=""></image>{tabData[activeTab].country}</span></h2>
        <div className="gallery-images">
            <div className="left-images">
                <img className="main-image" src= {image} alt="Main Hospital" />
            </div>
            <div className="overlay">View More</div>
            <div className="side-images">
                <div className="col1">
                    <img className="rounded-image" src={image} alt="Side 1" />
                    <img className="rounded-image" src={image} alt="Side 2" />
                </div>
                <div className="col2">
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
                <p className="dynamic-para">{section.content}</p>
              )}
              {index !== tabData[activeTab].sections.length - 1 && <hr />}
            </div>
          ))}
        </div>
        <div className="right-content">
        {/* <Appoinment /> */}
          {/* <div className="appointment-box">
            <h3>Request Appointment</h3>
            <p>Please provide your information, and one of our professionals will contact you.</p>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="E - Mail" />
              <input type="tel" placeholder="Number" />
              <select>
                <option>Country</option>
              </select>
              <input type="text" placeholder="City" />
              <input type="file" />
              <textarea placeholder="Describe Your Medical Issues"></textarea>
              <button>Book an appointment</button>
              <button>Chat Support</button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
}
