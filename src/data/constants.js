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
import image10 from "/src/assets/images/hospital.webp";
// import hospital from "/src/assets/images/hospital.webp";

import routesPath from "../routes/routesPath";


export const subHeader = {name: 'Unlock the Magic Life with Treat Global -Your Gateway to Expert Care and Wellness.', link: 'Join As A Partner'}


const wellnessData = [
  {
    id: 1,
    title: "4 Day 200HR Breathwork Facilitator Training",
    rating: 4.96,
    reviews: 672,
    country: "USA",
    price: "₹15,000",
    discount: "-25%",
    duration: "2 days 3 nights",
    persons: "1-2 Person",
    images: ["/image1233.jpg", "/image1233.jpg", "/image1233.jpg"], // Replace with actual image URLs
    location : "USA",
    treatment : "prp"
  },
  {
    id: 2,
    title: "4 Day 200HR Breathwork Facilitator Training",
    rating: 4.96,
    reviews: 672,
    country: "India",
    price: "₹15,000",
    discount: "-25%",
    duration: "2 days 3 nights",
    persons: "1-2 Person",
    images: ["/image1233.jpg", "/image1233.jpg", "/image1233.jpg"], // Replace with actual image URLs
  },
  {
    id: 3,
    title: "4 Day 200HR Breathwork Facilitator Training",
    rating: 4.96,
    reviews: 672,
    country: "USA",
    price: "₹15,000",
    discount: "-25%",
    duration: "2 days 3 nights",
    persons: "1-2 Person",
    images: ["/image1233.jpg", "/image1233.jpg", "/image1233.jpg"], // Replace with actual image URLs
  },
  {
    id: 4,
    title: "4 Day 200HR Breathwork Facilitator Training",
    rating: 4.96,
    reviews: 672,
    country: "India",
    price: "₹15,000",
    discount: "-25%",
    duration: "2 days 3 nights",
    persons: "1-2 Person",
    images: ["/image1233.jpg", "/image1233.jpg", "/image1233.jpg"], // Replace with actual image URLs
  },
  // Add more hospital data objects as needed
];
export { wellnessData }


const hospitalData = [
      {
        id: 1,
        name: "Apollo Hospitals",
        location: "India, Chennai",
        rating: 4.96,
        reviews: 672,
        image: image10 ,
        treatment: "Oncology",
        country: "India",
        city: "Gurugram"

      },
      {
        id: 2,
        name: "Fortis Hospital",
        location: "India, Mumbai",
        rating: 4.85,
        reviews: 512,
        image: image10 ,
        treatment: "Oncology",
        country: "India",
        city: "Gurugram",
      },
      {
        id: 3,
        name: "Max Healthcare",
        location: "India, Delhi",
        rating: 4.75,
        reviews: 430,
        image: image10 ,
        treatment: "Oncology",
        country: "India",
        city: "Gurugram",
      },
      {
        id: 4,
        name: "Medanta Hospital",
        location: "India, Gurgaon",
        rating: 4.80,
        reviews: 390,
        image: image10 ,
        treatment: "Oncology",
        country: "India",
        city: "Gurugram",
      },
      {
        id: 5,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
        treatment: "Oncology",
        country: "India",
        city: "Gurugram",
      },
      {
        id: 6,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
        treatment: "Oncology",
        country: "India",
        city: "Gurugram",
      },
      {
        id: 7,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
        treatment: "Oncology",
        country: "India",
        city: "Gurugram",
      },
      {
        id: 8,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
        treatment: "Oncology",
        country: "India",
        city: "Gurugram",
      },
      {
        id: 9,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
        treatment: "Oncology",
        country: "India",
        city: "Gurugram",
      },
      {
        id: 10,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
        treatment: "Oncology",
        country: "India",
        city: "Gurugram",
      },  
      {
        id: 11,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
        treatment: "Oncology",
        country: "UK",
        city: "Gurugram",
      },  
      {
        id: 12,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
        treatment: "Oncology",
        country: "USA",
        city: "Gurugram",
      },
];
export { hospitalData };



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
    title:'Assessment:',
    des:'Begin with a personalized health assessment evaluation to identify specific needs and goals.'
  },
  {
    title:'Planning:',
    des:'Develop tailored strategies, including diet, exercise and fitness, stress management, and preventive care strategies.'
  },
  {
    title:'Implementation:',
    des:'Engage in structured programs, therapies, or activities designed to enhance overall well-being.'
  },
  {
    title:'Monitoring & Support:',
    des:'Regular check-ins and professional guidance ensure sustainable progress and long-term benefits.'
  },

]


