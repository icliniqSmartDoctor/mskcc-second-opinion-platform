export type CancerSpecialty = {
    cancer_label: string;
    cancer_description: string;
    cancer_path_url: string;
}

export const SIDEMENU = [
  {
    title: "Home",
    icon: "fa fa-home",
  },
  {
    title: "Cases",
    icon: "fa fa-file",
  },
  {
    title: "Messages",
    icon: "fa fa-envelope",
  },
  {
    title: "Account",
    icon: "fa fa-user",
  },
];

export const MSKCC_MENU: any = {
  home: "./",
  "about us": [
    { "about msk": "./about-msk" },
    { "cancer specialities": "./cancer-specialities" },
    { "msk doctors": "./msk-doctors" },
    { "india center team": "./india-center-team" },
    { "contact us": "./contact-us" },
  ],
  "our services": [
    { "remote second opinions": "./remote-second-opinions" },
    { "care at msk in new york": "./care-at-msk-in-new-york" },
  ],
  "frequently asked questions": "./faq",
};

export const SPECIALITIES = [
  {
    "Benign Blood Disorders": "./cancer-care/types/benign-blood-disorders",
    "Brain Tumors and Cancers": "./cancer-care/types/benign-blood-disorders",
    "Breast Cancer": "./cancer-care/types/benign-blood-disorders",
    "Colorectal Cancer": "./cancer-care/types/benign-blood-disorders",
    "Gastric and Esophageal Cancer":
      "./cancer-care/types/benign-blood-disorders",
    "Head & Neck Cancer (Oral Cancer)":
      "./cancer-care/types/benign-blood-disorders",
    "Kidney Cancer (Renal Cell Cancer)":
      "./cancer-care/types/benign-blood-disorders",
    Leukemia: "./cancer-care/types/benign-blood-disorders",
    "Liver, Biliary, and Pancreatic Cancer":
      "./cancer-care/types/benign-blood-disorders",
  },
  {
    "Lung Cancer": "./cancer-care/types/benign-blood-disorders",
    Lymphoma: "/cancer-care/types/lymphoma",
    "Multiple Myeloma": "./cancer-care/types/benign-blood-disorders",
    "Ovarian, Cervical, and Endometrial Cancer":
      "./cancer-care/types/benign-blood-disorders",
    "Pediatric (Childhood) Cancers":
      "./cancer-care/types/benign-blood-disorders",
    "Prostate Cancer": "./cancer-care/types/benign-blood-disorders",
    Sarcoma: "./cancer-care/types/benign-blood-disorders",
    "View Other Types of Cancer": "./cancer-care/types/benign-blood-disorders",
  },
];

export const MSK_DOCTORS = [
  {
    drName: "Sir Dr. Murray Brennan",
    specialist: "surgical oncologist",
    doctorPage: "cancer-care/doctors/murray-brennan",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-3.jpg",
  },
  {
    drName: "Dr. Mrinal Gounder",
    specialist: "medical oncologist",
    doctorPage: "cancer-care/doctors/murray-brennan",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-7.jpg",
  },
  {
    drName: "Dr. Lisa DeAngelis",
    specialist: "neuro-oncologist",
    doctorPage: "cancer-care/doctors/murray-brennan",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-1.jpg",
  },
  {
    drName: "Dr. Monica Morrow",
    specialist: "surgical oncologist",
    doctorPage: "cancer-care/doctors/murray-brennan",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-6.jpg",
  },
  {
    drName: "Dr. Jatin Shah",
    specialist: "surgical oncologist",
    doctorPage: "cancer-care/doctors/murray-brennan",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-2.jpg",
  },
  {
    drName: "Dr. Christopher Crane",
    specialist: "radiation oncologist",
    doctorPage: "cancer-care/doctors/murray-brennan",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-4.jpg",
  },
  {
    drName: "Dr. Andrew Seidman",
    specialist: "medical oncologist",
    doctorPage: "cancer-care/doctors/murray-brennan",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-8.jpg",
  },
  {
    drName: "Dr. Sergio Giralt",
    specialist: "hematologic oncologist",
    doctorPage: "cancer-care/doctors/murray-brennan",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-5.jpg",
  },
  {
    drName: "Dr. James A. Eastham",
    specialist: "surgical oncologist",
    doctorPage: "cancer-care/doctors/murray-brennan",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/james-eastham-mskcc.jpg",
  },
];

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
