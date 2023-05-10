import type { SlotString } from "astro/dist/runtime/server/render/slot";

type CancerSpecialty = {
  cancer_label: string;
  cancer_description: string;
  cancer_path_url: string;
};
type OtherCancerSpecialty = {
  label: string;
  description: string;
  imgUrl: string;
}
type MskDoctorsType = {
  drName: string;
  specialist: string;
  doctorPage: string;
  drImg: string;
};

export type DoctorInfoParams = {
  lable: string;
  values: string[];
};

export type DoctorInfo = {
  residency: DoctorInfoParams;
  fellowships: DoctorInfoParams;
  boardOfCertification: DoctorInfoParams;
  areaOfExpertise: DoctorInfoParams;
};

export type DoctorDetails = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  canonicalUrl: string;
  drName: string;
  specialist: string;
  designation: string;
  img: string;
  about: string;
  doctorInfo: DoctorInfo;
  education: string[];
};

type CancerTestType = {
  path: string;
  title: string;
  breadCrumbName: string;
  about: string;
  info: CancerInfoType[];
};

type CancerSubItemType = {
  heading: string;
  body?: string;
  subItems?: CancerSubItemType[] | string[]
};

type CancerInfoType = {
  infoTitle?: string,
  heading: string;
  body?: string | (string[] | string)[];
  subItems?: CancerSubItemType[];
};

type MskccMenuTypes = { [key: string]: string | { [key: string]: string }[] };

type MskccIndiaTeam = {
  "Medical Team": {
    drName: string;
    designation: string;
    img: string;
  }[];
  "Patient Material Coordinators": {
    drName: string;
    img: string;
  }[];
  "Patient Relation Associate": {
    drName: string;
    img: string;
  }[];
};

type FaqQuestionType = {
  question: string;
  answer: Array<string | string[]>;
};

export const MSKCC_MENU: MskccMenuTypes = {
  home: "/",
  "about us": [
    {
      "about msk": "/about-mskcc-india",
    },
    {
      "cancer specialities": "/#cancer-specialities",
    },
    {
      "msk doctors": "/#msk-doctors",
    },
    {
      "india center team": "/mskcc-india-team",
    },
    {
      "contact us": "https://mskcc.icliniq.com/contact-us",
    },
  ],
  "our services": [
    {
      "remote second opinions":
        "/mskcc-india-services/remote-second-opinion/",
    },
    {
      "care at msk in new york":
        "/mskcc-india-services/travel-guide-to-mskcc-new-york",
    },
  ],
  "frequently asked questions":
    "/mskcc-india-services/mskcc-patient-faqs",
  login: [
    {
      "patient login": "https://mskcc.icliniq.com/users/signin",
    },
    {
      "msk physician login": "https://mskcc.icliniq.com/sso/web/index.php?sso",
    },
    {
      "msk admin login": "https://mskcc.icliniq.com/sso/web/index.php?sso",
    },

    {
      "msk india admin login": "https://mskcc.icliniq.com/h/admin",
    },
  ],
};

export const MSK_DOCTORS: MskDoctorsType[] = [
  {
    drName: "Sir Dr. Murray Brennan",
    specialist: "surgical oncologist",
    doctorPage:
      "/cancer-care/doctors/murray-brennan",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-3.jpg",
  },
  {
    drName: "Dr. Mrinal Gounder",
    specialist: "medical oncologist",
    doctorPage:
      "/cancer-care/doctors/mrinal-gounder",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-7.jpg",
  },
  {
    drName: "Dr. Lisa DeAngelis",
    specialist: "neuro-oncologist",
    doctorPage:
      "/cancer-care/doctors/lisa-deangelis",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-1.jpg",
  },
  {
    drName: "Dr. Monica Morrow",
    specialist: "surgical oncologist",
    doctorPage:
      "/cancer-care/doctors/monica-morrow",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-6.jpg",
  },
  {
    drName: "Dr. Jatin Shah",
    specialist: "surgical oncologist",
    doctorPage: "/cancer-care/doctors/Jatin-shah",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-2.jpg",
  },
  {
    drName: "Dr. Christopher Crane",
    specialist: "radiation oncologist",
    doctorPage:
      "/cancer-care/doctors/christopher-crane",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-4.jpg",
  },
  {
    drName: "Dr. Andrew Seidman",
    specialist: "medical oncologist",
    doctorPage:
      "/cancer-care/doctors/andrew-seidman",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-8.jpg",
  },
  {
    drName: "Dr. Sergio Giralt",
    specialist: "hematologic oncologist",
    doctorPage:
      "/cancer-care/doctors/sergio-giralt",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-310-5.jpg",
  },
  {
    drName: "Dr. James A. Eastham",
    specialist: "surgical oncologist",
    doctorPage:
      "/cancer-care/doctors/james-eastham",
    drImg:
      "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/james-eastham-mskcc.jpg",
  },
];

