export type CancerSpecialty = {
    cancer_label: string;
    cancer_description: string;
    cancer_path_url: string;
}

export const SIDEMENU = [
    {
        title: 'Home',
        icon: 'fa fa-home'
    },
    {
        title: 'Cases',
        icon: 'fa fa-file'
    },
    {
        title: 'Messages',
        icon: 'fa fa-envelope'
    },
    {
        title: 'Account',
        icon: 'fa fa-user'
    },

]

export const MSKCC_MENU: any = {
    'home': 'https://mskcc.icliniq.com/',
    'about us': [
        {
            'about msk': 'https://mskcc.icliniq.com/about-mskcc-india'
        },
        {
            'cancer specialities': 'https://mskcc.icliniq.com/#cancer-specialities'
        },
        {
            'msk doctors': 'https://mskcc.icliniq.com/#msk-doctors'
        },
        {
            'india center team': 'https://mskcc.icliniq.com/mskcc-india-team'
        },
        {
            'contact us': 'https://mskcc.icliniq.com/contact-us'
        },
    ],
    'our services': [
        { 
            'remote second opinions': 'https://mskcc.icliniq.com/mskcc-india-services/remote-second-opinion' 
        },
        { 
            'care at msk in new york': 'https://mskcc.icliniq.com/mskcc-india-services/travel-guide-to-mskcc-new-york' 
        }
    ],
    'frequently asked questions': 'https://mskcc.icliniq.com/mskcc-india-services/mskcc-patient-faqs',
    'login': [
        { 'patient login': 'https://mskcc.icliniq.com/users/signin' },
        { 'msk physician login': 'https://mskcc.icliniq.com/sso/web/index.php?sso' },
        { 'msk admin login': 'https://mskcc.icliniq.com/sso/web/index.php?sso' },
        { 'msk india admin login': 'https://mskcc.icliniq.com/h/admin' }
    ],
}


export const SPECIALITIES = [
    {
        'Benign Blood Disorders': 'https://mskcc.icliniq.com/cancer-care/types/benign-blood-disorders',
        'Brain Tumors and Cancers': 'https://mskcc.icliniq.com/cancer-care/types/brain-tumor-and-cancer',
        'Breast Cancer': 'https://mskcc.icliniq.com/cancer-care/types/breast-cancer',
        'Colorectal Cancer': 'https://mskcc.icliniq.com/cancer-care/types/colorectal-cancer',
        'Gastric and Esophageal Cancer': 'https://mskcc.icliniq.com/cancer-care/types/gastric-and-esophageal-cancer',
        'Head & Neck Cancer (Oral Cancer)': 'https://mskcc.icliniq.com/cancer-care/types/head-and-neck-cancer',
        'Kidney Cancer (Renal Cell Cancer)': 'https://mskcc.icliniq.com/cancer-care/types/kidney-cancer',
        'Leukemia': 'https://mskcc.icliniq.com/cancer-care/types/leukemia',
        'Liver, Biliary, and Pancreatic Cancer': 'https://mskcc.icliniq.com/cancer-care/types/liver-biliary-and-pancreatic-cancer',
        'Lung Cancer': 'https://mskcc.icliniq.com/cancer-care/types/lung-cancer',
        'Lymphoma': 'https://mskcc.icliniq.com/cancer-care/types/lymphoma',
        'Multiple Myeloma': 'https://mskcc.icliniq.com/cancer-care/types/multiple-myeloma',
        'Ovarian, Cervical, and Endometrial Cancer': 'https://mskcc.icliniq.com/cancer-care/types/ovarian-cervical-and-endometrial-cancer',
        'Pediatric (Childhood) Cancers': 'https://mskcc.icliniq.com/cancer-care/types/pediatric-cancers',
        'Prostate Cancer': 'https://mskcc.icliniq.com/cancer-care/types/prostate-cancer',
        'Sarcoma': 'https://mskcc.icliniq.com/cancer-care/types/sarcoma',
        'View Other Types of Cancer': 'https://mskcc.icliniq.com/cancer-care/types/other-common-types-of-cancer'
    }

]


