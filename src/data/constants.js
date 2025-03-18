import blueTreat from '../assets/svg/blueTreatImg.svg'
import darkTreat from '../assets/svg/darkTreatImg.svg'
import greenTreat from '../assets/svg/greenTreatImg.svg'
import skyTreat from '../assets/svg/skyTreatImg.svg'
import allergy from '../assets/svg/allergy.svg'
import Anesthesiology from '../assets/svg/anesthesiology.svg'
import bariatric from '../assets/svg/bariatric.svg'
import cardiac from '../assets/svg/cardiac.svg'
import cardiology from '../assets/svg/cardiology.svg'
import cosmetic from '../assets/svg/cosmetic.svg'
import critical from '../assets/svg/critical.svg'
import dentistry from '../assets/svg/dentistry.svg'
import ear from '../assets/svg/ear.svg'
import gastroenterology from '../assets/svg/gastroenterology.svg'
import infertility from '../assets/svg/infertility.svg'
import pulmonology from '../assets/svg/pulmonology.svg'
import dental from '../assets/svg/dental.svg'
import hair from '../assets/svg/hair.svg'
import plastic from '../assets/svg/plastic.svg'
import root from '../assets/svg/root.svg'
import implant from '../assets/svg/implant.svg'
import single_treatment from "../assets/images/single-treatment.webp"
import dr from "../assets/images/Dr. Hitesh.png";

import routesPath from "../routes/routesPath";


export const subHeader = {name: 'Unlock the Magic Life with Treat Global -Your Gateway to Expert Care and Wellness.', link: 'Join As A Partner'}


export const navbar = [
    {name: 'Medical Opinion', path: `${routesPath.MEDICAL_OPINION}`},
    {name: 'Treatments', path: `${routesPath.TREATMENTS}`},
    // {name: 'Transplant', path: `${routesPath.TRANSPLANT}`},
    {name: 'Wellness Tourism', path: `${routesPath.WELLNESS_TOURISM}`},
    {name: 'Hospitals', path: `${routesPath.HOSPITALS}`},
    {name: 'Doctors', path: `${routesPath.DOCTORS}`},
    {name: 'Blogs', path: `${routesPath.blog}`},
];

export const lang = [
    { value: "EN", label: "English" },
    { value: "FR", label: "Français" },
    { value: "ES", label: "Español" },
    { value: "DE", label: "Deutsch" },
];