export const CANCER_SPECIALTIES: CancerSpecialty[] = [
  {
    cancer_label: "Head & Neck Cancer (Oral Cancer)",
    cancer_description:
      "Head and neck cancers include cancers that start in several areas of the head and throat, such as the sinuses, tongue, gums, roof of the mouth, larynx, lips, and salivary glands, but not including cancers of the brain and eyes. The skill and experience of MSK's surgeons in head and neck surgery are unprecedented...",
    cancer_path_url:
      "/cancer-care/types/head-and-neck-cancer",
  },
  {
    cancer_label: "Ovarian, Cervical, and Endometrial Cancer",
    cancer_description:
      "The type of cancer where the cells in the ovaries, cervix, and endometrium (the inner lining of the uterus) multiply and grow out of control are called ovarian, cervical, and endometrial cancer, respectively. MSK's surgeons are continually working and leading the way to improve surgical methods...",
    cancer_path_url:
      "/cancer-care/types/ovarian-cervical-and-endometrial-cancer",
  },
  {
    cancer_label: "Breast Cancer",
    cancer_description:
      "In breast cancer, the cells in the breast grow out of control. MSK is a leader in pioneering new ways to treat breast cancer, which has resulted in optimal outcomes for the 4,500 new breast cancer patients that consult each year. Most of the latest and effective breast cancer treatments developed in the last ten years were studied...",
    cancer_path_url:
      "/cancer-care/types/breast-cancer",
  },
  {
    cancer_label: "Lung Cancer",
    cancer_description:
      "Lung cancer, the abnormal growth of cells in the lungs and bronchi (the airways that carry air into the lungs), is amongst the most commonly diagnosed cancers. Surgeons at MSK perform more than 1,200 surgeries for lung cancer each year, with one of the US's lowest complication rates. Using MSK-IMPACT, doctors match...",
    cancer_path_url:
      "/cancer-care/types/lung-cancer",
  },
  {
    cancer_label: "Gastric and Esophageal Cancer",
    cancer_description:
      "Cancer that originates or develops in the lining of the stomach is called gastric or stomach cancer. And esophageal cancer develops inside the 10-inch hollow tube that carries food to the stomach called the esophagus. Patients suffering from Barrett's esophagus...",
    cancer_path_url:
      "/cancer-care/types/gastric-and-esophageal-cancer",
  },
  {
    cancer_label: "Liver, Biliary, and Pancreatic Cancer",
    cancer_description:
      "Cancer that originates or develops in the lining of the stomach is called gastric or stomach cancer. And esophageal cancer develops inside the 10-inch hollow tube that carries food to the stomach called the esophagus. Patients suffering from Barrett's esophagus...",
    cancer_path_url:
      "/cancer-care/types/liver-biliary-and-pancreatic-cancer",
  },
  {
    cancer_label: "Colorectal Cancer",
    cancer_description:
      "Cancer that begins in the inner lining of the large intestine (colon) or rectum present in the lower portion of the digestive tract is called colorectal cancer. Surgeons and medical oncologists at MSK pioneered the method of using chemoradiation and chemotherapy...",
    cancer_path_url:
      "/cancer-care/types/colorectal-cancer",
  },
  {
    cancer_label: "Kidney Cancer (Renal Cell Cancer)",
    cancer_description:
      "Kidney cancer (renal cell cancer) is a cancerous tumor that develops in the kidneys, the two organs that are present on each side of your spine in the torso. Skilled surgeons at MSK offer a surgical cure to patients whose cancer...",
    cancer_path_url:
      "/cancer-care/types/kidney-cancer",
  },
  {
    cancer_label: "Prostate Cancer",
    cancer_description:
      "Cancer that originates in the prostate gland (walnut-shaped small gland that produces seminal fluid and nourishes the sperm in males) is called prostate cancer. MSK's surgeons are experienced in performing prostate surgery, robotic, laparoscopic, and open...",
    cancer_path_url:
      "/cancer-care/types/prostate-cancer",
  },
  {
    cancer_label: "Sarcoma",
    cancer_description:
      "Sarcoma is cancer that originates in the body's soft tissues, such as fat, muscles, nerves, tendons, blood vessels, and lymph vessels, and can occur anywhere in the body and any organ. The most common areas affected are arms and legs. MSK doctors see more than 600 new patients with sarcoma every year and operate...",
    cancer_path_url: "/cancer-care/types/sarcoma",
  },
  {
    cancer_label: "Brain Tumors and Cancers",
    cancer_description:
      "Abnormal or cancerous cell growth in the brain is called brain tumor or cancer. There are various types of brain tumors, some of which are non-cancerous, while some are cancerous. And they are also tumors that begin in the brain (primary brain tumors) and those that spread...",
    cancer_path_url:
      "/cancer-care/types/brain-tumor-and-cancer",
  },
  {
    cancer_label: "Lymphoma",
    cancer_description:
      "Lymphoma develops due to abnormal growth of lymphocytes, a white blood cell type that makes the body's immune system, which are located in the lymph nodes, spleen, tonsils, bone marrow, and thymus gland-like organs. MSK's multispecialty team consists of more than 30 internationally...",
    cancer_path_url:
      "/cancer-care/types/lymphoma",
  },
  {
    cancer_label: "Leukemia",
    cancer_description:
      "Leukemia or blood cancer develops due to the abnormal growth of blood-forming tissues, bone marrow, and the lymphatic system. Some types of leukemia are more common in children, while others occur mostly in adults. MSK leukemia experts use various tests to diagnose leukemia. Tests also show changes in the bone marrow or genetic...",
    cancer_path_url:
      "/cancer-care/types/leukemia",
  },
  {
    cancer_label: "Multiple Myeloma",
    cancer_description:
      "Multiple myeloma originates in a white blood cell called the plasma cell. These cells make antibodies that protect our body from foreign bodies and microorganisms and fight infections. Every patient at MSK receives personalized treatment from a team of experts from various specialties who are focused on caring for patients with multiple myeloma...",
    cancer_path_url:
      "/cancer-care/types/multiple-myeloma",
  },
  {
    cancer_label: "Pediatric (Childhood) Cancers",
    cancer_description:
      "Childhood cancers are rare, and advances in treatment have improved survival rates drastically. Still, pediatric cancer remains the second leading cause of death in children (between 1 and 14 years of age). Unlike adult cancer, most childhood cancers do not have a known cause. As environmental and lifestyle...",
    cancer_path_url:
      "/cancer-care/types/pediatric-cancers",
  },
  {
    cancer_label: "Benign Blood Disorders",
    cancer_description:
      "Certain cancer treatment or some types of cancer puts cancer patients at risk for some blood disorders. These blood disorders or blood-related complications due to cancer treatment include blood clots, bleeding disorders, and anemia. These complications can make cancer treatment challenging. For patients...",
    cancer_path_url:
      "/cancer-care/types/benign-blood-disorders",
  },
  {
    cancer_label: "View Other Types of Cancer",
    cancer_description: "Other Types of Cancer",
    cancer_path_url:
      "/cancer-care/types/other-common-types-of-cancer",
  },
];
export const OTHER_CANCER_SPECIALTIES: OtherCancerSpecialty[] = [
  {
    label: "AIDS-Associated Cancers",
    description: "AIDS (Acquired immunodeficiency syndrome), a sexually transmitted infection caused by the human immunodeficiency virus (HIV), results in a weak immune system. This puts AIDS and HIV patients at an increased risk for infections and certain cancers. The common AIDS-associated cancers are Kaposi sarcoma, non-Hodgkin lymphoma, and invasive cervical cancer. Taking HAART (highly active antiretroviral therapy) helps reduce the risk of getting these cancers.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/AIDS-Associated-Cancers.png"
  },
  {
    label: "Acoustic Neuroma (Vestibular Schwannoma)",
    description: "Acoustic neuroma, otherwise called vestibular schwannoma, is a benign tumor that originates in the cells that are present around the nerves that connect the ear to the brain and are responsible for hearing and balance. They are mostly slow-growing but can press on the brainstem and cerebellum as they grow, which results in symptoms.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Acoustic-Neuroma-(Vestibular Schwannoma).png"
  },
  {
    label: "Adrenal Tumors",
    description: "Abnormal growth in either of the two triangular glands present on top of the kidneys, the adrenal glands, is called an adrenal tumor or adrenocortical cancer. These glands secrete hormones, such as cortisol, aldosterone, DHEA, and Catecholamines, that provide instructions to all organs in the body. It commonly affects children below 5 years and people between 40 and 50 years of age. Adrenal tumors can be benign (noncancerous), functional (cancerous cells produce hormones and are mostly benign), and malignant (cancerous and can spread to other areas of the body).",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Adrenal-Tumors.png"
  },
  {
    label: "Anal Cancer",
    description: "Cancer or abnormal growth of cells in the anus (the end of the rectum) is called anal cancer. The anus helps solid waste pass from the body. Anal cancer is rare and is more common in women. More than 90 % of anal cancer is due to the human papillomavirus (HPV), a common sexually transmitted virus. The common signs of anal cancer are anal itching, blood in stools, pain on defecation, or a lump inside the anus.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Anal-Cancer.png"
  },
  {
    label: "Appendiceal Cancer",
    description: "Cancer or abnormal growth of cells in the anus (the end of the rectum) is called anal cancer. The anus helps solid waste pass from the body. Anal cancer is rare and is more common in women. More than 90 % of anal cancer is due to the human papillomavirus (HPV), a common sexually transmitted virus. The common signs of anal cancer are anal itching, blood in stools, pain on defecation, or a lump inside the anus.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Appendiceal-Cancer.png"
  },
  {
    label: "Basal Cell Carcinoma",
    description: "It is the most common type of skin cancer in the world. This cancer begins in the basal cells (a type of skin cell that produces new skin cells when the old cells die). This cancer appears as a transparent bump on the skin and occurs most often on the skin's sun-exposed areas (head and neck). Using sunscreen and avoiding long-term ultraviolet (UV) radiation from sunlight can protect against basal cell carcinoma.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Basal-Cell-Carcinoma.png"
  },
  {
    label: "Bladder Cancer",
    description: "Bladder cancer begins in the cells that line the inner surface of the bladder. It is generally seen in people older than 70 years, especially men. This cancer is the fifth most common type of cancer overall and the fourth most common in men. Prognosis is good when diagnosed early, but it can recur even years later.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Bladder-Cancer.png"
  },
  {
    label: "Bone Cancer",
    description: "Bone cancer that starts in the bone cells (primary bone cancer) is rare. Most bone cancers grow in other organs or tissues in the body and then spread to the bone (secondary bone cancer). The common bones affected are the long bones of the arms and legs, pelvis, ribs, and spine, and more children and young adults get diagnosed with this cancer.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Bone-Cancer.png"
  },
  {
    label: "Cancer of Unknown Primary Origin",
    description: "Any cell in the body can turn cancerous and start multiplying uncontrollably. The primary site of the cancer is the organ or part of the body where cancer develops. Cancerous cells from one organ can spread elsewhere in the body and form tumors, which is called metastatic cancer. Cancer of unknown primary (CUP) origin has spread from other parts of the body. Around 2 to 5 % of all people diagnosed with cancer have metastatic cancer, and tests cannot locate where cancer originated. This type of cancer is commonly seen in the liver, lymph nodes, lungs, skin, and bones.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Cancer-of-Unknown-Primary-Origin.png"
  },
  {
    label: "Central Nervous System (CNS) Lymphoma",
    description: "This is a rare type of non-Hodgkin lymphoma, cancer that originates in white blood cells. The two types of CNS lymphoma are primary CNS lymphoma (generally limited to the areas of the nervous system, such as eyes, brain, spine, and cerebrospinal fluid) and secondary CNS lymphoma (originates in other parts of the body and then spreads to the nervous system). Around 10 to 15 % of people with non-Hodgkin lymphoma affecting almost the entire body are at risk of developing secondary CNS lymphoma.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Central-Nervous-System-(CNS)-Lymphoma.png"
  },
  {
    label: "Colon Cancer",
    description: "The starting part of the large intestine is called the colon, and cancer that develops in the inner lining of the colon is called colon cancer. Colon cancer is often slow-growing and develops over several years. It is usually contained within the colon, but it can spread to the liver, lungs, and other organs if not treated.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Colon-Cancer.png"
  },
  {
    label: "Gallbladder Cancer",
    description: "Cancer that develops in the gallbladder, the small, pear-shaped organ present near the liver, is called gallbladder cancer. The gallbladder's function is to store bile, which is the digestive enzyme made by the liver. Gallbladder cancers are rare and typically affect older adults (age 70 and above). Most people are diagnosed when the cancer advances, which affects the prognosis.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Gallbladder-Cancer.png"
  },
  {
    label: "Gastrointestinal Neuroendocrine Tumors",
    description: "Neuroendocrine tumors, otherwise referred to as NETs, are tumors that arise from the neuroendocrine cells (cells of the endocrine and nervous system). These cells are found throughout the body, which makes neuroendocrine tumors possible in various organs, such as the gastrointestinal system, skin, lungs, etc. The most common type of neuroendocrine tumor found in the gastrointestinal system is carcinoid.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Gastrointestinal-Neuroendocrine-Tumors.png"
  },
  {
    label: "Gestational Trophoblastic Disease",
    description: "Gestational trophoblastic disease, otherwise called GTD, is a rare disease that results after conception due to abnormal trophoblast cell growth inside the uterus. Here, a tumor develops in the tissue that would normally become the placenta. The common types of GTD are choriocarcinoma and hydatidiform mole.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Gestational-Trophoblastic-Disease.png"
  },
  {
    label: "Graft-Versus-Host Disease (GVHD)",
    description: "Graft versus host disease (GvHD) is a disease that can follow an allogeneic transplant (allogeneic means the stem cells are obtained from a donor). The donated bone marrow or stem cells attack the recipient's body as they see the recipient's body as foreign. This abnormal immune reaction can affect various parts of the body, including the eyes, skin, mouth, gut, liver, and lungs.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Graft-Versus-Host-Disease.png"
  },
  {
    label: "Histiocytosis",
    description: "Histiocytosis, otherwise called Langerhans Cell Histiocytosis (LCH) or Histiocytosis X, is a group of rare disorders that are characterized by the abnormal increase in certain immune cells called histiocytes, including monocytes, macrophages, and dendritic cells. Histiocytes are normal immune cells found in many parts of the body, such as bone marrow, blood, skin, liver, etc. Abnormal proliferation of these immune cells can form tumors and affect various parts of the body.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Histiocytosis.png"
  },
  {
    label: "Kaposi Sarcoma",
    description: "Kaposi sarcoma (KS), a type of soft-tissue tumor, is seen in people with the human herpesvirus-8 (HHV-8) infection. The growth is deep purple or reddish-blue in color, and it commonly develops in the lining of the mouth, nose, throat, or digestive tract. Not all people with HHV-8 infection develop KS, only those with a weak immune system due to HIV, old age, immunosuppressant drugs, etc., who are unable to suppress the virus are at risk.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Kaposi-Sarcoma.png"
  },
  {
    label: "Melanoma",
    description: "Melanoma, a type of malignant skin cancer, develops from the cells called melanocytes. Melanocytes are cells that produce melanin, which is the dark-colored pigment that gives color to the skin and protects against harmful ultraviolet rays. Melanoma can develop in the eyes, inside the nose, or throat. Women, especially those over the age of 40, are at risk of developing melanoma. This skin cancer can be treated successfully if diagnosed early.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Melanoma.png"
  },
  {
    label: "Merkel Cell Carcinoma",
    description: "Merkel cell carcinoma (MCC), also called neuroendocrine carcinoma of the skin, is a skin cancer that generally results in skin-colored or bluish-red lumps on the face, neck, or head. This cancer originates from the cells in the skin called Merkel cells. Merkel cell carcinoma is often seen in adults above the age of 70 years, and prolonged sun exposure or a weak immune system increases the risk. This skin cancer is fast-growing and spreads quickly to other parts of the body.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Merkel-Cell-Carcinoma.png"
  },
  {
    label: "Mesothelioma",
    description: "Cancer that affects the mesothelium, the lining that covers various internal organs, is called mesothelioma. Pleural (affects the membrane that protects the lungs) and peritoneal (affects the tissue that covers the abdominal organs) mesothelioma are the most common subtypes of this cancer. The other rare types include pericardial mesothelioma and testicular mesothelioma. Exposure to asbestos is the most common cause of mesothelioma.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Mesothelioma.png"
  },
  {
    label: "Myelodysplastic Syndrome (MDS)",
    description: "A group of disorders that result from poorly formed blood cells (red blood cells - RBC, white blood cells - WBC, and platelets) in the bone marrow is called myelodysplastic syndrome or MDS. The blood cells are either immature or do not function properly. Treatment for this syndrome is done by preventing or reducing complications, and in severe cases, chemotherapy or a bone marrow transplant might be needed.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Myelodysplastic-Syndrome-(MDS).png"
  },
  {
    label: "Neurofibromatosis",
    description: "Neurofibromatoses consist of a group of genetic disorders that result in nerve tissue tumors, which can develop anywhere in the nervous system, including the brain, spinal cord, and nerves. The three types of neurofibromatosis are neurofibromatosis 1 (NF1), neurofibromatosis 2 (NF2), and schwannomatosis. NF1 is generally diagnosed in childhood, and NF2 and schwannomatosis in early adulthood. These tumors are mostly noncancerous (benign), but sometimes they can become cancerous (malignant).",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Neurofibromatosis.png"
  },
  {
    label: "Pituitary Tumors",
    description: "Pituitary tumors are cancers that develop in the pituitary gland, which is a pea-sized gland located near the base of the brain. Some of these tumors release too much of the pituitary hormones that regulate the body's vital functions, while some make the gland release fewer hormones. Most pituitary tumors are benign (adenomas). Treatment includes removing the tumor, or controlling its growth, and treating hormonal imbalance.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Pituitary-Tumors.png"
  },
  {
    label: "Rectal Cancer",
    description: "Cancer in the last six inches of the large intestine (the rectum) is called rectal cancer. The body stores stool in the rectum until the person has a bowel movement. Cancers of the rectum or rectal cancers often develop slowly over the years and typically start as a small painless growth called a polyp. If not treated timely, this cancer can also spread to the liver, lungs, and other organs.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Rectal-Cancer.png"
  },
  {
    label: "Salivary Gland Tumors",
    description: "Abnormal growth of cells in the salivary glands are called salivary gland tumors. These are rare and can affect any of the three pairs of major salivary glands - parotid, sublingual and submandibular, and various other small salivary glands are located in the lips, cheeks, mouth, and throat. Most salivary gland tumors are noncancerous and commonly affect the parotid glands. Treatment includes surgical removal of the tumor.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Salivary-Gland-Tumors.png"
  },
  {
    label: "Skull Base Tumors",
    description: "These are growths that develop along the base of the skull. Acoustic neuromas, chordomas, chondrosarcomas, craniopharyngiomas, meningiomas, paranasal sinus cancers, pituitary adenomas, and Rathke's cleft cysts are some examples. Most of these tumors are benign and slow-growing.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Skull-Base-Tumors.png"
  },
  {
    label: "Skin Cancer",
    description: "Skin cancer or abnormal growth of skin cells commonly develops on the part of the skin that is exposed to the sun. Squamous cell carcinoma, basal cell carcinoma, and melanoma are the most common types of skin cancer. The risk of these cancers can be reduced by avoiding exposure to ultraviolet (UV) radiation. Early diagnosis of skin cancer gives the greatest chance for successful treatment.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Skin-Cancer.png"
  },
  {
    label: "Spine Tumors and Spinal Cancer",
    description: "Tumors that develop in the nerves, bones, or any other tissues of the spine are called spine tumors. Less than 10 % of spine tumors start in the spine (primary tumors). These tumors can be noncancerous growths, slow-growing cancerous tumors, or aggressive cancerous tumors. Most spine tumors are secondary, meaning they spread from cancer in a different organ or body part.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Spine-Tumors-&-Spinal-Cancer.png"
  },
  {
    label: "Squamous Cell Carcinoma",
    description: "SCC or squamous cell carcinoma is a type of skin cancer that originates in the squamous cells (the cells that make the middle and outer layers of the skin). Squamous cell carcinoma is usually not fatal, even though it can be aggressive. If left untreated, it can grow big and metastasis to other parts of your body, resulting in severe complications. Like the cause for most other skin cancers, prolonged exposure to sunlight is to be blamed for SCC.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Squamous-Cell-Carcinoma.png"
  },
  {
    label: "Testicular Cancer (Germ Cell Tumors)",
    description: "Cancer that starts in the testicles, two small organs found inside the scrotum in men, is called testicular cancer. Germ cells are cells that make sperm, and more than 90% of testicular cancers start in these germ cells. Seminomas and nonseminomas are the main types of germ cell tumors (GCTs) in the testicles. Some testicular cancers can also contain both seminoma and nonseminoma cells.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Testicular-Cancer-(Germ Cell Tumors).png"
  },
  {
    label: "Thymoma and Other Thymic Tumors",
    description: "Tumors of the thymus gland, a small organ situated beneath the breastbone, are rare and account for less than 1 % of all cancers. The thymus produces lymphocytes that make antibodies to fight bacteria. The types of thymic tumors are - Thymoma - Almost 90 % of thymic tumors are this type. Thymomas are often benign and develop in the cells that line the thymus outside. Thymic Carcinoma - Unlike thymoma, thymic carcinoma grows fast and can spread outside the thymus. Around 1 in 10 thymic tumors are diagnosed to be thymic carcinoma. Thymic Carcinoids - These are rare and slow-growing cancers and are also called neuroendocrine tumors.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Thymoma-& Other-Thymic-Tumors.png"
  },
  {
    label: "Tracheal Diseases",
    description: "The trachea or the windpipe is the part of the airway that extends from the voice box or larynx into two airways that enter the lungs (bronchi). The types of tracheal diseases include: Tracheal and Bronchial Tumors - Tumors of the trachea and bronchi. Tracheal Stenosis - Narrowing of the trachea. Tracheobronchomalacia - Airway collapse during breathing or coughing.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Tracheal-Diseases.png"
  },
  {
    label: "Uterine Sarcoma",
    description: "Cancerous growth in the muscles or tissues of the uterus, a part of the female reproductive system where babies grow, is called uterine sarcoma. This type of cancer is rare and accounts for only 4 % of all uterine cancer. Leiomyosarcoma, carcinosarcoma, low-grade endometrial stromal sarcoma, high-grade undifferentiated sarcoma, adenosarcoma, adenosarcoma with sarcomatous overgrowth, and perivascular endothelial cell tumor (PEComa) are some of the common subtypes of uterine sarcoma. MSK pathologists who are familiar with all the types of uterine sarcoma will be a part of your cancer care, which ensures the best treatment.",
    imgUrl: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Uterine-Sarcoma.png"
  },
]
export const MSKCC_INDIA_TEAM: MskccIndiaTeam = {
  "Medical Team": [
    {
      drName: "Dr. Subha Jagannathan",
      designation: "Chief Medical Officer",
      img: "https://assets.icliniq.com/v2/assets/images/team/subha.jpg",
    },
    {
      drName: "Dr. Hemalatha Ramachandran",
      designation: "Head-Medical Team",
      img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/hema-ic.jpg",
    },
    {
      drName: "Dr. Varadarajan Senthil Kumar",
      designation: "Chief Medical Oncologist",
      img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/varadarajan-icliniq-mskcc.jpg",
    },
    {
      drName: "Dr. Arun Kumar",
      designation: "Medical Team Doctor",
      img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Dr.Arun-Kumar.jpg",
    },
    {
      drName: "Dr. Prince Lenin",
      designation: "Medical Team Doctor",
      img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Prince-Lenin.jpg",
    },
    {
      drName: "Dr. Eunice Joanna Grace.T",
      designation: "Medical Team Doctor",
      img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Dr.Eunice.jpg",
    },
  ],
  "Patient Material Coordinators": [
    {
      drName: "Mark Praveen Kumar",
      img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Mark.jpg",
    },
    {
      drName: "Zaheer Ahmed",
      img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/Zaheer-Ahmed.jpg",
    },
    {
      drName: "Vikrant Agrawal",
      img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/vikrant-agarwal.jpg",
    },
  ],
  "Patient Relation Associate": [
    {
      drName: "Chaitali Kundu",
      img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/chaitali-kundu.jpg",
    },
  ],
};