export const MSK_DOCTORS = [
    {
        'drName': 'Sir Dr. Murray Brennan',
        'specialist': 'surgical oncologist',
        'doctorPage': 'https://mskcc.icliniq.com/cancer-care/doctors/murray-brennan',
        'drImg': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-3.jpg'
    },
    {
        'drName': 'Dr. Mrinal Gounder',
        'specialist': 'medical oncologist',
        'doctorPage': 'https://mskcc.icliniq.com/cancer-care/doctors/murray-brennan',
        'drImg': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-7.jpg'
    },
    {
        'drName': 'Dr. Lisa DeAngelis',
        'specialist': 'neuro-oncologist',
        'doctorPage': 'https://mskcc.icliniq.com/cancer-care/doctors/murray-brennan',
        'drImg': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-1.jpg'
    },
    {
        'drName': 'Dr. Monica Morrow',
        'specialist': 'surgical oncologist',
        'doctorPage': 'https://mskcc.icliniq.com/cancer-care/doctors/murray-brennan',
        'drImg': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-6.jpg'
    },
    {
        'drName': 'Dr. Jatin Shah',
        'specialist': 'surgical oncologist',
        'doctorPage': 'https://mskcc.icliniq.com/cancer-care/doctors/murray-brennan',
        'drImg': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-2.jpg'
    },
    {
        'drName': 'Dr. Christopher Crane',
        'specialist': 'radiation oncologist',
        'doctorPage': 'https://mskcc.icliniq.com/cancer-care/doctors/murray-brennan',
        'drImg': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-4.jpg'
    },
    {
        'drName': 'Dr. Andrew Seidman',
        'specialist': 'medical oncologist',
        'doctorPage': 'https://mskcc.icliniq.com/cancer-care/doctors/murray-brennan',
        'drImg': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-8.jpg'
    },
    {
        'drName': 'Dr. Sergio Giralt',
        'specialist': 'hematologic oncologist',
        'doctorPage': 'https://mskcc.icliniq.com/cancer-care/doctors/murray-brennan',
        'drImg': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-5.jpg'
    },
    {
        'drName': 'Dr. James A. Eastham',
        'specialist': 'surgical oncologist',
        'doctorPage': 'https://mskcc.icliniq.com/cancer-care/doctors/murray-brennan',
        'drImg': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/james-eastham-mskcc.jpg'
    }
]