export const faqs = {
  medicalOpinion: [
    {
      question: "What is the focus of health and wellness programs?",
      answer: "They aim to improve physical, mental, and emotional well-being through preventive care, lifestyle changes, and personalized treatments.",
    },
    {
      question: "Are these programs customized?",
      answer: "Yes, most programs are tailored to individual health needs, goals, and lifestyles for maximum effectiveness.",
    },
    {
      question: "How do I manage stress effectively?",
      answer: "Stress can be managed through mindfulness, deep breathing exercises, physical activity, and prioritizing self-care.",
    },
    {
      question: "Is professional guidance available?",
      answer: "Yes, certified professionals like doctors, nutritionists, and wellness coaches provide expert guidance.",
    },
    {
      question: "What is a health and wellness program?",
      answer: "A structured plan designed to improve physical, mental, and emotional well-being through lifestyle changes and preventive care.",
    },
    {
      question: "Who can benefit from a wellness program?",
      answer: "Anyone looking to enhance their overall health, manage stress, improve fitness, or adopt healthier habits.",
    },
    {
      question: "Are wellness programs personalized?",
      answer: "Yes, they are customized based on individual health needs, goals, and lifestyle preferences.",
    },
    {
      question: "How do I get started with a wellness program?",
      answer: "Begin with a health assessment to determine your specific needs, followed by a tailored plan from professionals.",
    },
    {
      question: "What aspects of health do wellness programs focus on?",
      answer: "They cover nutrition, physical activity, mental well-being, stress management, and preventive healthcare.",
    },
    {
      question: "Can a wellness program help with weight management?",
      answer: "Yes, personalized diet and fitness plans can support healthy weight loss and maintenance.",
    },
    {
      question: "How does stress management fit into wellness programs?",
      answer: "Techniques like mindfulness, meditation, breathing exercises, and physical activity help reduce stress levels.",
    },
    {
      question: "Is professional guidance available in these programs?",
      answer: "Yes, certified doctors, nutritionists, fitness trainers, and wellness coaches provide expert support.",
    },
    {
      question: "Are wellness programs suitable for all age groups?",
      answer: "Absolutely! Programs can be tailored for children, adults, and seniors based on their unique needs.",
    },
    {
      question: "Can I join a wellness program if I have a medical condition?",
      answer: "Yes, professionals design safe and effective programs considering your medical history and requirements.",
    },
    {
      question: "What role does nutrition play in wellness programs?",
      answer: "A balanced diet is essential for optimal health, supporting energy levels, immunity, and disease prevention.",
    },
    {
      question: "How can a wellness program improve mental health?",
      answer: "It incorporates activities like therapy, mindfulness, and relaxation techniques to support emotional well-being.",
    },
    {
      question: "Are these programs available online?",
      answer: "Yes, many wellness programs offer virtual consultations, online coaching, and digital resources.",
    },
    {
      question: "Is follow-up support provided in wellness programs?",
      answer: "Yes, regular check-ins and progress tracking ensure long-term success and sustained well-being.",
    },
  ],
  treatment: [
    {
      question: "What is root canal treatment?",
      answer: "It’s a procedure to save an infected or damaged tooth by removing the pulp, cleaning the root canals, and sealing them. It relieves pain and preserves your natural teeth.",
    },
    {
      question: "How long do dental implants last?",
      answer: "With proper care, dental implants can last a lifetime. They are a permanent solution for missing teeth, offering stability and natural-looking results.",
    },
    {
      question: "Is root canal treatment painful?",
      answer: "No, it’s performed under local anesthesia, making it a pain-free experience. Post-procedure discomfort is minimal and manageable.",
    },
    {
      question: "What is a mommy makeover?",
      answer: "It’s a combination of procedures like liposuction, tummy tuck, and breast lift to restore a woman’s pre-pregnancy body, enhancing confidence and appearance.",
    },
    {
      question: "How long does a facelift last?",
      answer: "A facelift can provide results for 10-15 years, depending on aging, lifestyle, and skincare. It tightens sagging skin and reduces wrinkles.",
    },
    {
      question: "What is a Brazilian Butt Lift (BBL)?",
      answer: "It’s a procedure that transfers fat from areas like the abdomen to the buttocks for a curvier, more lifted appearance without implants.",
    },
    {
      question: "What is laser treatment for acne scars?",
      answer: "It’s a non-invasive procedure that uses laser technology to reduce scar visibility, improve skin texture, and promote collagen production.",
    },
    {
      question: "How does fat injection for facial rejuvenation work?",
      answer: "Fat is harvested from your body, purified, and injected into the face to restore volume, reduce wrinkles, and enhance facial contours naturally.",
    },
    {
      question: "What is a French thread lift?",
      answer: "It’s a non-surgical procedure using dissolvable threads to lift and tighten sagging skin on the face and neck, providing a youthful appearance.",
    },
    {
      question: "What is a tummy tuck?",
      answer: "It’s a surgical procedure to remove excess skin and fat from the abdomen while tightening muscles for a flatter, firmer stomach.",
    },
    {
      question: "How long is recovery after liposuction?",
      answer: "Recovery typically takes 1-2 weeks, with full results visible after a few months. Compression garments are worn to aid healing.",
    },
    {
      question: "What is a thigh lift?",
      answer: "It’s a procedure to remove excess skin and fat from the thighs, creating a smoother, more toned appearance, ideal after weight loss.",
    },
    {
      question: "What is mastopexy?",
      answer: "Mastopexy, or breast lift, raises and reshapes sagging breasts by removing excess skin and tightening tissue for a youthful contour.",
    },
    {
      question: "Can breast implants be removed or replaced?",
      answer: "Yes, implants can be removed or replaced due to personal preference, medical reasons, or complications like rupture or capsular contracture.",
    },
    {
      question: "What is inverted nipple surgery?",
      answer: "It’s a procedure to correct nipples that retract inward, improving appearance and comfort, often performed under local anesthesia.",
    },
    {
      question: "What is rhinoplasty?",
      answer: "Rhinoplasty, or nose job, reshapes the nose to improve facial harmony, correct structural issues, or enhance breathing.",
    },
    {
      question: "What is blepharoplasty?",
      answer: "It’s eyelid surgery to remove excess skin, fat, and muscle from the eyelids, reducing puffiness and creating a more alert appearance.",
    },
    {
      question: "What is a brow lift?",
      answer: "It’s a procedure to lift sagging brows, smooth forehead wrinkles, and create a more youthful, refreshed facial expression.",
    },
    {
      question: "What is otoplasty?",
      answer: "Otoplasty, or ear surgery, corrects protruding or misshapen ears by reshaping cartilage and repositioning them closer to the head.",
    },
    {
      question: "What is a penile implant?",
      answer: "It’s a surgical solution for severe erectile dysfunction, involving a 3-piece device that allows for natural-looking, on-demand erections.",
    },
  ],
  doctors: [
    {
      question: "Can I select the specialist for my case?",
      answer: "Yes, you can choose from a list of available specialists.",
    },
    {
      question: "Are the doctors providing opinions board-certified?",
      answer: "Yes, all doctors are board-certified.",
    },
  ],
};