export const DOCTOR_DETAILS: DoctorDetails[] = [
  {
    path: "murray-brennan",
    metaTitle: "About Sir Dr.Murray Brennan - MSK India",
    metaDescription:
      "Sir Dr.Murray Brennan, an oncologic surgeon-scientist, is an expert in soft tissue sarcomas. Learn more about Sir Dr.Brennan here.",
    metaKeywords: "Sir Dr.Murray Brennan,Surgical Oncologist",
    canonicalUrl: "/cancer-care/doctors/",
    drName: "Dr.Murray Brennan",
    specialist: "SURGICAL ONCOLOGIST",
    designation:
      "Senior Vice President of International Programs, Benno C. Schmidt Chair in Clinical Oncology",
    img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-3.jpg",
    about:
      "Dr.Eastham is a surgeon who specializes in nerve-sparing radical prostatectomy for prostate cancer and salvage radical prostatectomy for recurrent prostate cancer. He has been in practice for the last 15 years, and he exclusively cares for men with prostate cancer. Dr.Eastham sees about 300 prostate cancer patients each year. He performs robotic-assisted radical prostatectomy and traditional open surgery for men with high-risk prostate cancer. [[newline]] His area of special interest includes treating men with high-risk prostate cancer who are not considered candidates for traditional open surgery or those previously treated with radiation therapy but whose cancer has returned. His clinical research focuses on improving surgical outcomes for prostate cancer, including cancer control and restoration of normal urinary and sexual function. During the course of his career, he has given more than 180 invited presentations at meetings and symposia in the US and around the world. He has published 300 peer-reviewed studies in prestigious national and international journals.",
    doctorInfo: {
      residency: {
        lable: "Residency",
        values: ["Surgery - Peter Bent Brigham Hospital"],
      },

      fellowships: {
        lable: "Fellowships",
        values: ["Surgery - Peter Bent Brigham Hospital"],
      },
      boardOfCertification: {
        lable: "Board Of Certification",
        values: ["Surgery"],
      },
      areaOfExpertise: {
        lable: "Area Of Expertise",
        values: ["Soft Tissue Sarcoma"],
      },
    },

    education: ["MD - University Of Otago"],
  },
  {
    path: "mrinal-gounder",
    metaTitle: "About Dr.Mrinal Gounder - MSK India",
    metaDescription:
      "Dr.Mrinal Gounder, a medical oncologist, specializes in the treatment of soft tissue and bone sarcomas. Learn more about Dr.Gounder here.",
    metaKeywords: "Dr.Mrinal Gounder,Medical Oncologist",
    canonicalUrl: "/cancer-care/doctors/",
    drName: "Dr.Mrinal Gounder",
    specialist: "MEDICAL ONCOLOGIST",
    designation:
      "Physician Ambassador – India and Asia MSK Bobst International Center",
    img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-7.jpg",
    about:
      "Dr. Mrinal Gounder, MD, is the MSK Physician Ambassador to India and Asia. He is an internationally recognized medical oncologist specializing in sarcomas and rare cancers. He specializes in developing new drugs in cancer with a specific focus on sarcoma, a rare and devastating cancer that affects children, adolescents, and adults. He joined MSK in 2008 and specializes in personalized medicine, where genetic testing of cancer is used to inform the right therapies for an individual patient. He is the principal investigator of several global clinical trials (phase I – III) evaluating promising new drugs for sarcoma and many other solid cancers. He was the global lead for the study that led to FDA approval of tazemetostat in sarcoma. His work is internationally known and has been published in the New England Journal of Medicine, Journal of Clinical Oncology, Lancet Oncology, Nature Medicine, and others. His research contributions to rare cancers were recognized as the top 10 Advances of the Year in 2018 in the field of oncology. As the Physician Ambassador to India and Asia, he is passionate about building collaborations between MSK and India to improve access to patient care and collaborate on education, graduate medical training, and advancing cancer research and clinical trials globally. He is fluent in Tamil, Hindi, and English.",
    doctorInfo: {
      residency: {
        lable: "Residency",
        values: ["Northwestern University"],
      },

      fellowships: {
        lable: "Fellowships",
        values: ["Memorial Sloan Kettering Cancer Center"],
      },
      boardOfCertification: {
        lable: "Board Of Certification",
        values: ["Medical Oncology"],
      },
      areaOfExpertise: {
        lable: "Area Of Expertise",
        values: [
          "Soft Tissue and Bone Sarcomas",
          "Early Drug Development (Phase I/II clinical trials) – solid tumors",
        ],
      },
    },
    education: ["MD - State University Of New York, Syracuse"],
  },
  {
    path: "lisa-deangelis",
    metaTitle: "About Dr.Lisa DeAngelis - MSK India",
    metaDescription:
      "Dr.Lisa DeAngelis, a neuro-oncologist, has spent more than 30 years treating patients with brain tumors. Learn more about Dr.DeAngelis here.",
    metaKeywords: "Dr.Lisa DeAngelis,Neuro-oncologist",
    canonicalUrl: "/cancer-care/doctors/",
    drName: "Dr. Lisa DeAngelis",
    specialist: "Neuro-Oncologist",
    designation:
      "Physician-in-Chief, Memorial Hospital, Lillian Rojtman Berkman Chair in Honor of Jerome B. Posner",
    img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-1.jpg",
    about:
      "Dr. DeAngelis is a neuro-oncologist who has more than 30 years of experience in treating patients with brain tumors and associated complications, such as cognitive impairment and strokes. As the Physician-in-Chief and Chief Medical Officer at Memorial Sloan Kettering, Dr. DeAngelis oversees all clinical, research, and medical education efforts. She is also a co-founder and member of the Brain Tumor Center at Memorial Sloan Kettering. She has conducted and led various national trials of investigational drugs used in the treatment of primary central nervous system lymphoma and new brain tumor treatments.",
    doctorInfo: {
      residency: {
        lable: "Residency",
        values: ["Northwestern University"],
      },

      fellowships: {
        lable: "Fellowships",
        values: [
          "Neuro-Oncology - Columbia-Presbyterian Medical Center",
          "Neuro-Oncology - Memorial Sloan Kettering Cancer Center",
          "Neurology - New York Hospital",
        ],
      },
      boardOfCertification: {
        lable: "Board Of Certification",
        values: ["Neurology"],
      },
      areaOfExpertise: {
        lable: "Area Of Expertise",
        values: [
          "Neuro-oncology",
          "Neurologic Complications of Cancer",
          "Brain Tumors",
          "Primary Central Nervous System Lymphoma",
        ],
      },
    },
    education: [
      "MD - Columbia University",
      "Neurology - Columbia - Presbyterian Medical Center",
    ],
  },
  {
    path: "monica-morrow",
    metaTitle: "About Dr.Monica Morrow - MSK India",
    metaDescription:
      "Dr.Monica Morrow, a surgical oncologist, specializes in the treatment of breast cancer. Learn more about Dr.Morrow here.",
    metaKeywords: "Dr.Monica Morrow,Surgical Oncologist",
    canonicalUrl: "/cancer-care/doctors/",
    drName: "Dr. Monica Morrow",
    specialist: "Surgical Oncologist",
    designation:
      "Chief, Breast Surgery Service; Anne Burnett Windfohr Chair of Clinical Oncology",
    img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-6.jpg",
    about:
      "Dr. Morrow is a surgical oncologist who specializes in the treatment of breast cancer. In 2002 and 2007, she co-chaired the joint committee of the American College of Surgeons, American College of Radiology, and College of American Pathologists on Standards for Breast-Conserving Therapy for Invasive Breast Cancer and Ductal Carcinoma In Situ (DCIS). Dr. Morrow's current research interest is on how treatment choices for surgical treatment for breast cancer are made. She is the surgical editor of the textbook 'Diseases of the Breast' and the co-author of 'Breast Cancer for Dummies.' Dr. Morrow was the President of the Society of Surgical Oncology in the year 2012-2013.",
    doctorInfo: {
      residency: {
        lable: "Residency",
        values: ["General Surgery - Medical Center Hospital of Vermont"],
      },

      fellowships: {
        lable: "Fellowships",
        values: [
          "General Surgical Oncology - Memorial Sloan Kettering Cancer Center",
        ],
      },
      boardOfCertification: {
        lable: "Board Of Certification",
        values: ["Surgery"],
      },
      areaOfExpertise: {
        lable: "Area Of Expertise",
        values: ["Breast disorders"],
      },
    },
    education: ["MD - Jefferson Medical College"],
  },
  {
    path: "Jatin-shah",
    metaTitle: "About Dr.Jatin Shah - MSK India",
    metaDescription:
      "Dr.Jatin Shah, a surgical oncologist, provides consultations to discuss various treatment options for head and neck cancers. Learn more about Dr.Shah here.",
    metaKeywords: "Dr.Jatin Shah,Surgical Oncologist",
    canonicalUrl: "/cancer-care/doctors/",
    drName: "Dr. Jatin Shah",
    specialist: "Surgical Oncologist",
    designation: "Elliot W. Strong Chair in Head and Neck Oncology",
    img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-2.jpg",
    about:
      "Dr. Jatin Shah is the former Chief of the Head and Neck Surgery department at MSK and a leading head and neck surgeon. After a surgical career of more than 40 years, Dr. Shah now provides consultations to discuss various treatment options, the advantages and disadvantages of surgical and non-surgical cancer treatments, the expected outcomes, and the quality of life. Memorial Sloan Kettering Cancer Center has established The 'Jatin Shah Chair in Head and Neck Surgery and Oncology' because of Dr. Shah's outstanding contributions and world leadership in Head and Neck Surgery.",
    doctorInfo: {
      residency: {
        lable: "Residency",
        values: [
          "General Surgery - SSG Hospital",
          "Surgical Oncology - Memorial Sloan Kettering Cancer Center",
          "Surgery - New York Infirmary",
        ],
      },

      fellowships: {
        lable: "Fellowships",
        values: ["Memorial Sloan Kettering Cancer Center"],
      },
      boardOfCertification: {
        lable: "Board Of Certification",
        values: ["Surgery"],
      },
      areaOfExpertise: {
        lable: "Area Of Expertise",
        values: [
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
          "Bone tumors",
        ],
      },
    },
    education: ["MD - Maharaja Sayajirao University"],
  },

  {
    path: "christopher-crane",
    metaTitle: "About Dr.Christopher Crane - MSK India",
    metaDescription:
      "Dr.Christopher Crane, a radiation oncologist, treats patients suffering from gastrointestinal cancers. Learn more about Dr.Crane here.",
    metaKeywords: "Dr.Christopher Crane,Radiation Oncologist",
    canonicalUrl: "/cancer-care/doctors/",
    drName: "Dr.Christopher Crane",
    specialist: "Radiation Oncologist",
    designation: "Vice-Chair, Department of Radiation Oncology",
    about:
      "Dr.Christopher Crane, a radiation oncologist, treats patients suffering from gastrointestinal cancers. With the help of advanced technologies, Dr.Crane is an expert in deciding where in the body the radiation should be directed to, which avoids damage to healthy tissues and reduces the risk of severe radiation side effects. Dr.Crane is leading many cancer clinical trials focused on delivering radiation therapy doses to eliminate liver and pancreas tumors.",
    img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-4.jpg",
    doctorInfo: {
      residency: {
        lable: "Residency",
        values: [
          "General Surgery - SSG Hospital",
          "Surgical Oncology - Memorial Sloan Kettering Cancer Center",
          "Surgery - New York Infirmary",
        ],
      },

      fellowships: {
        lable: "Fellowships",
        values: ["Memorial Sloan Kettering Cancer Center"],
      },
      boardOfCertification: {
        lable: "",
        values: [],
      },
      areaOfExpertise: {
        lable: "Area Of Expertise",
        values: [
          "Radiation therapy for:",
          "Anal cancer",
          "Gallbladder cancer",
          "Liver cancer",
          "Bile duct cancer",
          "Gastric cancer",
          "Pancreatic cancer",
        ],
      },
    },
    education: ["MD-University of Virginia"],
  },
  {
    path: "andrew-seidman",
    metaTitle: "About Dr.Andrew Seidman - MSK India",
    metaDescription:
      "Dr.Andrew Seidman, a medical oncologist, is experienced in managing early and advanced breast cancer. Learn more about Dr.Seidman here.",
    metaKeywords: "Dr.Andrew Seidman,Medical Oncologist",
    canonicalUrl: "/cancer-care/doctors/",
    drName: "Dr.Andrew Seidman",
    specialist: "Medical Oncologist",
    designation: "Medical Director, MSK Bobst International Center",
    about:
      "Dr.Seidman, a medical oncologist, is experienced in managing early and advanced breast cancer stages. His research interests include the clinical investigation of new chemotherapeutic drugs in the treatment of metastatic breast cancer.",
    img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-8.jpg",
    doctorInfo: {
      residency: {
        lable: "Residency",
        values: ["Internal Medicine - Pennsylvania Hospital"],
      },

      fellowships: {
        lable: "Fellowships",
        values: [
          "Medical Oncology/Hematology - Memorial Sloan Kettering Cancer Center",
        ],
      },
      boardOfCertification: {
        lable: "Board Of Certification",
        values: ["Internal Medicine", "Medical Oncology"],
      },
      areaOfExpertise: {
        lable: "Area Of Expertise",
        values: ["Breast cancer"],
      },
    },
    education: ["MD - Hahnemann University School Of Medicine"],
  },
  {
    path: "sergio-giralt",
    metaTitle: "About Dr.Sergio Giralt - MSK India",
    metaDescription:
      "Dr.Sergio Giralt, a hematologic oncologist, specializes in treating various blood cancers. Learn more about Dr.Giralt here.",
    metaKeywords: "Dr.Sergio Giralt ,Hematologic Oncologist",
    canonicalUrl: "/cancer-care/doctors/",
    drName: "Dr.Sergio Giralt",
    specialist: "Hemotologic oncologist",
    designation:
      "Chief, Adult Bone Marrow Transplant Service, Melvin Berlin Family Chair in Multiple Myeloma",
    about:
      "Dr.Giralt’s primary focus is stem cell transplantation for patients suffering from blood-related disorders. He is a board-certified hematologist-oncologist. He was the Deputy Chair of the Department of Stem Cell Transplantation and Cellular Therapies in the University of Texas MD Anderson Cancer Center. Dr.Giralt joined Memorial Sloan Kettering in May 2010 to lead the Adult Bone Marrow Transplant Service and served as Chief until February 2020. Until recently, Dr. Giralt chaired the executive board of the Center for International Blood and Marrow Transplant Research and was the Blood and Marrow Transplant Clinical Trials Network chair, a group that works on stem cell transplantation in the US. His research focus has been on improving treatments for older adults with acute and chronic leukemia, and he is an expert in the treatment of multiple myeloma.",
    img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-4.jpg",
    doctorInfo: {
      residency: {
        lable: "Residency",
        values: ["Internal Medicine - Good Samaritan Hospital"],
      },

      fellowships: {
        lable: "Fellowships",
        values: ["Medical Oncology - MD Anderson Cancer Center"],
      },
      boardOfCertification: {
        lable: "Board Of Certification",
        values: ["Internal Medicine", "Hematology", "Medical Oncology"],
      },
      areaOfExpertise: {
        lable: "Area Of Expertise",
        values: [
          "Leukemia and Other Blood Cancers",
          "Multiple Myeloma",
          "Blood and Marrow Stem Cell Transplantation",
        ],
      },
    },
    education: ["MD - Universidad Central De Venezuela"],
  },
  {
    path: "james-eastham",
    metaTitle: "About Dr.James A. Eastham - MSK India",
    metaDescription:
      "Dr.James A. Eastham, a urologic surgeon, is experienced in managing early and advanced prostate cancer. Learn more about Dr.Eastham here.",
    metaKeywords: "Dr.James A. Eastham, SURGICAL ONCOLOGIS",
    canonicalUrl: "/cancer-care/doctors/",
    drName: "Dr.James A. Eastham",
    specialist: "Surgical oncologist",
    designation: "MD, University of Southern California, Los Angeles",
    about:
      "Dr.Eastham is a surgeon who specializes in nerve-sparing radical prostatectomy for prostate cancer and salvage radical prostatectomy for recurrent prostate cancer. He has been in practice for the last 15 years, and he exclusively cares for men with prostate cancer. Dr.Eastham sees about 300 prostate cancer patients each year. He performs robotic-assisted radical prostatectomy and traditional open surgery for men with high-risk prostate cancer. His area of special interest includes treating men with high-risk prostate cancer who are not considered candidates for traditional open surgery or those previously treated with radiation therapy but whose cancer has returned. His clinical research focuses on improving surgical outcomes for prostate cancer, including cancer control and restoration of normal urinary and sexual function. During the course of his career, he has given more than 180 invited presentations at meetings and symposia in the US and around the world. He has published 300 peer-reviewed studies in prestigious national and international journals.",
    img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/james-eastham-mskcc.jpg",
    doctorInfo: {
      residency: {
        lable: "Residency",
        values: [
          "Urology - Los Angeles County - University of Southern California Medical Center",
        ],
      },

      fellowships: {
        lable: "Fellowships",
        values: ["Urologic Oncology - Baylor College of Medicine"],
      },
      boardOfCertification: {
        lable: "Board Of Certification",
        values: ["Urology"],
      },
      areaOfExpertise: {
        lable: "Area Of Expertise",
        values: [
          "Prostate Cancer",
          "Nerve-Sparing Techniques",
          "Salvage Radical Prostatectomy",
          "Robotic Prostatectomy",
        ],
      },
    },
    education: ["MD, University Of Southern California, Los Angeles"],
  },
];