export const CANCER_SPECIALTIES: CancerSpecialty[] = [
    {
        cancer_label: "Head & Neck Cancer (Oral Cancer)",
        cancer_description: "Head and neck cancers include cancers that start in several areas of the head and throat, such as the sinuses, tongue, gums, roof of the mouth, larynx, lips, and salivary glands, but not including cancers of the brain and eyes. The skill and experience of MSK's surgeons in head and neck surgery are unprecedented...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/head-and-neck-cancer"
    },
    {
        cancer_label: "Ovarian, Cervical, and Endometrial Cancer",
        cancer_description: "The type of cancer where the cells in the ovaries, cervix, and endometrium (the inner lining of the uterus) multiply and grow out of control are called ovarian, cervical, and endometrial cancer, respectively. MSK's surgeons are continually working and leading the way to improve surgical methods...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/ovarian-cervical-and-endometrial-cancer"
    },
    {
        cancer_label: "Breast Cancer",
        cancer_description: "In breast cancer, the cells in the breast grow out of control. MSK is a leader in pioneering new ways to treat breast cancer, which has resulted in optimal outcomes for the 4,500 new breast cancer patients that consult each year. Most of the latest and effective breast cancer treatments developed in the last ten years were studied...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/breast-cancer"
    },
    {
        cancer_label: "Lung Cancer",
        cancer_description: "Lung cancer, the abnormal growth of cells in the lungs and bronchi (the airways that carry air into the lungs), is amongst the most commonly diagnosed cancers. Surgeons at MSK perform more than 1,200 surgeries for lung cancer each year, with one of the US's lowest complication rates. Using MSK-IMPACT, doctors match...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/lung-cancer"
    },
    {
        cancer_label: "Gastric and Esophageal Cancer",
        cancer_description: "Cancer that originates or develops in the lining of the stomach is called gastric or stomach cancer. And esophageal cancer develops inside the 10-inch hollow tube that carries food to the stomach called the esophagus. Patients suffering from Barrett's esophagus...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/gastric-and-esophageal-cancer"
    },
    {
        cancer_label: "Liver, Biliary, and Pancreatic Cancer",
        cancer_description: "Cancer that originates or develops in the lining of the stomach is called gastric or stomach cancer. And esophageal cancer develops inside the 10-inch hollow tube that carries food to the stomach called the esophagus. Patients suffering from Barrett's esophagus...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/liver-biliary-and-pancreatic-cancer"
    },
    {
        cancer_label: "Colorectal Cancer",
        cancer_description: "Cancer that begins in the inner lining of the large intestine (colon) or rectum present in the lower portion of the digestive tract is called colorectal cancer. Surgeons and medical oncologists at MSK pioneered the method of using chemoradiation and chemotherapy...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/colorectal-cancer"
    },
    {
        cancer_label: "Kidney Cancer (Renal Cell Cancer)",
        cancer_description: "Kidney cancer (renal cell cancer) is a cancerous tumor that develops in the kidneys, the two organs that are present on each side of your spine in the torso. Skilled surgeons at MSK offer a surgical cure to patients whose cancer...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/kidney-cancer"
    },
    {
        cancer_label: "Prostate Cancer",
        cancer_description: "Cancer that originates in the prostate gland (walnut-shaped small gland that produces seminal fluid and nourishes the sperm in males) is called prostate cancer. MSK's surgeons are experienced in performing prostate surgery, robotic, laparoscopic, and open...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/prostate-cancer"
    },
    {
        cancer_label: "Sarcoma",
        cancer_description: "Sarcoma is cancer that originates in the body's soft tissues, such as fat, muscles, nerves, tendons, blood vessels, and lymph vessels, and can occur anywhere in the body and any organ. The most common areas affected are arms and legs. MSK doctors see more than 600 new patients with sarcoma every year and operate...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/sarcoma"
    },
    {
        cancer_label: "Brain Tumors and Cancers",
        cancer_description: "Abnormal or cancerous cell growth in the brain is called brain tumor or cancer. There are various types of brain tumors, some of which are non-cancerous, while some are cancerous. And they are also tumors that begin in the brain (primary brain tumors) and those that spread...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/brain-tumor-and-cancer"
    },
    {
        cancer_label: "Lymphoma",
        cancer_description: "Lymphoma develops due to abnormal growth of lymphocytes, a white blood cell type that makes the body's immune system, which are located in the lymph nodes, spleen, tonsils, bone marrow, and thymus gland-like organs. MSK's multispecialty team consists of more than 30 internationally...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/lymphoma"
    },
    {
        cancer_label: "Leukemia",
        cancer_description: "Leukemia or blood cancer develops due to the abnormal growth of blood-forming tissues, bone marrow, and the lymphatic system. Some types of leukemia are more common in children, while others occur mostly in adults. MSK leukemia experts use various tests to diagnose leukemia. Tests also show changes in the bone marrow or genetic...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/leukemia"
    },
    {
        cancer_label: "Multiple Myeloma",
        cancer_description: "Multiple myeloma originates in a white blood cell called the plasma cell. These cells make antibodies that protect our body from foreign bodies and microorganisms and fight infections. Every patient at MSK receives personalized treatment from a team of experts from various specialties who are focused on caring for patients with multiple myeloma...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/multiple-myeloma"
    },
    {
        cancer_label: "Pediatric (Childhood) Cancers",
        cancer_description: "Childhood cancers are rare, and advances in treatment have improved survival rates drastically. Still, pediatric cancer remains the second leading cause of death in children (between 1 and 14 years of age). Unlike adult cancer, most childhood cancers do not have a known cause. As environmental and lifestyle...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/pediatric-cancers"
    },
    {
        cancer_label: "Benign Blood Disorders",
        cancer_description: "Certain cancer treatment or some types of cancer puts cancer patients at risk for some blood disorders. These blood disorders or blood-related complications due to cancer treatment include blood clots, bleeding disorders, and anemia. These complications can make cancer treatment challenging. For patients...",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/benign-blood-disorders"
    }
];