export const footerContents = {
  logo: 'images/treatGlobalLogo.png', // Replace with your logo path
  description: 'Treat Global connects patients to global healthcare options, expert consultations, and tailored medical tourism packages, ensuring a seamless and transparent experience for all.',
  socialLinks: [
    { name: 'LinkedIn', url: 'https://linkedin.com', iconClass: 'fab fa-linkedin' },
    { name: 'YouTube', url: 'https://youtube.com', iconClass: 'fab fa-youtube' },
    { name: 'Facebook', url: 'https://facebook.com', iconClass: 'fab fa-facebook' },
    { name: 'Twitter', url: 'https://twitter.com', iconClass: 'fab fa-twitter' },
    { name: 'Instagram', url: 'https://instagram.com', iconClass: 'fab fa-instagram' },
  ],

  wellnessTourism: [
    { name: 'Yoga Retreats', path: `${routesPath.YOGA_RETREATS}` },
    { name: 'Wellness Retreats', path: `${routesPath.WELLNESS_RETREATS}` },
    { name: 'Yoga Teacher Training', path: `${routesPath.YOGA_TEACHER_TRAINING}` },
    { name: 'Medical Health Wellness', path: `${routesPath.MEDICAL_HEALTH_WELLNESS}` },
    { name: 'Detox Wellness', path: `${routesPath.DETOX_WELLNESS}` },
    { name: 'Spiritual Retreats', path: `${routesPath.SPIRITUAL_RETREATS}` }
  ],
  exploreTreatGlobal: [
    { name: 'Treatments', path: `${routesPath.TREATMENTS}` },
    { name: 'Medical Opinion', path: `${routesPath.MEDICAL_OPINION}` },
    { name: 'Wellness Tourism', path: `${routesPath.WELLNESS_TOURISM}` },
    { name: 'Doctors', path: `${routesPath.DOCTORS}` },
    { name: 'Dentals', path: `${routesPath.DENTALS}` },
    { name: 'Transplants', path: `${routesPath.TRANSPLANTS}` },
    { name: 'Join as Partner', path: `${routesPath.JOIN_AS_PARTNER}` }
  ],
  exploreHospitals: [
    { name: 'India', path: `${routesPath.HOSPITALS_INDIA}` },
    { name: 'USA', path: `${routesPath.HOSPITALS_USA}` },
    { name: 'Singapore', path: `${routesPath.HOSPITALS_SINGAPORE}` },
    { name: 'Thailand', path: `${routesPath.HOSPITALS_THAILAND}` },
    { name: 'UAE', path: `${routesPath.HOSPITALS_UAE}` }
  ],
  exploreTreatGlobal1: [
    { name: 'Treatments', path: `${routesPath.TREATMENTS}` },
    { name: 'Medical Opinion', path: `${routesPath.MEDICAL_OPINION}` },
    { name: 'Wellness Tourism', path: `${routesPath.WELLNESS_TOURISM}` },
    { name: 'Hospitals', path: `${routesPath.HOSPITALS}` },
    { name: 'Doctors', path: `${routesPath.DOCTORS}` },
    { name: 'Dentals', path: `${routesPath.DENTALS}` },
    { name: 'Transplants', path: `${routesPath.TRANSPLANTS}` },
    { name: 'Join as Partner', path: `${routesPath.JOIN_AS_PARTNER}` }
  ],
};



export const homeTreatments = [
  {
   image:blueTreat,
    title:'Medical Treatments',
    des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
    btnLink:'Know More',
    bgColor:'#ECF2FF'
  },
  {
     image:greenTreat,
    title:'Aesthetic Treatments',
    des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
    btnLink:'Know More',
     bgColor:'#E4FFEA'
  },
  {
    image:skyTreat,
    title:'Dental Treatments',
    des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
    btnLink:'Know More',
     bgColor:'#E0F7FF'
  },
  {
    image:darkTreat,
    title:'Transplant Treatments',
    des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
    btnLink:'Know More',
    bgColor:'#EDF2FB'
  },
]