export const FAQ_QUESTIONS: FaqQuestionType[] = [
  {
    question: "When should you get a remote second opinion?",
    answer: [
      "When you’re diagnosed with cancer, seeking a second opinion is an important step. It can help ensure that you have the most accurate diagnosis and the best care plan.",
    ],
  },
  {
    question: "Who should request a remote second opinion ? ",
    answer: [
      "A second opinion is recommended when:",
      [
        "You have received a new cancer or blood disorder diagnosis",
        "Your diagnosis is unclear",
        "Your condition or diagnosis has changed",
        "You are not responding to treatment as expected",
        "Your treatment plan has changed",
        "You want to explore other treatment option",
        "Your condition is rare",
        "Your doctor recommends surgery",
        "You want the peace of mind that you have an accurate diagnosis and treatment plan",
      ],
      "Note: Remote second opinions are appropriate for non-emergent cases where MSK can provide timely and meaningful treatment recommendations.",
    ],
  },
  {
    question: "What is included in a remote second opinion from MSK? ",
    answer: [
      "Our comprehensive remote second opinion package can include several types of services, depending on your cancer diagnosis and care needs. An MSK oncologist specializing in your disease will review your medical records, test results, and other materials. They’ll provide a detailed written opinion or participate in a live video conference with a local treating physician to discuss your diagnosis and care plan.",
      "We understand that not everyone needs a comprehensive second opinion. For people who require select services, our standalone consults include:",
      [
        "Pathology and radiology review",
        "Pathology and radiology review",
        "Customized written care plan",
        "Live video consultation",
        "Integrative care plan",
      ],
    ],
  },
  {
    question:
      "What does MSK need from me or my doctor to provide a remote opinion?",
    answer: [
      "A remote opinion from an MSK oncologist will be based on the quality and quantity of information provided. Our Chennai-based team will help you gather the necessary medical records which may include pathology slides, radiology images and any other relevant medical records. All documentation must be submitted in English.",
    ],
  },
  {
    question: "How long does it take to get a remote second opinion?",
    answer: [
      "Timing varies depending on the type of services requested.",
      [
        "Written or video consults: Approximately 1-2 weeks following MSK’s receipt of complete medical records",
        "Cases requiring separate pathology and/or radiology review: Approximately 2-3 weeks following MSK’s receipt of complete medical records",
      ],
      "Note: Timing varies depending on your case complexity and availability to participate in a live call with our India Center Team, who will review each patient’s medical history.",
    ],
  },
  {
    question: "Who will be providing the consultation?",
    answer: [
      "An MSK doctor in New York will provide the consultation. MSK in India is built on the concierge model of care. The team in India will coordinate with you, your family members, or your representative to schedule the clinically advisable services.",
    ],
  },
  {
    question:
      "Do patients need to travel to the center in Chennai for the consultation?",
    answer: [
      "No. MSK’s expert doctors and services in New York can be accessed from the comfort of your home or office. Some patients and their family members may choose to meet with MSK’s India Center team in person, but travel is not required.",
    ],
  },
];