export const MSKCC_INDIA_TEAM = {
    'Medical Team' : [
        {
            'drName': 'Dr. Subha Jagannathan',
            'designation' : 'Chief Medical Officer',
            'img': 'https://assets.icliniq.com/v2/assets/images/team/subha.jpg'
        },
        {
            'drName': 'Dr. Hemalatha Ramachandran',
            'designation' : 'Head-Medical Team',
            'img': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/hema-ic.jpg'
        },
        {
            'drName': 'Dr. Varadarajan Senthil Kumar',
            'designation' : 'Chief Medical Oncologist',
            'img': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/varadarajan-icliniq-mskcc.jpg'
        },
        {
            'drName': 'Dr. Arun Kumar',
            'designation' : 'Medical Team Doctor',
            'img': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Dr.Arun-Kumar.jpg'
        },
        {
            'drName': 'Dr. Prince Lenin',
            'designation' : 'Medical Team Doctor',
            'img': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Prince-Lenin.jpg'
        },
        {
            'drName': 'Dr. Eunice Joanna Grace.T',
            'designation' : 'Medical Team Doctor',
            'img': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Dr.Eunice.jpg'
        }
    ],
    'Patient Material Coordinators' : [
        {
            'drName': 'Mark Praveen Kumar',
            'img': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Mark.jpg'
        },
        {
            'drName': 'Zaheer Ahmed',
            'img': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Zaheer-Ahmed.jpg'
        },
        {
            'drName': 'Vikrant Agrawal',
            'img': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/vikrant-agarwal.jpg'
        }
    ],
    'Patient Relation Associate' : [
        {
            'drName': 'Chaitali Kundu',
            'img': 'https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/chaitali-kundu.jpg'
        },
    ]
}

export const DOCTOR_DETAILS = [
    {
      path: "murray-brennan",
      drName: "Dr.Murray Brennan",
      specialist: "SURGICAL ONCOLOGIST",
      designation:
        "Senior Vice President of International Programs, Benno C. Schmidt Chair in Clinical Oncology",
      img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-3.jpg",
      About:
        "Dr.Eastham is a surgeon who specializes in nerve-sparing radical prostatectomy for prostate cancer and salvage radical prostatectomy for recurrent prostate cancer. He has been in practice for the last 15 years, and he exclusively cares for men with prostate cancer. Dr.Eastham sees about 300 prostate cancer patients each year. He performs robotic-assisted radical prostatectomy and traditional open surgery for men with high-risk prostate cancer. [[newline]] His area of special interest includes treating men with high-risk prostate cancer who are not considered candidates for traditional open surgery or those previously treated with radiation therapy but whose cancer has returned. His clinical research focuses on improving surgical outcomes for prostate cancer, including cancer control and restoration of normal urinary and sexual function. During the course of his career, he has given more than 180 invited presentations at meetings and symposia in the US and around the world. He has published 300 peer-reviewed studies in prestigious national and international journals.",
      doctorInfo: {
        Residency: ["Surgery - Peter Bent Brigham Hospital"],
        Area: ["Surgery - Peter Bent Brigham Hospital"],
        BoardCertification: ["Surgery"],
        Expertise: ["Soft Tissue Sarcoma"],
      },
      education: "MD - University Of Otago",
    },
    {
      path: "mrinal-gounder",
      drName: "Dr.Mrinal Gounder",
      specialist: "MEDICAL ONCOLOGIST",
      designation:
        "Physician Ambassador – India and Asia MSK Bobst International Center",
      img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-7.jpg",
      About:
        "Dr. Mrinal Gounder, MD, is the MSK Physician Ambassador to India and Asia. He is an internationally recognized medical oncologist specializing in sarcomas and rare cancers. He specializes in developing new drugs in cancer with a specific focus on sarcoma, a rare and devastating cancer that affects children, adolescents, and adults. He joined MSK in 2008 and specializes in personalized medicine, where genetic testing of cancer is used to inform the right therapies for an individual patient. He is the principal investigator of several global clinical trials (phase I – III) evaluating promising new drugs for sarcoma and many other solid cancers. He was the global lead for the study that led to FDA approval of tazemetostat in sarcoma. His work is internationally known and has been published in the New England Journal of Medicine, Journal of Clinical Oncology, Lancet Oncology, Nature Medicine, and others. His research contributions to rare cancers were recognized as the top 10 Advances of the Year in 2018 in the field of oncology. As the Physician Ambassador to India and Asia, he is passionate about building collaborations between MSK and India to improve access to patient care and collaborate on education, graduate medical training, and advancing cancer research and clinical trials globally. He is fluent in Tamil, Hindi, and English.",
      doctorInfo: {
        Residency: ["Northwestern University"],
        Area: ["Memorial Sloan Kettering Cancer Center"],
        BoardCertification: ["Medical Oncology"],
        Expertise: [
          "Soft Tissue and Bone Sarcomas",
          "Early Drug Development (Phase I/II clinical trials) – solid tumors",
        ],
      },
      education: "MD - State University Of New York, Syracuse",
    },
  ];