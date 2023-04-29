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
    },
    {
        cancer_label: "View Other Types of Cancer",
        cancer_description: "Other Types of Cancer",
        cancer_path_url: "https://mskcc.icliniq.com/cancer-care/types/other-common-types-of-cancer"
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
      "path": "murray-brennan",
      "drName": "Dr.Murray Brennan",
      "specialist": "SURGICAL ONCOLOGIST",
      "designation":
        "Senior Vice President of International Programs, Benno C. Schmidt Chair in Clinical Oncology",
      "img": "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-3.jpg",
      "about":
        "Dr.Eastham is a surgeon who specializes in nerve-sparing radical prostatectomy for prostate cancer and salvage radical prostatectomy for recurrent prostate cancer. He has been in practice for the last 15 years, and he exclusively cares for men with prostate cancer. Dr.Eastham sees about 300 prostate cancer patients each year. He performs robotic-assisted radical prostatectomy and traditional open surgery for men with high-risk prostate cancer. [[newline]] His area of special interest includes treating men with high-risk prostate cancer who are not considered candidates for traditional open surgery or those previously treated with radiation therapy but whose cancer has returned. His clinical research focuses on improving surgical outcomes for prostate cancer, including cancer control and restoration of normal urinary and sexual function. During the course of his career, he has given more than 180 invited presentations at meetings and symposia in the US and around the world. He has published 300 peer-reviewed studies in prestigious national and international journals.",
      "doctorInfo": [{
        "Residency": ["Surgery - Peter Bent Brigham Hospital"],
        "Fellowships": ["Surgery - Peter Bent Brigham Hospital"],
        "Board of Certification": ["Surgery"],
        "Area of Expertise": ["Soft Tissue Sarcoma"],
      }],
      "education": ["MD - University Of Otago"],
    },
    {
        "path": "mrinal-gounder",
        "drName": "Dr.Mrinal Gounder",
        "specialist": "MEDICAL ONCOLOGIST",
        "designation": "Physician Ambassador – India and Asia MSK Bobst International Center",
        "img": "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-7.jpg",
        "about": "Dr. Mrinal Gounder, MD, is the MSK Physician Ambassador to India and Asia. He is an internationally recognized medical oncologist specializing in sarcomas and rare cancers. He specializes in developing new drugs in cancer with a specific focus on sarcoma, a rare and devastating cancer that affects children, adolescents, and adults. He joined MSK in 2008 and specializes in personalized medicine, where genetic testing of cancer is used to inform the right therapies for an individual patient. He is the principal investigator of several global clinical trials (phase I – III) evaluating promising new drugs for sarcoma and many other solid cancers. He was the global lead for the study that led to FDA approval of tazemetostat in sarcoma. His work is internationally known and has been published in the New England Journal of Medicine, Journal of Clinical Oncology, Lancet Oncology, Nature Medicine, and others. His research contributions to rare cancers were recognized as the top 10 Advances of the Year in 2018 in the field of oncology. As the Physician Ambassador to India and Asia, he is passionate about building collaborations between MSK and India to improve access to patient care and collaborate on education, graduate medical training, and advancing cancer research and clinical trials globally. He is fluent in Tamil, Hindi, and English.",
        "doctorInfo": [{
           "Residency": ["Northwestern University"],
           "Fellowships": ["Memorial Sloan Kettering Cancer Center"],
           "Board of Certification": ["Medical Oncology"],
           "Area Of Expertise": [
              "Soft Tissue and Bone Sarcomas",
              "Early Drug Development (Phase I/II clinical trials) – solid tumors"
           ]
        }],
        "education": ["MD - State University Of New York, Syracuse"]
     
      },
      {
        "path": "lisa-deangelis",
        "drName": "Dr. Lisa DeAngelis",
        "specialist": "Neuro-Oncologist",
        "designation": "Physician-in-Chief, Memorial Hospital, Lillian Rojtman Berkman Chair in Honor of Jerome B. Posner",
        "img": "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-1.jpg",
        "about": "Dr. DeAngelis is a neuro-oncologist who has more than 30 years of experience in treating patients with brain tumors and associated complications, such as cognitive impairment and strokes. As the Physician-in-Chief and Chief Medical Officer at Memorial Sloan Kettering, Dr. DeAngelis oversees all clinical, research, and medical education efforts. She is also a co-founder and member of the Brain Tumor Center at Memorial Sloan Kettering. She has conducted and led various national trials of investigational drugs used in the treatment of primary central nervous system lymphoma and new brain tumor treatments.",
        "doctorInfo":[{
            "Residency": ["Northwestern University"],
        "Fellowships": [
        "Neuro-Oncology - Columbia-Presbyterian Medical Center","Neuro-Oncology - Memorial Sloan Kettering Cancer Center","Neurology - New York Hospital"
        ],
        "Board of Certification": [
          "Neurology"
        ],
        "Area Of Expertise": [
          "Neuro-oncology",
          "Neurologic Complications of Cancer",
          "Brain Tumors",
          "Primary Central Nervous System Lymphoma"
        ]}],
        "education": ["MD - Columbia University","Neurology - Columbia - Presbyterian Medical Center"]
     
      },
      {
        "path":"monica-marrow",
        "drName": "Dr. Monica Morrow",
        "specialist": "Surgical Oncologist",
        "designation": "Chief, Breast Surgery Service; Anne Burnett Windfohr Chair of Clinical Oncology",
        "img": "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-6.jpg",
        "about": "Dr. Morrow is a surgical oncologist who specializes in the treatment of breast cancer. In 2002 and 2007, she co-chaired the joint committee of the American College of Surgeons, American College of Radiology, and College of American Pathologists on Standards for Breast-Conserving Therapy for Invasive Breast Cancer and Ductal Carcinoma In Situ (DCIS). Dr. Morrow's current research interest is on how treatment choices for surgical treatment for breast cancer are made. She is the surgical editor of the textbook 'Diseases of the Breast' and the co-author of 'Breast Cancer for Dummies.' Dr. Morrow was the President of the Society of Surgical Oncology in the year 2012-2013.",
        "doctorInfo": [{
        "Residency": [
        "General Surgery - Medical Center Hospital of Vermont"
        ],
        "Fellowships": [
        "General Surgical Oncology - Memorial Sloan Kettering Cancer Center"
        ],
        "Board of Certification": [
        "Surgery"
        ],
        "Area Of Expertise": [
        "Breast disorders"
        ]
        }],"education": [
        "MD - Jefferson Medical College"
        ],
        },
        {
            "path": "jatin-shah",
            "drName": "Dr. Jatin Shah",
            "specialist": "Surgical Oncologist",
            "designation": "Elliot W. Strong Chair in Head and Neck Oncology",
            "img": "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-2.jpg",
            "about": "Dr. Jatin Shah is the former Chief of the Head and Neck Surgery department at MSK and a leading head and neck surgeon. After a surgical career of more than 40 years, Dr. Shah now provides consultations to discuss various treatment options, the advantages and disadvantages of surgical and non-surgical cancer treatments, the expected outcomes, and the quality of life. Memorial Sloan Kettering Cancer Center has established The 'Jatin Shah Chair in Head and Neck Surgery and Oncology' because of Dr. Shah's outstanding contributions and world leadership in Head and Neck Surgery.",
            "doctorInfo": [{
              "Residency": [
                "General Surgery - SSG Hospital",
                "Surgical Oncology - Memorial Sloan Kettering Cancer Center",
                "Surgery - New York Infirmary"
              ],
              "Fellowships": [
                "Memorial Sloan Kettering Cancer Center"
              ],
              "Board of Certification": [
                "Surgery"
              ],
              "Area Of Expertise": [
                "Head and Neck Surgery for:",
                "Mouth",
                "Throat",
                "Larynx",
                "Sinuses",
                "Skull base",
                "Thyroid",
                "Salivary glands",
                "Skin",
                "Soft tissues",
                "Bone tumors"
              ]
            }],
            "education": [
              "MD - Maharaja Sayajirao University"
            ]
          },

           
            {
            "path":"christopher-crane",
            "drName": "Dr.Christopher Crane",
            "specialist": "Radiation Oncologist",
            "designation": "Vice-Chair, Department of Radiation Oncology",
            "about": "Dr.Christopher Crane, a radiation oncologist, treats patients suffering from gastrointestinal cancers. With the help of advanced technologies, Dr.Crane is an expert in deciding where in the body the radiation should be directed to, which avoids damage to healthy tissues and reduces the risk of severe radiation side effects. Dr.Crane is leading many cancer clinical trials focused on delivering radiation therapy doses to eliminate liver and pancreas tumors.",
            "img": "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-4.jpg",
            "doctorInfo":[{
             "Residency": [
               "Radiation Oncology - University of Virginia"
            ],
            "Fellowships": [
               "Radiation Oncology"
            ],
            "Area Of Expertise": [
               "Radiation therapy for:",
               "Anal cancer",
               "Gallbladder cancer",
               "Liver cancer",
               "Bile duct cancer",
               "Gastric cancer",
               "Pancreatic cancer"
            ]}],
           
            "education": [
                "MD-University of Virginia"
           ],
         },
         {
            "path":"andrew-seidman",
            "drName": "Dr.Andrew Seidman",
            "specialist": "Medical Oncologist",
            "designation": "Medical Director, MSK Bobst International Center",
            "about": "Dr.Seidman, a medical oncologist, is experienced in managing early and advanced breast cancer stages. His research interests include the clinical investigation of new chemotherapeutic drugs in the treatment of metastatic breast cancer.",
            "img": "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-8.jpg",
            "doctorInfo":[{
             "Residency": [
               "Internal Medicine - Pennsylvania Hospital"
            ],
            "Fellowships": [
               "Medical Oncology/Hematology - Memorial Sloan Kettering Cancer Center"
            ],
            "Board Of Certification":[
                "Internal Medicine","Medical Oncology"
                ],

            "Area Of Expertise": [
               "Breast cancer"
            ]}],
           
             "education": [
			 "MD - Hahnemann University School Of Medicine"
            ],
         }
         ,
         {
            "path":"sergio-giralt",
            "drName": "Dr.Sergio Giralt",
            "specialist": "Hemotologic oncologist",
            "designation": "Chief, Adult Bone Marrow Transplant Service, Melvin Berlin Family Chair in Multiple Myeloma",
            "about": "Dr.Giralt’s primary focus is stem cell transplantation for patients suffering from blood-related disorders. He is a board-certified hematologist-oncologist. He was the Deputy Chair of the Department of Stem Cell Transplantation and Cellular Therapies in the University of Texas MD Anderson Cancer Center. Dr.Giralt joined Memorial Sloan Kettering in May 2010 to lead the Adult Bone Marrow Transplant Service and served as Chief until February 2020. Until recently, Dr. Giralt chaired the executive board of the Center for International Blood and Marrow Transplant Research and was the Blood and Marrow Transplant Clinical Trials Network chair, a group that works on stem cell transplantation in the US. His research focus has been on improving treatments for older adults with acute and chronic leukemia, and he is an expert in the treatment of multiple myeloma.",
            "img": "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-4.jpg",
            "doctorInfo":[{
             "Residency": [
               "Internal Medicine - Good Samaritan Hospital"
            ],
            "Fellowships": [
               "Medical Oncology - MD Anderson Cancer Center"
            ],
			"Board Of Certification":[
			"Internal Medicine",
               "Hematology",
			   "Medical Oncology"],
			
            "Area Of Expertise": [
			"Leukemia and Other Blood Cancers",
			"Multiple Myeloma",
			"Blood and Marrow Stem Cell Transplantation"
			
            ]}],
           
             "education": [
			 "MD - Universidad Central De Venezuela"
            ],
         },
         {
            "path":"james-eastham",
            "drName": "Dr.James A. Eastham",
            "specialist": "Surgical oncologist",
            "designation": "MD, University of Southern California, Los Angeles",
            "about": "Dr.Eastham is a surgeon who specializes in nerve-sparing radical prostatectomy for prostate cancer and salvage radical prostatectomy for recurrent prostate cancer. He has been in practice for the last 15 years, and he exclusively cares for men with prostate cancer. Dr.Eastham sees about 300 prostate cancer patients each year. He performs robotic-assisted radical prostatectomy and traditional open surgery for men with high-risk prostate cancer. His area of special interest includes treating men with high-risk prostate cancer who are not considered candidates for traditional open surgery or those previously treated with radiation therapy but whose cancer has returned. His clinical research focuses on improving surgical outcomes for prostate cancer, including cancer control and restoration of normal urinary and sexual function. During the course of his career, he has given more than 180 invited presentations at meetings and symposia in the US and around the world. He has published 300 peer-reviewed studies in prestigious national and international journals.",
            "img": "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/james-eastham-mskcc.jpg",
            "doctorInfo":[{
             "Residency": [
                "Urology - Los Angeles County - University of Southern California Medical Center"
            ],
            "Fellowships": [
                "Urologic Oncology - Baylor College of Medicine"
            ],
			"Board Of Certification":[
			    "Urology"],
			
            "Area Of Expertise": [
                "Prostate Cancer",
                "Nerve-Sparing Techniques",
                "Salvage Radical Prostatectomy",
                "Robotic Prostatectomy"
			
            ]}],
           
             "education": [
			 "MD, University Of Southern California, Los Angeles"
            ],
         }
   
  ];