// export const  faqs = [
//   {
//     question: "Are medical opinions available 24/7?",
//     answer:
//       "A second opinion provides clarity, confirms a diagnosis, and helps you make informed decisions about your treatment plan. It can also offer alternative approaches to care for or validate your current course of action.",
//   },
//   {
//     question: "What is the expected response time for opinions?",
//     answer: "The expected response time is within 24 hours.",
//   },
//   {
//     question: "What kind of cases are eligible for medical opinions?",
//     answer: "Most medical cases are eligible for opinions.",
//   },
//   {
//     question: "Is there a fee for medical opinions?",
//     answer: "Fees may vary based on the complexity of the case.",
//   },
//   {
//     question: "Can I select the specialist for my case?",
//     answer: "Yes, you can select from a list of available specialists.",
//   },
//   {
//     question: "How accurate are the provided medical opinions?",
//     answer: "Our experts provide highly accurate opinions.",
//   },
//   {
//     question: "Is there a follow-up option after receiving the opinion?",
//     answer: "Yes, follow-ups are available.",
//   },
//   {
//     question: "How are opinions delivered (email, portal, etc.)?",
//     answer: "Opinions are delivered via email and portal.",
//   },
//   {
//     question: "Can I cancel a medical opinion request?",
//     answer: "Yes, you can cancel before the opinion is processed.",
//   },
//   {
//     question: "Are the doctors providing opinions board-certified?",
//     answer: "Yes, all doctors are board-certified.",
//   },
//   {
//     question: "Do I need to provide a medical history?",
//     answer: "Yes, providing medical history helps improve accuracy.",
//   },
//   {
//     question: "Is there a translation option for reports?",
//     answer: "Yes, translation is available upon request.",
//   },
//   {
//     question: "Can opinions help me decide on surgery?",
//     answer: "Yes, opinions can provide valuable insights for surgery.",
//   },
//   {
//     question: "Is telemedicine available for consultation?",
//     answer: "Yes, telemedicine is available for consultation.",
//   },
// ];


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