export const treatment = [
  {heading:"Medical Treatments" , data:[
    {
     image:allergy,
      title:'Allergy & Immunology',
      des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
      btnLink:'Know More',
      bgColor:'#ECF2FF'
    },
    {
       image:Anesthesiology,
      title:'Anesthesiology',
      des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
      btnLink:'Know More',
       bgColor:'#E4FFEA'
    },
    {
      image:bariatric,
      title:'Bariatric Surgery',
      des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
      btnLink:'Know More',
       bgColor:'#E0F7FF'
    },
    {
      image:cardiac,
      title:'Cardiac Surgery',
      des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
      btnLink:'Know More',
      bgColor:'#EDF2FB'
    },
    {
      image:cardiology,
      title:'Cardiology',
      des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
      btnLink:'Know More',
      bgColor:'#ECF2FF'
    },
    {
      image:cosmetic,
      title:'Cosmetic & Plastic ',
      des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
      btnLink:'Know More',
      bgColor:'#E4FFEA'
    },
    {
      image:critical,
      title:'Critical Care Medicine',
      des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
      btnLink:'Know More',
      bgColor:'#E0F7FF'
    },
    {
      image:dentistry,
      title:'Dentistry',
      des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
      btnLink:'Know More',
      bgColor:'#EDF2FB'
    },
    {
      image:ear,
      title:'Ear, Nose, & Throat',
      des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
      btnLink:'Know More',
      bgColor:'#ECF2FF'
    },
    {
      image:gastroenterology,
      title:'Gastroenterology',
      des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
      btnLink:'Know More',
      bgColor:'#E4FFEA'
    },
    {
      image:infertility,
      title:'Infertility & IVF ',
      des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
      btnLink:'Know More',
      bgColor:'#E0F7FF'
    },
    {
      image:pulmonology,
      title:'Pulmonology',
      des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
      btnLink:'Know More',
      bgColor:'#EDF2FB'
    },
  ]},
  {heading:"Aesthetic Treatments",
    data:[  {
      image:dental,
       title:'Dental',
       des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
       btnLink:'Know More',
       bgColor:'#ECF2FF'
     },
     {
        image:hair,
       title:'Hair Transplant',
       des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
       btnLink:'Know More',
        bgColor:'#E4FFEA'
     },
     {
       image:plastic,
       title:'Plastic & Aesthetic',
       des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
       btnLink:'Know More',
        bgColor:'#E0F7FF'
     },
     ]
  },

  {heading:"Dental Treatments",
    data:[  {
      image:root,
       title:'Root Canal ',
       des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
       btnLink:'Know More',
       bgColor:'#ECF2FF'
     },
     {
        image:implant,
       title:'Dental Implant',
       des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
       btnLink:'Know More',
        bgColor:'#E4FFEA'
     },
     ]
  },  {heading:"Transplant Treatments",
    data:[ {
      image:allergy,
       title:'Allergy & Immunology',
       des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
       btnLink:'Know More',
       bgColor:'#ECF2FF'
     },
     {
        image:Anesthesiology,
       title:'Anesthesiology',
       des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
       btnLink:'Know More',
        bgColor:'#E4FFEA'
     },
     {
       image:bariatric,
       title:'Bariatric Surgery',
       des:'Explore advanced, expert-led medical treatments tailored to your health needs, ensuring quality care and effective results.',
       btnLink:'Know More',
        bgColor:'#E0F7FF'
     },
     ]
  },
]
export const headSubHead = {
  relatedTourPack : {head: 'Related', subHead: 'Tour Pack'},
}

export const homeWhyChooseUS = [
  {
    title:'24/7 Support: Always There for You  ',
    des:'Your health matters anytime—our support team is here for you, day and night. '
  },
  {
    title:'Join a Network of 500+ Top Hospitals ',
    des:'Access world-class care with our extensive network of top-tier hospitals. '
  },
  {
    title:'Visa Assistance ',
    des:'Travel trouble-free with our expert visa support for medical needs. '
  },
  {
    title:'Experience Care from Expert Doctors ',
    des:'Get advice from the best doctors in the field—experienced, certified, and trusted. '
  },

]
export const joinUsData = [
  {
    title:'Register   ',
    des:'Sign up and create your account by providing the necessary details. Get started on your journey with ease. '
  },
  {
    title:'Refer ',
    des:'Share your unique referral link with friends and contacts. The more you refer, the more you earn. '
  },
  {
    title:'Get Updated ',
    des:' Stay informed about your referral status and approvals. Receive timely notifications on your progress. '
  },
  {
    title:'Payout ',
    des:'nce approved, receive your earnings securely. Enjoy hassle-free withdrawals to your preferred payment method.'
  },

]
export const contactUsData = [
  {
    title:'Phone Number',
    des:'+1-888-296-6664'
  },
  {
    title:'Mail ID ',
    des:'info@treatglobal.com '
  },
  {
    title:'Location',
    des:' Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  '
  },


]
export const medicalsData = [
  {
    title:'Treatment Selection and document upload ',
    des:'User fills the form with their medical documents requesting a second opinion'
  },
  {
    title:'Make Payment ',
    des:'Complete your request by making the payment '
  },
  {
    title:'Document Assessment & Expert Review',
    des:'Our expert doctors will receive & evaluate your request '
  },
  {
    title:'Mail delivery of the report',
    des:'User will receive the comprehensive report along with treatment suggestion '
  },


]