export const Cancer_type_test: CancerTestType[] = [
  {
    path: "pediatric-cancers",
    title: "Pediatric (Childhood) Cancers",
    breadCrumbName: "Pediatric (Childhood) Cancers",
    about:
      "You will face many hard decisions if your child has been diagnosed with cancer. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your child's quality of life? We have tried to describe the common pediatric or childhood cancers and the available treatment options, which will help you decide.",
    info: [
      {
        heading: "What Are the Common Pediatric (Childhood) Cancers?",
        body: "Childhood cancers are rare, and advances in treatment have improved survival rates drastically. Still, pediatric cancer remains the second leading cause of death in children (between 1 and 14 years of age). Here are some of the major pediatric cancer types:",
        subItems: [
          {
            heading: "Pediatric Liver Tumors",
            body: "Hepatoblastoma (in younger children) and hepatocellular carcinoma (in older children) are the two most common malignant liver tumors seen in children. Other rare malignant liver tumors include angiosarcoma, biliary rhabdomyosarcoma, rhabdoid tumor, and undifferentiated sarcoma. The common benign liver tumors in children are mesenchymal hamartoma, infantile hemangioma, and focal nodular hyperplasia. Teratoma, a rare benign tumor, is also seen in infants. The complex nature of liver tumors in children makes them challenging to treat.",
          },
          {
            heading: "Pediatric Leukemia",
            body: "Leukemia is the commonest type of cancer found in children, and it accounts for almost 30 % of all childhood cancers. Mostly, children between 2 and 10 years are diagnosed with leukemia. This cancer develops from the tissues that produce blood cells. Thanks to recent advances, about 90 % of pediatric leukemia can be cured.",
          },
          {
            heading: "Pediatric Lymphoma",
            body: "When lymphocytes, the white blood cells in the immune system, multiply uncontrollably, they result in lymphoma. Lymphomas are more common in adults but still are the third most common type of cancer seen in children. The first two being leukemia and brain tumors. The good news is, around 90 % of children with lymphoma (Hodgkin lymphoma and non-Hodgkin lymphoma) lead a cancer-free life after treatment.",
          },
          {
            heading: "Pediatric Brain Tumors",
            body: " Abnormal growth of cells in the brain or spinal cord, which accounts for almost 20 % of all pediatric cancers, forms the brain and spinal cord tumors (also known as central nervous system or CNS tumors). Brain tumors in children can be benign or malignant.",
          },
          {
            heading: "Pediatric Sarcomas",
            body: "These cancers can develop in any of the supporting structures of the body, like the bones, muscles, and connective tissues. They commonly occur in children, teens, and young adults and can be very challenging to treat. The common pediatric sarcomas are:",
            subItems: [
              {
                heading: "Desmoplastic Small Round Cell Tumors (DSRCT) ",
                body: "Desmoplastic small round cell tumors (DSRCTs), also called small blue round cell tumors, develop in the pelvis or belly. They are commonly diagnosed in young men (10 and 30 years of age).",
              },
              {
                heading: "Ewing Sarcoma ",
                body: "It is a rare type of cancer that affects bones in children and teenagers. The bones that are commonly affected are ribs, pelvic bone, upper arm bones, and thighbone. This tumor was named after an MSK pathologist, James Ewing, in 1921.",
              },
              {
                heading: "Rhabdomyosarcoma",
                body: "Rhabdomyosarcoma or RMS is a rare cancer that forms in skeletal muscle tissue or hollow organs. It can occur at any age, but it is most often seen in children.",
              },
              {
                heading: "Osteosarcoma",
                body: "It is a type of cancer that originates in the cells that form bones and commonly affects the long bones of the legs and arms. Rarely it occurs in soft tissue present outside the bones.",
              },
            ],
          },
          {
            heading: "Pediatric Neuroblastomas",
            body: " It is rare cancer that develops in the sympathetic nervous system, a part of the peripheral nervous system. As sympathetic nervous system cells are concentrated in the adrenal glands (a gland present above the kidneys), neuroblastomas are often seen there. Neuroblastoma can also develop in babies' premature nerve cells, so it is most commonly seen in infants.",
          },
          {
            heading: "Pediatric Retinoblastoma ",
            body: " This is the most common type of cancer affecting the eyes in children. Most children with retinoblastoma survive and lead healthy lives. This cancer occurs most often in children younger than five. Retinoblastoma can occur in one eye (unilateral retinoblastoma) or both eyes (bilateral retinoblastoma).",
          },
          {
            heading: " Pediatric Kidney Tumors and Wilms' Tumor",
            body: "Wilms' tumor, renal cell carcinoma, rhabdoid tumor, renal medullary carcinoma, congenital mesoblastic nephroma, and clear cell sarcoma of the kidney are some of the common types of kidney tumors seen in young adults and infants. Amongst these, Wilms' tumor, otherwise called nephroblastoma, is the most common. This tumor is diagnosed more commonly in children between 2 and 5 years of age.",
          },
          {
            heading: "Pediatric Blood Disorders ",
            body: "Apart from blood cancers, various other noncancerous blood disorders can affect children. Examples include:",
            subItems: [
              "Inherited and acquired bone marrow failure syndromes like Fanconi anemia, paroxysmal nocturnal hemoglobinuria, and acquired aplastic anemia.",
              "Inherited hemoglobin disorders like beta-thalassemia and sickle cell disease.",
              "Primary immune deficiencies and white blood cell disorders.",
              "Autoimmune blood cell disorders.",
              "Inherited metabolic disorders.",
            ],
          },
          {
            heading: "Pediatric Histiocytosis",
            body: " It is a group of diseases that cause higher levels of histiocytes, a type of immune cell. Langerhans cell histiocytosis (LCH), a rare blood cancer, is the most common type of histiocytosis in children.",
          },
        ],
      },
      {
        heading: "What Are the Treatment Options for Pediatric Cancers?",
        body: [
          "For children, diagnosis and treatment for cancer at MSK involves a team of experts in radiology, pathology, surgery, chemotherapy, radiation therapy, and symptom management. Only a specially-trained multidisciplinary team of pediatric oncology physicians and specialists can properly treat such cancers. This approach at MSK ensures that your child receives the treatment, supportive care, and rehabilitation therapies that will give them the best chance at both survival and a better quality of life.",
          "The following are the treatment options for pediatric cancers:",
          [
            "Bone marrow transplantation and cellular therapies.",
            "Pediatric surgery",
            "Pediatric radiation therapy",
            "Pediatric chemotherapy.",
          ],
          "The most advanced treatment option - chimeric antigen receptor (CAR) T cell therapy is also available at MSK. CAR T is often used to treat children suffering from recurrent or persistent B-cell acute lymphoblastic leukemia (ALL). Your child can also benefit from the thousands of clinical trials ongoing at MSK that explore new therapies.",
        ],
      },
    ],
  },
  {
    path: "kidney-cancer",
    title: "Kidney Cancer (Renal Cell Cancer)",
    breadCrumbName: "Kidney Cancer",
    about:
      "You will face many hard decisions if a loved one or you have been diagnosed with kidney cancer. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    info: [
      {
        heading: "What Is Kidney Cancer?",
        body: "Kidney cancer or renal cell cancer is a cancerous tumor that develops in the kidneys, the two organs that are present on each side of your spine in the torso. Our kidneys' function is to turn the body's waste into urine, and they filter waste and excess salt from the blood. This urine then gets stored in the bladder through the ureter. With the help of the urethra that runs from the bladder, urine is discarded out. All these organs together form the urinary system. Try out MSK's Kidney Cancer - Risk of Recurrence Following Surgery (Prediction Tool) nomogram!",
      },
      {
        heading: "What Are the Types of Kidney Cancer?",
        subItems: [
          {
            heading: "Renal Cortical Tumors",
            body: "Almost 90 % of kidney tumors are this type. These tumors develop in the renal tubules, which are present in the main part of the kidney. The common subtypes include:",
            subItems: [
              {
                heading: "Clear-Cell Tumors",
                body: "Also called renal cell carcinoma, and it is seen in 60 to 65 % of patients diagnosed with kidney tumors.",
              },
              {
                heading: "Papillary Tumors",
                body: "Only 10 to 15 % of all kidney tumors are of this type. It begins as single or multiple tumors in either one or both kidneys. These tumors are linked to some genetic conditions like hereditary papillary renal carcinoma, renal cell carcinoma, and hereditary leiomyomatosis. Genetic testing can help identify such inherited syndromes. The two subtypes are:",
                subItems: [
                  {
                    heading: "Type 1",
                    body: "Grows slow and is more common.",
                  },
                  {
                    heading: "Type 2",
                    body: "More aggressive.",
                  },
                ],
              },
              {
                heading: "Chromophobe Tumors",
                body: "These are less aggressive and account for 5 to 10 % of kidney tumors. Chromophobe tumors can grow very big before they spread to other parts.",
              },
              {
                heading: "Oncocytoma",
                body: "These tumors are harmless as they pose no risk of spreading or cause life-threatening complications. Around 5 to 10 % of kidney tumors are this type.",
              },
              {
                heading: "Collecting Duct Tumors",
                body: "These are rare, less than 1 % of kidney tumors, aggressive, challenging to treat, and are usually seen in younger adults.",
              },
              {
                heading: "Unclassified Tumors",
                body: "These tumors are very aggressive, rare (3 to 5 %), and appear different microscopically than other kidney tumors.",
              },
            ],
          },
          {
            heading: " Transitional Cell or Urothelial Tumors",
            body: "These tumors develop in the renal pelvis (the part where renal tubules carry urine to the bladder from kidneys).",
          },
        ],
      },
      {
        heading: "What Are the Treatment Options for Kidney Cancer?",
        body: "MSK's kidney cancer experts treat all types of kidney cancer. Their goal is to diagnose and treat cancer accurately and to ensure the best possible quality of life. Surgery is the treatment of choice for people diagnosed with kidney cancer that has not spread to other organs. If that is not an option, then MSK interventional radiologists may be able to use minimally invasive techniques to destroy the tumor. For patients with kidney cancer that has metastasized, chemotherapy, focused radiation, and other treatment options are available at MSK. Patients also benefit from new chemotherapy drugs and other therapies through thousands of ongoing clinical trials at MSK, including comprehensive follow-up care and survivorship programs.",
      },
    ],
  },
  {
    path: "benign-blood-disorders",
    title: "Benign Blood Disorders",
    breadCrumbName: "Benign Blood Disorders",
    about:
      "Certain cancer treatment or some types of cancer puts cancer patients at risk for some blood disorders. These blood disorders or blood-related complications due to cancer treatment include blood clots, bleeding disorders, and anemia. These complications can make cancer treatment challenging. For patients with a pre-existing blood disorder, cancer treatments like chemotherapy may worsen it. MSK's blood specialists work hard to prevent blood conditions from becoming fatal and increase the patient's comfort during cancer therapy.",


    info: [
      {
        heading: "What Are the Common Benign Blood Disorders Seen During Cancer Treatment?",
        subItems: [
          {
            heading: "Blood Clots",
            body: "Blood clotting or coagulation prevents excess blood loss during injury and is a normal physiological process. Platelets (a type of blood cells) and clotting factors (special proteins in the blood) help in clot formation. Sometimes, abnormal clotting of blood can result in a deep vein thrombosis (DVT), where a blood clot forms in a deep vein (the majority of times in the leg), which can also get detached from the vein and travel to major organs like the lungs (pulmonary embolism) and stop blood flow. Cancer patients are more at risk of developing these dangerous blood clots, as the genetic changes that cause cancer also hyperactivate the clotting factors. Some chemotherapy also has similar effects on the clotting factors. Blood clotting or coagulation prevents excess blood loss during injury and is a normal physiological process. Platelets (a type of blood cells) and clotting factors (special proteins in the blood) help in clot formation. Sometimes, abnormal clotting of blood can result in a deep vein thrombosis (DVT), where a blood clot forms in a deep vein (the majority of times in the leg), which can also get detached from the vein and travel to major organs like the lungs (pulmonary embolism) and stop blood flow. Cancer patients are more at risk of developing these dangerous blood clots, as the genetic changes that cause cancer also hyperactivate the clotting factors. Some chemotherapy also has similar effects on the clotting factors."
          },
          {
            heading: "Anemia",
            body: "Anemia or low red blood cells (RBC) is a prevalent cancer complication and its treatment. This is because some chemotherapeutic drugs block the production of red blood cells in the bone marrow. In contrast, others inhibit erythropoietin production (a hormone that assists in the production of red blood cells) by the kidneys. Radiation therapy using high-dose radiation also damages bone marrow, resulting in anemia. Surgical removal of tumors that contain large blood vessels can also result in anemia due to excessive blood loss. At MSK, hematologists regularly check the patient's RBC levels and adjust the cancer care accordingly. Also, cancer patients are advised to consume a diet rich in iron and folic acid even during recovery, while severe anemia is managed with blood transfusions.",
          },
          {
            heading: "Thrombocytopenia",
            body: "Thrombocytopenia, a type of bleeding disorder, results in extremely low levels of platelets in the blood, increasing the risk of bleeding. This condition is also a common side effect of cancer treatment. Chemotherapy drugs that damage the bone marrow (the place where platelets are produced) can cause this. These drugs also escalate platelet destruction in the blood, spleen, or liver. MSK specialists are experts in the diagnosis and management of thrombocytopenia. They also care for other cancer-related bleeding disorders. In case you do not have sufficient clotting factors, the doctor might infuse clotting factors, blood plasma, or platelets.",
          },
        ],
      },
      {
        heading: "Can Blood-Related Complications Be Prevented?",
        body: "The first step to prevent blood-related complications during cancer treatment is a complete medical and family history. As people with a pre-existing or family history of blood disorders are more at risk, the doctor will check for any blood problems symptoms. They will also perform blood tests before starting cancer treatment to plan the cancer care accordingly. Even during the treatment, all your blood parameters will be checked regularly to diagnose and treat any abnormality at the earliest and prevent such blood conditions from becoming life-threatening. This is exactly what hematologists at MSK do to prevent these blood-related complications.",
      },
    ]
  },
  {
    path: "breast-cancer",
    title: "Breast Cancer",
    breadCrumbName: "Breast Cancer",
    about:
      "You will face many hard decisions if a loved one or you have been diagnosed with breast cancer. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    info: [
      {
        infoTitle: 'Female Breast Cancer',
        heading: "What Is Female Breast Cancer?",
        body: "In breast cancer, the cells in the breast grow out of control. When the genes in the cells of the breasts no longer work properly, the cells divide uncontrollably and form a tumor. Affected women may feel a lump under the breast skin, or some women do not realize it until the tumor shows up in a mammogram or breast X-ray. Most breast lumps are benign and do not spread to other parts of the body, and are not fatal. Tumors that are malignant, if left untreated, can invade and spread or metastasize to the axillary lymph nodes or other organs. <br/> The risk for breast cancer increases with age, and it is diagnosed mostly (80 %) in women older than 50. Most of them do not have any other risk factors. People with a family history of breast cancer are two to three times more likely to develop breast cancer. 5 to 10 % of breast cancers are linked to hereditary gene mutations (commonly BRCA1 and BRCA2 gene mutations). Try out MSK's Breast Cancer (Prediction Tool) nomogram!",
      },
      {
        heading: "What Are the Types of Female Breast Cancer",
        subItems: [
          {
            heading: " Ductal Carcinoma ",
            body: "Most breast cancers are ductal carcinoma, which affects the milk ducts.",
          },
          {
            heading: "Lobular Carcinoma ",
            body: "The other types develop in the milk-producing lobules and are referred to as lobular carcinoma.",
          },
          {
            heading: " Breast Sarcoma ",
            body: "Sometimes, cancer develops in the connective tissue of the breast, known as sarcoma.",
          },
          {
            heading: "Paget’s Disease of the Nipple ",
            body: "Tumor forms in the skin covering the nipples.",
          },

        ],
      },
      {
        heading: "What Are the Treatment Options for Female Breast Cancer?",
        body: "Biopsy from the breast lump is analyzed in a lab, and it is determined if the tumor is sensitive to the female hormones estrogen and progesterone, which can trigger breast cancer. Certain genes or proteins, such as HER2, also affect cancer cell growth. Once MSK experts have the needed information, they might suggest surgery, chemotherapy, radiotherapy, or a combination of therapies. Patients can also benefit from the thousands of clinical trials ongoing at MSK that explore new therapies.",
      },
      {
        infoTitle: 'Male Breast Cancer',
        heading: "What Is Male Breast Cancer?",
        body: "Even though rare, breast cancer affects men as well. The risk of a man developing breast cancer is 1 in 1,000. In the US, around 2,000 new cases of male breast cancer are diagnosed every year. It is commonly diagnosed in men between the ages of 65 and 70. As most men are not aware of the possibility of breast cancer, they often seek medical help late and at later stages of cancer, which affects the prognosis. Male and female breast cancers are similar in many features, but there are some aspects where they differ.",
      },
      {
        heading: "What Are the Types of Male Breast Cancer?",
        body: "The common types of male breast cancer include:",
        subItems: [
          {
            heading: "  Invasive Breast Carcinoma ",
            body: "The subtypes are -",
            subItems: [
              {
                heading: "Invasive Ductal Carcinoma (IDC)",
                body: "starts in the breast duct and can then spread to the duct wall."
              },
              {
                heading: "Invasive Lobular Carcinoma ",
                body: "which is less common in men and develops in the milk-producing glands."
              }
            ]
          },
          {
            heading: "Ductal Carcinoma in Situ (DCIS)",
            body: "Otherwise called intraductal carcinoma, DCIS generally does not spread to other parts of the body and are confined to the breast ducts.",
          }

        ],
      },
      {
        heading: "What Are the Treatment Options for Male Breast Cancer?",
        body: "All cancer patients at MSK are offered compassionate and personalized care from their experts. Specialists experienced in surgery, chemotherapy, radiation therapy, rehabilitation, and maintaining the quality of life will work closely to develop a customized treatment plan to ensure the best outcome possible.",
      },
    ]
  },
];