const doctorsData = [
  {
    id: 1,
    image: "/src/assets/images/Doctors/Dr. Tapan.jpeg",
    name: "Dr. Tapan Singh Chauhan",
    field: "Associate Consultant - Gastrointestinal and HPB Oncology '&' Surgical Oncology",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "India",
    city: "Gurugram",
  },
  {
    id: 2,
    image: "/src/assets/images/Doctors/Dr. Subodh.jpeg",
    name: "Dr. Subodh Chandra Pande",
    field: "Chief - Radiation Oncology & Co-Chief - Cyberknife Centre",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "India",
    city: "Gurugram",
  },
  {
    id: 3,
    image: "/src/assets/images/Doctors/Dr. Mukesh Patekar.jpeg",
    name: "Dr. Mukesh Patekar",
    field: "Unit Head - Medical Oncology",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "India",
    city: "Gurugram",
  },
  {
    id: 4,
    image: "/src/assets/images/Doctors/Dr. Parveen Yadav.jpeg",
    name: "Dr. Parveen Yadav",
    field: "Chief and Sr. Consultant - Robotic & Minimal Invasive Thoracic Oncosurgeon Thoracic Surgery and Surgical Oncology",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "India",
    city: "Gurugram",
  },
  {
    id: 5,
    image: "/src/assets/images/Doctors/Dr. Rupinder Gynae Onco.jpeg",
    name: "Dr. Rupinder Sekhon",
    field: "Chairperson - Gynaecological Oncology",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "India",
    city: "Gurugram",
  },
  {
    id: 6,
    image: "/src/assets/images/Doctors/Dr. Sanjeev.jpeg",
    name: " Dr. Sanjeev Srivastava",
    field: "Consultant - Neurosurgery",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "India",
    city: "Gurugram",
  },
  {
    id: 7,
    image: "/src/assets/images/Doctors/Dr. Sukirti.jpeg",
    name: "Dr. Sukri Gupta",
    field: "Consultant, BMT, Hematology",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "India",
    city: "Chennai",
  },
  {
    id: 8,
    image: "/src/assets/images/Doctors/Dr. Gaurav Dixit.jpeg",
    name: " Dr. Gaurav Dixit",
    field: "Unit Head - Haemato -Oncology (Unit II)",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "India",
    city: "Gurugram",
  },
  {
    id: 9,
    image: "/src/assets/images/Doctors/Dr. Shashidhar Shree.jpeg",
    name: "Dr. Shashidhar Shree Niwas",
    field: "Sr. Consultant - Nephrology",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "India",
    city: "Gurugram",
  },
  {
    id: 10,
    image: "/src/assets/images/Doctors/Dr. Aditya Gupta.jpeg",
    name: "Dr. Aditya Gupta",
    field: "Chief - Neurosurgery & CNS Radiosurgery &Co-Chief-Cyberknife Centre",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "India",
    city: "Gurugram",
  },
  {
    id: 11,
    image: "/src/assets/images/Doctors/Dr. Hitesh Garg.jpeg",
    name: "Dr. Hitesh Garg",
    field: "Head - Ortho Spine Surgery",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "India",
    city: "Gurugram",
  },
  {
    id: 12,
    image: "/src/assets/images/Doctors/Dr. Priya Tiwari.jpeg",
    name: "Dr. Priya Tiwari",
    field: "Unit Head - Medical Oncology (Unit II)",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "UK",
    city: "Gurugram",
  },
  {
    id: 13,
    image: "/src/assets/images/Doctors/Dr. Pawan Goyal.jpeg",
    name: "Dr. Pawan Goyal",
    field: "Sr. Consultant - Neurosurgery",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "UK",
    city: "Gurugram",
  },
  {
    id: 14,
    image: "/src/assets/images/Doctors/Dr. Manju Aggarwal.jpeg",
    name: "Dr. Manju Aggarwal",
    field: "Chief - Medical Services & Chairperson - Nephrology",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "UK",
    city: "Gurugram",
  },
  {
    id: 15,
    image: "/src/assets/images/Doctors/Dr. S jayalakshmi.jpeg",
    name: "Dr. S jayalakshmi",
    field: "Sr. Consultant - Oncology",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "UK",
    city: "Gurugram",
  },
  {
    id: 16,
    image: "/src/assets/images/Doctors/Dr. Deepak Jha.jpeg",
    name: "Dr. Deepak Jha",
    field: "Chief, Breast Surgery & Sr. Consultant, Surgical Oncology",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "USA",
    city: "Gurugram",
  },
  {
    id: 17,
    image: "/src/assets/images/Doctors/Dr. Devendra Yadav.jpeg",
    name: "Dr. Devendra Yadav",
    field: "Sr. Consultant - Orthopedics (Unit VI)",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "USA",
    city: "Gurugram",
  },
  {
    id: 18,
    image: "/src/assets/images/Doctors/Dr. Hazarika.jpeg",
    name: "Dr. Biswajyoti Hazarika",
    field: "Cheif - Head & Neck Surgery",
    experience: 3,
    hospital: "Artemis Hospital, Gurugram",
    treatment: "Oncology",
    country: "USA",
    city: "Gurugram",
  },
  
];
export { doctorsData }