export const  faqs = [
  {
    question: "Are medical opinions available 24/7?",
    answer:
      "A second opinion provides clarity, confirms a diagnosis, and helps you make informed decisions about your treatment plan. It can also offer alternative approaches to care for or validate your current course of action.",
  },
  {
    question: "What is the expected response time for opinions?",
    answer: "The expected response time is within 24 hours.",
  },
  {
    question: "What kind of cases are eligible for medical opinions?",
    answer: "Most medical cases are eligible for opinions.",
  },
  {
    question: "Is there a fee for medical opinions?",
    answer: "Fees may vary based on the complexity of the case.",
  },
  {
    question: "Can I select the specialist for my case?",
    answer: "Yes, you can select from a list of available specialists.",
  },
  {
    question: "How accurate are the provided medical opinions?",
    answer: "Our experts provide highly accurate opinions.",
  },
  {
    question: "Is there a follow-up option after receiving the opinion?",
    answer: "Yes, follow-ups are available.",
  },
  {
    question: "How are opinions delivered (email, portal, etc.)?",
    answer: "Opinions are delivered via email and portal.",
  },
  {
    question: "Can I cancel a medical opinion request?",
    answer: "Yes, you can cancel before the opinion is processed.",
  },
  {
    question: "Are the doctors providing opinions board-certified?",
    answer: "Yes, all doctors are board-certified.",
  },
  {
    question: "Do I need to provide a medical history?",
    answer: "Yes, providing medical history helps improve accuracy.",
  },
  {
    question: "Is there a translation option for reports?",
    answer: "Yes, translation is available upon request.",
  },
  {
    question: "Can opinions help me decide on surgery?",
    answer: "Yes, opinions can provide valuable insights for surgery.",
  },
  {
    question: "Is telemedicine available for consultation?",
    answer: "Yes, telemedicine is available for consultation.",
  },
];


export const singleTreatment = {
  heading: "Transforming Lives with Appendix Surgery : ",
  review: "4.96 (672 reviews & 90% value satisfaction rating)",
  desc: "A life-saving procedure that removes an inflamed appendix, relieving pain, preventing complications, and restoring health for a better quality of life.",
  overview: {
    title: "Overview",
    content: `Heart Valve Replacement cost in India
1. Heart valve replacement cost in India is around USD 6000, which varies depending upon various factors.
2. There is a 90% success rate of heart valve replacement treatment in India, which makes India one of the most preferred countries for it in the world.
3. Some of the experienced doctors for heart valve replacement in India are Dr YK Mishra, Dr ZS Meharwal, Dr. Naresh Trehan, and Dr. Devi Shetty.
4. Some of the best hospitals are the Manipal Hospital, Medanta Hospital, Fortis Escorts Heart Institute & Research Center, and Narayana Hospital.
5.It is a six to eight days procedure in the hospital, and patients need to stay for almost ten days in India.`
  },
  heartValveReplacement: {
    title: "About Heart Valve Replacement",
    content: `The heart has four valves to keep the blood flow in the right direction. These are the mitral valve, tricuspid valve, pulmonary valve, and aortic valve. Each valve closes and opens during every heartbeat.
The process of replacing the natural diseased and damaged heart valve with a prosthetic valve to mimic the exact functioning of the valve is known as heart valve replacement. A prosthetic valve is designed to aid normal opening and closing motion, exactly like the natural valve. The cause of damage can be a result of calcium build up in the valve due to aging or other factors. Mostly, open-heart surgery is the option for heart valve replacement.`
  },
  image:single_treatment
};


export const doctorsData = [
  {
    doctorImage: "src/assets/images/Doctors/Dr. Tapan.jpeg",
    doctorName: "Dr. Tapan",
    doctorField: "Associate Consultant - Gastrointestinal and HPB Oncology '&' Surgical Oncology",
    doctorExperience: 3,
    doctorHospital: "Apollo Hospital"
  },
  {
    doctorImage: "../assets/images/doctor-2.webp",
    doctorName: "Dr. John Doe",
    doctorField: "Cardiologist",
    doctorExperience: 10,
    doctorHospital: "Max Hospital"
  },
  // Add more doctor data here
];