const doctorInnerData = [
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
export { doctorInnerData }


const blogInnerData = {
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
export { blogInnerData }


const blogData = [
  {
    id: 1,
    image: image10  ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"],
    department: "Neurology",
    hospital: "Apollo Hospital",
    doctor: "Dr. John Doe"
  },
  {
    id: 2,
    image: image10  ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"],
    department: "Neurology",
    hospital: "Apollo Hospital",
    doctor: "Dr. John Doe"
  },
  {
    id: 3,
    image: image10 ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"],
    department: "Neurology",
    hospital: "Apollo Hospital",
    doctor: "Dr. John Doe"
  },
  {
    id: 4,
    image: image10  ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"],
    department: "Neurology",
    hospital: "Apollo Hospital",
    doctor: "Dr. John Doe"
  },
  {
    id: 5,
    image: image10 ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"],
    department: "Neurology",
    hospital: "Apollo Hospital",
    doctor: "Dr. John Doe"
  },
  {
    id: 6,
    image: image10 ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"],
    department: "Neurology",
    hospital: "Apollo Hospital",
    doctor: "Dr. John Doe"
  },
  {
    id: 7,
    image: image10  ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"],
    department: "Physiotherapy",
    hospital: "Apollo Hospital",
    doctor: "Dr. John Doe"
  },
  {
    id: 8,
    image: image10  ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"],
    department: "Physiotherapy",
    hospital: "Apollo Hospital",
    doctor: "Dr. John Doe"
  },
  {
    id: 9,
    image: image10  ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"],
    department: "Physiotherapy",
    hospital: "Apollo Hospital",
    doctor: "Dr. John Doe"
  },
  {
    id: 10,
    image: image10  ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"],
    department: "Cardiology",
    hospital: "Apollo Hospital",
    doctor: "Dr. John Doe"
  },
  {
    id: 11,
    image: image10  ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"],
    department: "Cardiology",
    hospital: "Apollo Hospital",
    doctor: "Dr. John Doe"
  },
  {
    id: 12,
    image: image10 ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"],
    department: "Cardiology",
    hospital: "Apollo Hospital",
    doctor: "Dr. John Doe"
  },
];
export { blogData }