export const doctorData = [
  {
    name: "Dr. Hitesh Garg",
    imageUrl:dr,
    position: "Head Ortho Spine Surgery",
    consultantAt: "Head Ortho Spine Surgery",
    about: "An internationally famous and innovative laparoscopic surgeon is Dr. Pradeep Chowbey. He has taught more than 20,000 doctors from all over the world in minimally invasive procedures and has over 45 years of surgical expertise. He was one of the first surgeons in North India to conduct a laparoscopic cholecystectomy, as well as the first in the Asia Pacific to use MAFT (Minimally Invasive Fistula Technology). He has charted his professional path with the primary goal of advancing minimal access, metabolic, and bariatric surgery throughout India and the Asian region.",
    surgeries: "500+",
    experience: "3 Years",
    qualifications: [
      "FMAS", "FALS", "FIAGES", "FACS", "FICS", 
      "FAIS", "FIMSA", "FRCS (London)", "MNAMS", 
      "MBBS, MS (Jabalpur Medical College)"
    ],
    specialties: [
      "Laparoscopic / Minimal Access Surgery", 
      "Bariatric Surgery / Metabolic", 
      "Laparoscopic Surgeon", 
      "Endoscopic & Bariatric Surgery"
    ],
    interests: [
      "Obesity Surgery", "Appendix", "Gallbladder Stones", 
      "Scarless Neck Surgery", "Thyroid & Parathyroid", 
      "Piles, Fissure, Anal Fistula", "Hernia", 
      "Endoscopic Surgery"
    ]
  }
];


export const blogData = {
  title: "Comprehensive Guide to Medical, Aesthetic, Wellness, Dental, and Transplant Treatments",
  hospital: "Apollo Hospital",
  date: "09-01-2025",
  sections: [
    {
      heading: "Introduction",
      content:
        "It is such an important subject because today’s society is fast-changing, and worrying about our health is more critical than ever. Whether you need a medical condition treated with the help of a doctor, have decided to focus on health improvement strategies, require dental work, want a beauty boost, or need an organ transplant, it is all available. Here, we look at the available choices to help you make the right decisions concerning your lifestyle and general health.",
    },
    {
      heading: "Your Medical Treatment Journey",
      content:
        "Today there are treatment options for a great number of health problems in the sphere of modern medicine. Like angioplasty or bypass, from essential procedures such as heart surgery to revolutionary clinical treatments such as chemotherapy and immunotherapy, medical novelties are recreating possibilities. Other medical services act as a balancing component to make certain every person receives adequate medical care.",
    },
    {
      heading: "The Aesthetics Hub",
      content:
        "Cosmetic treatments are aimed at making people look as good as they can and feel the same. For those who are more inclined towards using non-surgical methods such as injections like Botox and fillers or going under the surgery knife, liposuction, and rhinoplasty, aesthetic medicine has the answer.",
    },
    {
      heading: "Your Path to Wellness",
      content:
        "Wellness is all about maintaining the health consciousness of mind and body as well as the spirit. Yoga, meditation, and stress management sessions offer comprehensive therapy, while weight management and diet therapies promote a healthy lifestyle.",
    },
    {
      heading: "Improve Your Smile",
      content:
        "A bright smile is regularly a sign of excellent health. Proper oral care is often worth identifying to advance good health.",
    },
    {
      heading: "Hope Through Transplant",
      content:
        "Transplants stand for the highest level of medical advancement and operation. Operations on cancers, liver, heart, and even kidneys give new life to the patients suffering from life-threatening diseases.",
    },
    {
      heading: "Making Informed Medical Decisions",
      content:
        "Knowing your needs and speaking with reliable medical professionals are the first steps in choosing the best course of action. Every treatment, whether in wellness-centered, medicine, or aesthetics, has special advantages suited to certain situations.",
    },
    {
      heading: "Conclusion",
      content:
        "With TreatGlobal's trusted second opinion service, the journey to health and happiness is within your reach. Take the first step toward a healthier, more fulfilled life with confidence—because your health deserves the best!",
    },
  ],
};
