
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
  subHead?:subHeading[];
  values: string[];
};
export type subHeading={
  lable:string
  values:string[]
}

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

export type CancerTestType = {
  path: string;
  metaTitle: string,
  metaDescription:string,
  metaKeywords: string,
  canonicalUrl: string,
  title: string;
  breadCrumbName: string;
  about: string;
  info: CancerInfoType[];
};

export type CancerSubItemType = {
  heading: string;
  body?: string;
  subItems?: CancerSubItemType[] | string[]
};

export type CancerInfoType = {
  infoTitle?: string,
  heading?: string;
  body?: string | (string[] | string)[];
  bodyTwo?:string,
  link?:string,
  linkPath?:string,
  subItems?: CancerSubItemType[]| string[];
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
    description: "Appendix cancer or appendiceal cancer is the type of gastrointestinal cancer that originates in the appendix, a small vestigial organ present near the area where the small and large intestine meet. As humans can live everyday life without this organ, and its function is still unknown, the appendix is often removed when it is infected or inflamed. This cancer does not result in any symptoms unless they metastasize to other parts of the body and are often diagnosed accidentally.",
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
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/doctors/",
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
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/doctors/",
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
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/doctors/",
    drName: "Dr. Lisa DeAngelis",
    specialist: "Neuro-Oncologist",
    designation:
      "Physician-in-Chief, Memorial Hospital, Lillian Rojtman Berkman Chair in Honor of Jerome B. Posner",
    img: "https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-1.jpg",
    about:
      "Dr. DeAngelis is a neuro-oncologist who has more than 30 years of experience in treating patients with brain tumors and associated complications, such as cognitive impairment and strokes. As the Physician-in-Chief and Chief Medical Officer at Memorial Sloan Kettering, Dr. DeAngelis oversees all clinical, research, and medical education efforts. She is also a co-founder and member of the Brain Tumor Center at Memorial Sloan Kettering. She has conducted and led various national trials of investigational drugs used in the treatment of primary central nervous system lymphoma and new brain tumor treatments.",
    doctorInfo: {
      residency: {
        lable: "",
        values: [],
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
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/doctors/",
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
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/doctors/",
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
        subHead:[
          {
            lable:"Head and Neck Surgery for:",
            values:[
            "Mouth",
            "Throat",
            "Larynx",
            "Sinuses",
            "Skull base",
            "Thyroid",
            "Salivary glands",
            "Skin",
            "Soft tissues",
            "Bone tumors"]
          }
        ],
        values: []
        
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
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/doctors/",
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
          "Radiation Oncology - University of Virginia"
        ],
      },

      fellowships: {
        lable: "Fellowships",
        values: ["Radiation Oncology"],
      },
      boardOfCertification: {
        lable: "",
        values: [],
      },
      areaOfExpertise: {
        lable: "Area Of Expertise",
        subHead:[
          {
            lable:"Radiation therapy for:",
            values:[
              "Anal cancer","Gallbladder cancer","Liver cancer","Bile duct cancer","Gastric cancer","Pancreatic cancer"
            ]
          }
        ],
        values: [
          
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
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/doctors/",
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
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/doctors/",
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
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/doctors/",
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
        "You want to explore other treatment options",
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
        "Genetic sequencing and analysis of cancer",
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
    metaTitle: "Pediatric Cancer Treatment | MSKCC-India",
    metaDescription:
      "Find information on pediatric or childhood cancer types, the latest treatment options available at MSK, and the team of expert oncologists.",
    metaKeywords: "Pediactric Cancers",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/pediatric-cancers",
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
    metaTitle: "Kidney Cancer (Renal Cell Cancer)",
    metaDescription:
      "You will face many hard decisions if a loved one or you have been diagnosed with kidney cancer. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    metaKeywords: "Kidney Cancer",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/",
    
    title: "Kidney Cancer (Renal Cell Cancer)",
    breadCrumbName: "Kidney Cancer",
    about:
      "You will face many hard decisions if a loved one or you have been diagnosed with kidney cancer. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    info: [
      {
        heading: "What Is Kidney Cancer?",
        body: "Kidney cancer or renal cell cancer is a cancerous tumor that develops in the kidneys, the two organs that are present on each side of your spine in the torso. Our kidneys' function is to turn the body's waste into urine, and they filter waste and excess salt from the blood. This urine then gets stored in the bladder through the ureter. With the help of the urethra that runs from the bladder, urine is discarded out. All these organs together form the urinary system. ",
      link:"Try out MSK's Kidney Cancer - Risk of Recurrence Following Surgery (Prediction Tool) nomogram!",
      linkPath:"https://www.mskcc.org/nomograms/renal"
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
    metaTitle: "Benign Blood Disorders Prevention | MSKCC-India",
    metaDescription:
      "Find information on the common blood disorders that occur due to cancer treatment and the latest treatment and preventive options available at MSK.",
    metaKeywords: "Benign Blood Disorders Cancer Treatment",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/benign-blood-disorders",
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
            body: "Blood clotting or coagulation prevents excess blood loss during injury and is a normal physiological process. Platelets (a type of blood cells) and clotting factors (special proteins in the blood) help in clot formation. Sometimes, abnormal clotting of blood can result in a deep vein thrombosis (DVT), where a blood clot forms in a deep vein (the majority of times in the leg), which can also get detached from the vein and travel to major organs like the lungs (pulmonary embolism) and stop blood flow. Cancer patients are more at risk of developing these dangerous blood clots, as the genetic changes that cause cancer also hyperactivate the clotting factors. Some chemotherapy also has similar effects on the clotting factors. \nDuring cancer treatment at MSK, patients who develop blood clots have access to various treatment options. Specialists at MSK's Anticoagulation Clinic are experienced in providing a combination of blood clot treatments, such as blood thinners or anticoagulants (Heparin), inferior vena cava filter (a special filter is inserted into the large vein that delivers blood to the heart from the legs), thrombolytics (tissue plasminogen activator), and thrombectomy (clot removal surgery). Hematologists at MSK are also developing a new oral anticoagulant drug, which may cause fewer blood-related complications in the future."
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
    metaTitle: "Breast Cancer Treatment | MSKCC-India",
    metaDescription:
      "Find information on breast cancer types, the latest treatment options available at MSK, and the team of expert oncologists.",
    metaKeywords: "Breast Cancer Treatment",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/breast-cancer",
    title: "Breast Cancer",
    breadCrumbName: "Breast Cancer",
    about:
      "You will face many hard decisions if a loved one or you have been diagnosed with breast cancer. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    info: [
      {
        infoTitle: 'Female Breast Cancer',
        heading: "What Is Female Breast Cancer?",
        body: "In breast cancer, the cells in the breast grow out of control. When the genes in the cells of the breasts no longer work properly, the cells divide uncontrollably and form a tumor. Affected women may feel a lump under the breast skin, or some women do not realize it until the tumor shows up in a mammogram or breast X-ray. Most breast lumps are benign and do not spread to other parts of the body, and are not fatal. Tumors that are malignant, if left untreated, can invade and spread or metastasize to the axillary lymph nodes or other organs.  The risk for breast cancer increases with age, and it is diagnosed mostly (80 %) in women older than 50. Most of them do not have any other risk factors. People with a family history of breast cancer are two to three times more likely to develop breast cancer. 5 to 10 % of breast cancers are linked to hereditary gene mutations (commonly BRCA1 and BRCA2 gene mutations). Try out MSK's Breast Cancer (Prediction Tool) nomogram!",
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
  {
    path: "head-and-neck-cancer",
    metaTitle:  "Head and Neck Cancer Treatment | MSKCC-India",
    metaDescription:"Find information on head and neck cancer types, the latest treatment options available at MSK, and the team of expert oncologists.",
    metaKeywords: "Head and Neck Cancer Treatment",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/head-and-neck-cancer",
      title: "Head & Neck Cancer (Oral Cancer)",
      breadCrumbName: "Head & Neck Cancer (Oral Cancer)",
      about:"You will face many hard decisions if a loved one or you have been diagnosed with head and neck cancer. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
      info:[
        {
          heading:"What Is Head and Neck Cancer?",
          body:"Head and neck cancers include cancers that start in several areas of the head and throat, such as the sinuses, tongue, gums, roof of the mouth, larynx, lips, and salivary glands, but not including cancers of the brain and eyes. The common cancers that occur in the head and neck region include:",
          subItems:[
            {
              heading:"Laryngeal Cancer",
              body:"This cancer originates in the larynx or voice box. It is the second most common type of head and neck cancer."
            },
            {
              heading:"Mouth Cancer",
              body:" Mouth cancer, also called oral cavity cancer, originates in the lips or the mouth."
            },
            {
              heading:"Tongue Cancer ",
              body:"The cells that line the tongue grow out of control and form a tumor."
            },
            {
              heading:"Nasal Cavity and Sinus Cancer ",
              body:"The cells in and surrounding the nose grow and multiply uncontrollably and form a tumor.."
            },
            {
              heading:"Salivary Gland Cancer",
              body:"TThis cancer originates in the glands that produce saliva. It is a rare type of head and neck cancer where the salivary glands' cells grow out of control and form tumors."
            },
            {
              heading:"Skin Cancer ",
              body:"Skin cancer commonly develops in areas of the skin that are exposed to the sun. The three most common types of skin cancer are basal cell carcinoma (BCC), squamous cell carcinoma (SCC), and melanoma."
            },
            {
              heading:"Throat Cancer",
              body:" A form of head and neck cancer that originates in the pharynx or throat, larynx or the voice box, vocal cords, or the tonsils."
            },
            {
              heading:"Thyroid Cancer",
              body:"This cancer begins in the small gland called the thyroid, located in the front of the neck and below the larynx. Noncancerous or benign tumors can also form in the head and neck region—for example, parathyroid tumors and salivary glands tumors."
            },
          ]
        },
        {
          heading:"What Are the Treatment Options for Head and Neck Cancer?",
          subItems:[
            {
              heading:"Surgery",
              body:"Surgery is the typical treatment for head and neck cancer. Minimally invasive procedures, such as laser microsurgery, robotic approaches, and Mohs surgery, are enough to remove some tumors. But others need complex head and neck cancer operations. Careful preparation and planning are a must, and MSK's surgeons use specialized techniques to preserve the key functions (speech and swallowing) and appearance. This is the benefit of getting head and neck surgery done by surgeons who are board-certified in head and neck surgery and have years of experience treating such types of cancer."
            },
            {
              heading:"Radiation Therapy",
              body:" Radiation therapy for head and neck cancer can cure many patients. Radiation oncologists at MSK use advanced technologies to treat these cancers. Intensity-modulated radiation therapy and proton therapy are the most effective treatments for head and neck cancer. These techniques do not affect the patient's ability to eat or swallow and other such side effects."
            },
            {
              heading:"Immunotherapy",
              body:" It is the most promising cancer therapy available today for people with advanced head and neck cancer. Immunotherapy uses the patient's immune system to fight off cancer. MSK scientists and doctors work closely to help develop new treatment modalities for patients who come to MSK for immunotherapy treatment. Not everyone can benefit from immunotherapy, especially if cancer has recurred after standard treatment. Such patients can get more options with clinical trials. Such trials give you the opportunity to try a new treatment option that is not available elsewhere."
            },
            {
              heading:"Genomic Testing for Head and Neck Cancer",
              body:" In personalized medicine, the cells from a biopsy are screened for any genetic mutations. These gene mutations are linked to the type of cancer the patient has. Specific cancer drugs are more effective than others against cancer with specific gene mutations. This genomic testing can help determine the most effective therapy for a particular patient. Patients with advanced cancers (stage III or stage IV) and recurrent head and neck cancer have new treatment options with such advancements. Memorial Sloan Kettering also offers a genomic-sequencing test called MSK-IMPACT™. This test identifies genetic mutations and other abnormalities associated with specific cancer. MSK-IMPACT can help the doctors rule out treatments that might not work and also recommend clinical trials designed to target those mutations."
            },
            {
              heading:"HPV-Associated Head and Neck Cancer",
              body:"The majority of cases of head or neck cancers are linked to alcohol and tobacco use, but infection with the human papillomavirus (HPV) is becoming a leading cause. HPV-associated head and neck cancers usually affect the tonsils and other areas of the throat. The only positive to this is patients with HPV-positive tumors typically respond well to treatment and have a better prognosis. They might also require a less-intensive course of treatment, reducing side effects.In case you have been diagnosed with head and neck cancer related to HPV, it is best to find out if you can benefit from a less-intensive treatment plan at MSK."
            },
        

          ]
        }

       ]
        
  },

  {
    path: "lung-cancer",
    metaTitle: "Lung Cancer Treatment | MSKCC-India",
    metaDescription:
      "Find information on lung cancer types, the latest treatment options available at MSK, and the team of expert oncologists.",
    metaKeywords: "Lung Cancer Treatment",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/lung-cancer",
    title: "Lung Cancer",
    breadCrumbName: "Lung Cancer",
    about:"You will face many hard decisions if a loved one or you have been diagnosed with lung cancer. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    info:[
      {
        heading:"What Is Lung Cancer?",
        body:"Lung cancer, the abnormal growth of cells in the lungs and bronchi (the airways that carry air into the lungs), is amongst the most commonly diagnosed cancers. Smokers, especially female smokers, are at a greater risk for the disease, but it can be seen in people who have never smoked too. Cancer from the lungs can spread to lymph nodes or organs like the brain, and cancer from other organs can also spread to the lungs. Try out MSK's Lung Cancer - Risk Assessment (Prediction Tool) nomogram!",
        
      },
      {
        heading:"What Are the Types of Lung Cancer?",
        body:"The two main types are:",
        subItems:[
          {
            heading:"Small Cell Lung Cancer (SCLC)",
            body: " Also called â€œoat cellâ€� cancer, as the cells look like oats under the microscope. This cancer usually develops in the cells that surround the bronchi (neuroendocrine cells), which then usually spreads to the lymph nodes and other parts. SCLC commonly affects smokers, and it accounts for around 13 % of lung cancers. The two types of SCLC include:",
            subItems:[
              "Small cell carcinoma (oat cell cancer).","Combined small cell carcinoma."
            ]
          },
          {
            heading:"Non-Small Cell Lung Cancer ",
            body:"It is the most common type of lung cancer and is the cause of almost 9 out of every 10 lung cancer cases. It is a slow-growing cancer when compared to SCLC. The three main subtypes are:",
            subItems:[
              {
                heading:"Adenocarcinoma of the Lung ",
                body:" It originates in the cells that line the tiny air sacs in the lungs (alveoli)."
              },
              {
                heading:"Squamous Cell Lung Cancer ",
                body:"This originates in the center of the lungs, more precisely in the cells that line the bronchial tubes."
              },
              {
                heading:"Large-Cell Undifferentiated Carcinoma ",
                body:"Tumors that do not belong to either of the above two types are named this. It accounts for about 5 % of non-small cell lung cancers."
              }
            ]
          }
        ]
      },
      {
      heading:"What Are the Treatment Options for Lung Cancer?",
      body:"If the specialist suspects lung cancer, a biopsy will be performed. Here a tissue sample from the lung growth will be obtained through needle biopsy, bronchoscopy, or surgery. The cells are then examined for cancerous changes, and the tumor will be typed and staged. All cancer patients at MSK are offered compassionate and personalized care from their experts. Specialists experienced in surgery, chemotherapy, radiation therapy, rehabilitation, and maintaining the quality of life will work closely to develop a customized treatment plan to ensure the best outcome possible. Surgeons at MSK perform more than 1,200 surgeries for lung cancer every year, with the lowest complication rates. Patients benefit from new chemotherapy drugs through thousands of ongoing clinical trials at MSK."
      }

    ]

  },
  {
    path: "gastric-and-esophageal-cancer",
    metaTitle: "Gastric and Esophageal Cancer Treatment | MSKCC-India",
    metaDescription:
      "Find information on gastric and esophageal cancer types, the latest treatment options available at MSK, and the team of expert oncologists.",
    metaKeywords: "Gastric and Esophageal Cancer Treatment",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/gastric-and-esophageal-cancer",
    title: "Gastric and Esophageal Cancer",
    breadCrumbName: "Gastric and Esophageal Cancer",
    about:"You will face many hard decisions if a loved one or you have been diagnosed with gastric (stomach) or esophageal cancer. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    info:[
      {
        infoTitle:"Gastric Cancer",
        heading:"What Is Gastric Cancer?",
        body:"Cancer that originates or develops in the lining of the stomach is called gastric or stomach cancer. It usually grows slowly over several years before resulting in symptoms. This results in cancer getting diagnosed at a later stage, which usually affects the prognosis. Gastric cancer can develop at any part of the stomach, but mostly, they form in the main part (stomach body) or the esophagus (the part that carries food to the stomach when you swallow. ",
        link:"Try out MSK's Gastric Cancer - Disease-Specific Survival Following Surgery (Prediction Tool) nomogram!",
        linkPath:"https://www.mskcc.org/nomograms/gastric",
       
     
      },
      {
        
          heading:"What Are the Types of Gastric Cancer?",
          body:"Adenocarcinoma - Almost 95 % of people develop adenocarcinoma, which starts in the tissues that line the stomach. The three types of adenocarcinoma are:",
          subItems:[
            {
              heading:" Non-cardia (Distal) Stomach Cancer",
              body:"This type is associated with long-term infection with H.pylori (Helicobacter pylori) or long periods of inflammation or irritation in the stomach’s lower part. It is more commonly seen in people living in developing countries.",
              subItems:[
                {
                  heading:"Proximal Stomach Cancer",
                  body:"The first part of the stomach that is connected to the esophagus is commonly affected. Proximal stomach cancer is common in the US and affects obese people and people with gastroesophageal reflux disease (GERD).",
                },
                {
                  heading:"Diffuse Stomach Cancer",
                  body:"It is an aggressive type of cancer that develops rapidly in the cells that line the stomach wall. As it does not form a growth or a mass, it is challenging to diagnose. This type commonly affects younger people with a family history or genetic mutations."
                },
                {
                  heading:"Gastrointestinal Stromal Tumors",
                  body:"Cancer that originates in the connective tissue or stomach muscle. Try out MSK's Gastrointestinal Stromal Tumor - Survival Without Recurrence Following Surgery (Prediction Tool) nomogram!"
                }
                
              ]
            },
            {
              heading:" Carcinoid Tumors",
              body:"Tumor from the stomach’s hormone-producing cells."
            },
            {
              heading:" Lymphoma",
              body:"Cancer that develops in the stomach’s immune cells."
            }
          ]
        
      },
      {
        heading:"What Are the Treatment Options for Gastric Cancer?",
        body:"The location of stomach cancer determines the treatment plan. Surgery is recommended, along with other treatment options before or after the surgery. MSK's gastric cancer experts offer complete cancer care for people with all types of stomach cancer. These experts see more patients with this type of cancer than any other cancer center in the US. The advanced and accurate staging of gastric cancer and improved surgical techniques, diagnosis, treatment, and prognosis have significantly improved. Depending on the test results, the doctor might suggest surgery, chemotherapy, radiotherapy, or a combination of therapies. Patients can also benefit from the thousands of clinical trials ongoing at MSK that explore new therapies."
      },
      {
        infoTitle:"Esophageal Cancer",
        heading:"What Is Esophageal Cancer?",
        body:"Instead of the stomach body, esophageal cancer develops inside the 10-inch hollow tube that carries food to the stomach called the esophagus. When the cells that line this tube start growing out of control, a tumor can form. The cells in the innermost layer mostly undergo a cancerous transformation, which can grow and multiply uncontrollably and invade the lymph nodes and other organs. Esophageal cancer is rare, but more people are developing the adenocarcinoma type in the past few years.",
        
      },
      {
        
          heading:"What Are the Types of Esophageal Cancer?",
          subItems:[
            {
              heading:"Adenocarcinoma ",
              body:"t is the most common type of esophageal cancer in the US, and it accounts for almost 50 % of all new cases. This cancer begins in the glandular cells present in the lining of the esophagus and most commonly in the lower end of the esophagus and the upper part of the stomach. The recent increase in esophageal adenocarcinoma is believed due to an increase in the number of gastroesophageal reflux disease (GERD) cases, where the acid and stomach content move up into the esophagus repeatedly, resulting in chronic inflammation."
            },
            {
              heading:" Squamous Cell Carcinoma",
              body:" It is the second most common type of esophageal cancer, which originates in the thin and flat cells (squamous cells) that line the inside of the esophagus. This type is linked to smoking and alcoholism."
            },
            {
              heading:"  Small Cell Carcinoma ",
              body:"A rare type of esophageal cancer that begins in neuroendocrine cells (cells that releases hormones in response to nerve signals)."
            }
          ],
        },
        {
          heading:"What Are the Treatment Options for Esophageal Cancer?",
          body:"MSK's esophageal cancer experts use various methods, such as physical examination, imaging tests (CT scan, PET scan), and endoscopy, to diagnose and stage esophageal cancer. The type of surgery will be decided based on the cancer type and stage and the patient’s general health. Depending on the results, the doctor might suggest surgery, chemotherapy, radiotherapy, or a combination of therapies. Patients can also benefit from the thousands of clinical trials ongoing at MSK that explore new therapies. Patients with conditions that increase esophageal cancer risk, such as Barrett’s esophagus, get screened and monitored regularly for cancerous changes by MSK experts. Endoscopic or minimally invasive therapy is also available for precancerous and early-stage cancerous conditions."
        }
      
    ]

  },
  {
    path: "liver-biliary-and-pancreatic-cancer",
    metaTitle: "Liver, Biliary, and Pancreatic Cancer Treatment | MSKCC-India ",
    metaDescription:
      "Find information on liver, biliary, and pancreatic cancer types, the latest treatment options available at MSK, and the team of expert oncologists.",
    metaKeywords: "Liver, Biliary, and Pancreatic Cancer Treatment",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/liver-biliary-and-pancreatic-cancer",
    title: "Liver, Biliary, and Pancreatic Cancer",
    breadCrumbName: "Liver, Biliary, and Pancreatic Cancer",
    about:"You will face many hard decisions if a loved one or you have been diagnosed with liver, biliary (bile duct cancer or cholangiocarcinoma), or pancreatic cancer. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    info:[
      {
        infoTitle:"Liver Cancer",
        heading:"What Is Liver Cancer?",
        body:"Liver cancer is cancer that develops in the liver, the largest internal organ located below the right lung. Hepatocytes are the cells present in the liver, and these cells are responsible for breaking down and storing nutrients and removing waste from the body. Our liver also produces bile, a digestive fluid or enzyme, and also makes proteins that stop bleeding. Than primary liver cancers (cancer that starts in the liver), liver metastases (liver cancer that has spread from some other body part) are more common. But nowadays, the number of people with primary liver cancer is increasing in the US, as more people are affected by liver diseases that increase the risk of liver cancer, like hepatitis C.",
        link:"Try out MSK's Liver Cancer - Risk of Perioperative Transfusion in Hepatectomy (Prediction Tool) nomogram!",
        linkPath:"https://www.mskcc.org/nomograms/liver",
      },
      {
        
          heading:"What Are the Types of Liver Cancer?",
          subItems:[
            {
              heading:"Hepatocellular Carcinoma",
              body:"It is the most common primary liver cancer that begins in hepatocytes. Usually, a single tumor forms that spread to other organs eventually. Excessive alcohol consumption, chronic hepatitis B and C infection, nonalcoholic fatty liver disease, and too much iron in the body are some risk factors."
            },
            {
              heading:" Intrahepatic Cholangiocarcinoma ",
              body:"It is the second most common type of primary liver cancer that starts in the bile duct (the tube that delivers bile). People infected with hepatitis B or C virus, those with primary sclerosing cholangitis (a condition resulting in inflammation and scarring of the bile ducts), and nonalcoholic fatty liver disease are at an increased risk of developing this type of liver cancer."
            },
            {
              heading:"Fibrolamellar-Hepatocellular Carcinoma (FLL-HCC)",
              body:"Otherwise called fibrolamellar carcinoma. It is a rare type of liver cancer that develops in young adults (ages between 20 and 30 years). It is less aggressive than the other forms.",
      
            },
            {
              heading:" Angiosarcomas, Hemangiosarcomas, and Hemangioendotheliomas ",
              body:" Tumors that form in the inner lining of blood vessels. They are curable and almost always seen in infants."
            },
            {
              heading:"Hepatoblastomas",
              body:" These curable liver tumors consist of tissue that looks like fetal liver, bile duct cells, or mature liver cells when seen under the microscope."
            },
            {
              heading:" Benign Liver Tumors",
              body:"Non-cancerous tumors in the liver do not cause symptoms and are diagnosed accidentally. Adenomas, hemangiomas, liver cysts, and focal nodular hyperplasias are some of the most common benign liver tumors."
            },
            
          ]
        },
        {
          heading:"What Are the Treatment Options for Liver Cancer?",
          body:"All cancer patients at MSK are offered compassionate and personalized care from their experts. Specialists experienced in surgery, chemotherapy, radiation therapy, rehabilitation, and maintaining the quality of life will work closely to develop a customized treatment plan to ensure the best outcome possible. Doctors at MSK have treated more than 5,000 liver cancer patients in the last 10 years. Patients also benefit from new chemotherapy drugs and other therapies through thousands of ongoing clinical trials at MSK."
        }
      ,
      {
        infoTitle:"Biliary Cancer (Bile Duct Cancer or Cholangiocarcinoma)",
        heading:"What Is Biliary Cancer?",
        body:"Biliary cancer or cholangiocarcinoma is cancer that forms in the thin bile ducts that carry the digestive enzyme bile. These ducts serve as the connection between the gallbladder and small intestine. Biliary cancer is common in people older than 50 but can occur at any age. It is a rare and extremely challenging cancer to treat.",
      
      },
      {

        heading:"What Are the Types of Biliary Cancer?",
        subItems:[
          {
            heading:"Intrahepatic Cholangiocarcinoma ",
            body:"This develops in the parts of the bile ducts that are present within the liver, which is why it is also classified under liver cancer."
          },
          {
            heading:" Hilar Cholangiocarcinoma ",
            body:" Also called perihilar cholangiocarcinoma. It is when cancer develops in the bile ducts that exit the liver."
          },
          {
            heading:" Distal Cholangiocarcinoma",
            body:" This biliary cancer develops in the bile duct closest to the small intestine."
          }
        ]
      },
      {
        
          heading:"What Are the Treatment Options for Biliary Cancer?",
          body:"Surgery to remove the bile duct and surrounding lymph nodes is the treatment of choice for bile duct cancer that is localized and has not metastasized. In some cases, more extensive surgery is necessary with other treatments, such as radiation or chemotherapy, or if the tumor is inoperable or surgery is contraindicated due to the patient's general health. All cancer patients at MSK are offered compassionate and personalized care from their experts. Specialists who are experienced in surgery, chemotherapy, radiation therapy, rehabilitation, and maintaining the quality of life will work closely to come up with a customized treatment plan to ensure the best outcome possible. Patients can also benefit from new chemotherapy drugs and other therapies through thousands of ongoing clinical trials at MSK."
        
      },
      {
        infoTitle:"Pancreatic Cancer",
        heading:"What Is Pancreatic Cancer?",
        body:"Pancreatic cancer originates in the cells of the pancreas, the small gland located in the abdomen behind the stomach. Our pancreas releases digestive enzymes and produces hormones that regulate blood sugar levels. Both cancerous and noncancerous tumors can occur in the pancreas. As pancreatic cancer does not cause symptoms unless it spreads to other organs, it is rarely detected at the early stages when it is most curable.",
    
      },
      {
        heading:"What Are the Types of Pancreatic Cancer?",
        subItems:[
          {
            heading:"Exocrine Pancreatic Cancer ",
            body:" The glands that produce enzymes that aid in digestion are called exocrine glands, and the tumors that develop from these glands are called exocrine pancreatic cancer. The common subtypes include:"
          ,subItems:[
            {
              heading:"Adenocarcinomas"
            },{
              heading:"Adenosquamous carcinomas"
            }
            ,{
              heading:"Acinar cell carcinoma."
            },
            {
              heading:"Ampullary cancer"
            },
            {
              heading:"Giant cell carcinomas."
            }
          ]
          },
          {
            heading:"Endocrine Pancreatic Cancer",
            body:" The islets of Langerhans (glands formed by clusters of cells) release the insulin and glucagon hormones and are called endocrine glands. Endocrine pancreatic cancer develops from these endocrine glands. The common subtypes include:"
            ,subItems:[
              {
                heading:"Insulinomas"
              },{
                heading:"Glucagonomas"
              }
              ,{
                heading:"VIPomas"
              },
              {
                heading:"Gastrinomas"
              },
              {
                heading:"Somatostatinomas"
              }
            ]
          }
          
        ]
      },
      {
        heading:"What Are the Treatment Options for Pancreatic Cancer?",
        body:"If you have been diagnosed with pancreatic cancer, the doctor will then perform various tests to identify if cancer has spread through a PET scan. Depending on the results, cancer will be staged, and the treatment plan will be formed. All cancer patients at MSK are offered compassionate and personalized care from their experts. MSK's pancreatic cancer team is one of the US's largest and busiest clinical and research practices. Specialists experienced in surgery, chemotherapy, radiation therapy, rehabilitation, and maintaining the quality of life will work closely to develop a customized treatment plan to ensure the best outcome possible. MSK surgeons perform almost 300 pancreatic cancer surgeries (traditional as well as minimally invasive) every year. Patients also benefit from new chemotherapy drugs and other therapies through thousands of ongoing clinical trials at MSK."
      }

    ]

  },
  {
    path: "colorectal-cancer",
    metaTitle: "Colorectal Cancer Treatment | MSKCC-India",
    metaDescription:
      "Find information on colorectal cancer types, the latest treatment options available at MSK, and the team of expert oncologists.",
    metaKeywords: "Colorectal Cancer Treatment",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/colorectal-cancer",
    title: "Colorectal Cancer",
    breadCrumbName: "Colorectal Cancer",
    about:"You will face many hard decisions if a loved one or you have been diagnosed with colorectal cancer. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    info:[
      {
        heading:"What Is Colorectal Cancer?",
        body:"Cancer that develops in the inner lining of the large intestine (colon) or rectum present in the lower portion of the digestive tract is called colorectal cancer. It is estimated that 1 in 21 men and 1 in 23 women in the US will develop colorectal cancer in their lifetime. Advanced screening techniques and improved treatments have helped in the efficient screening of this cancer in susceptible people, and the death rate due to colorectal cancer is declining. Most cancers of the colon or rectum start as a growth, called a polyp, in the tissue lining these organs. If left untreated, some polyps, not all, become cancerous over many years. Try out MSK's various Colorectal Cancer (Prediction Tools) nomograms!"

      },{
        heading:"What Are the Types of Colorectal Cancer?",
        subItems:[
          {
            heading:"Adenocarcinoma",
            body:"It is cancer that develops in the mucus-producing cells present inside the colon and rectum. This is the most common type of colorectal cancer."
          },
          {
            heading:" Gastrointestinal Carcinoid Tumors ",
            body:"These start from special hormone-making cells in the intestine."

          },
          {
            heading:"Gastrointestinal Stromal Tumors (GISTs) ",
            body:"These tumors develop in the interstitial cells of Cajal, which are special cells in the wall of the colon, some of which are benign."

          },
          {
            heading:"Lymphomas",
            body:"Tumors of the immune system cells can also develop in the colon, rectum, or other organs."

          },
          {
            heading:"Sarcomas",
            body:"Tumors that develop in the soft tissues, such as blood vessels, muscles, or connective tissues in the colon and rectum."
          }
        ]
      },
      {
        heading:"What Are the Treatment Options for Colorectal Cancer?",
        body:"MSK experts determine the type of colorectal cancer and its stage through biopsy and other tests. Depending on the results, the doctor might suggest surgery, chemotherapy, radiotherapy, or a combination of therapies. Patients can also benefit from the thousands of clinical trials ongoing at MSK that explore new therapies."
      }
    ]
  },
  {
    path:"prostate-cancer",
    metaTitle: "Prostate Cancer Treatment | MSKCC-India",
    metaDescription:
      "Find information on prostate cancer types, the latest treatment options available at MSK, and the team of expert oncologists.",
    metaKeywords: "Prostate Cancer Treatment",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/prostate-cancer",
    title: "Prostate Cancer",
    breadCrumbName: "Prostate Cancer",
    about:"You will face many hard decisions if a loved one or you have been diagnosed with prostate cancer. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    info:[
      {
        heading:"What Is Prostate Cancer?",
        body:"Cancer that originates in the prostate gland, the walnut-shaped small gland that produces seminal fluid and nourishes the sperm in males, is called prostate cancer. As the prostate is located below the bladder and near the rectum and urethra, prostate diseases, including cancer, may affect the urinary system. And the nerves and blood vessels that help men get an erection are located close to the prostate, which makes prostate cancer or radiation treatment for the prostate to affect sexual function. It is the second most common cancer seen in men after skin cancer in the US. Most prostate cancers (90 %) are slow-growing, do not spread to the adjacent areas, and need no or minimal treatment. But, some types can be aggressive, spread quickly, and need radical treatment. In such cases, the cancer cells can reach lymph nodes or bones in the pelvis.",
        link:"Try out MSK's various Prostate Cancer (Prediction Tools) nomograms!",
        linkPath:"https://www.mskcc.org/nomograms/prostate"
      },
      {
        heading:"What Are the Types of Prostate Cancer?",
        subItems:[
          {
            heading:"Acinar Adenocarcinoma ",
            body:"This common type of prostate cancer develops in the gland cells. The majority of men diagnosed with prostate cancer have this type."
          },
          {
            heading:" Ductal Adenocarcinoma ",
            body:" This tumor develops in the lining of the ducts or tubes of the prostate gland. It is a little more aggressive than acinar adenocarcinoma."
          },
          {
            heading:"Transitional Cell or Urothelial Cancer ",
            body:" Urothelial cancer develops in the cells that line the urethra (the tube that carries urine out of the body) and then spreads to the prostate. Very rarely, this type can begin in the prostate and spread to the bladder."
          },
          {
            heading:"Squamous Cell Cancer",
            body:"The flat cells covering the prostate can start multiplying abnormally and form this type of cancer. They are fast-growing when compared to adenocarcinoma"
          },
          {
            heading:" Small-Cell Prostate Cancer",
            body:"This cancer has small round cells, and it is a type of neuroendocrine cancer that develops from neuroendocrine cells (cells that release hormones in response to nerve signals)."
          },
          {
            heading:"Sarcoma",
            body:"This rare soft tissue cancer can also affect the prostate."
          }
        ]
      },
      {
        heading:"What Are the Treatment Options for Prostate Cancer?",
        body:"Only regular screening is needed for men with slow-growing prostate cancer without any symptoms. Screening includes regular monitoring of the tumor’s growths and looking for any changes. MSK's surgeons are highly experienced in performing prostate surgery, robotic, laparoscopic, and open surgery for patients needing surgery. Their surgeons are working tirelessly to improve the outcome of radical prostatectomy. MSK surgeons are also experienced in performing radical salvage prostatectomy. This is done for patients with prostate cancer recurrence after radiation therapy. MSK's radiation oncology team is leading in treating this cancer with various types of radiotherapy, such as image-guided, intensity-modulated radiation therapy (IG-IMRT), stereotactic high-precision radiosurgery (similar to CyberKnife), stereotactic hypofractionated radiation therapy (MSK PreciseTM), and low-dose-rate permanent seed implants and high-dose-rate temporary seed implants (both forms of brachytherapy). \n For localized prostate tumors, patients can benefit from focal therapy, a term used for non-invasive techniques like freezing, electricity, heat, or highly targeted seed implants. These therapies are targeted to destroy only the cancerous part of the prostate. For aggressive prostate cancers, patients are offered a combined treatment approach, including hormone therapy, brachytherapy, and radiation therapy. MSK is also the coordinating center for the Prostate Cancer Clinical Trials Consortium, which is a collaboration between 13 leading centers focused on early drug development and clinical trial design. MSK's follow-up care experts help patients with aggressive prostate cancers cope with maintaining a good quality of life. And patients who experience sexual problems can benefit from MSK's Male Sexual and Reproductive Medicine Program."
      }
    ]
  },
  {
    path:"sarcoma",
    metaTitle: "Sarcoma Treatment | MSKCC-India",
    metaDescription:
      "Find information on soft tissue sarcoma types, the latest treatment options available at MSK, and the team of expert oncologists.",
    metaKeywords: "Sarcoma Treatment",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/sarcoma",
    title: "Sarcoma",
    breadCrumbName: "Sarcoma",
    about:"You will face many hard decisions if a loved one or you have been diagnosed with sarcoma. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    info:[
      {
        heading:"What Is Sarcoma?",
        body:"Sarcoma is cancer that begins in the body's soft tissues, such as fat, muscles, nerves, tendons, blood vessels, and lymph vessels, and can occur anywhere in the body and any organ. The most common areas affected are arms and legs. These cancers do not cause symptoms early on, as the tissues' elastic nature accommodates the growing tumor. Symptoms only occur when the lump presses on a nerve, bone, blood vessel, or muscle or if a lump is visible. Inherited medical conditions, such as familial adenomatous polyposis (FAP), neurofibromatosis, Li-Fraumeni syndrome, and retinoblastoma, make a person more prone to soft tissue sarcoma.",
        link:"Try out MSK's various Sarcoma (Prediction Tools) nomograms!",
        linkPath:"https://www.mskcc.org/nomograms/sarcoma"
      },
      {
        heading:"What Are the Types of Sarcoma?",
        subItems:[
          
            {
              heading: "Gastrointestinal Stromal Tumor (GIST)",
              body: "It begins in the digestive or gastrointestinal tract, especially the stomach. They grow large and can spread."
            },
            {
              heading: "Liposarcoma",
              body: "The type of cancer that begins in fatty tissue. These are various subtypes of liposarcoma, and some of them are more aggressive than others."
            },
            {
              heading: "Leiomyosarcoma",
              body: "It begins in the smooth muscle tissues that line hollow organs, such as the uterus, bladder, and stomach."
            },
            {
              heading: "Undifferentiated Pleomorphic Sarcoma (UPS)",
              body: "This tumor can occur anywhere in the body but commonly affects the abdominal wall's inner side and arms or thighs."
            },
            {
              heading: "Synovial Sarcoma",
              body: "It commonly occurs in the arms, legs, toes, and fingers and commonly affects younger adults and children."
            },
            {
              heading: "Malignant Peripheral Nerve Sheath Tumor (MPNST)",
              body: "A rare and aggressive tumor that develops in the nerve cells."
            },
            {
              heading: "Solitary Fibrous Tumor and Hemangiopericytoma",
              body: "They are benign and can form anywhere in the body."
            },
            {
              heading: "Fibrosarcoma",
              body: "It used to be the most common type of soft tissue sarcoma, but advances in diagnostic techniques have made it a rare disease."
            },
            {
              heading: "Vascular Sarcoma",
              body: "Tumor that starts in the blood vessels."
            },
            {
              heading: "Epithelioid Sarcoma",
              body: "Commonly seen in young adults, and generally occur in the feet, legs, and arms, and sometimes in the groin."
            },
            {
              heading: "Alveolar Soft Part Sarcoma (ASPS)",
              body: "It is a very rare sarcoma that develops in younger adults' legs."
            },
            {
              heading: "Clear Cell Sarcoma and Melanoma of Soft Parts",
              body: "It has features of both soft tissue sarcoma and melanoma (an aggressive skin cancer)."
            },
            {
              heading: "Extraskeletal Myxoid Chondrosarcoma (EMC)",
              body: "These are painless lumps that are soft or gelatinous to touch."
            }
          
          
        ]
      },
      {
        heading:"Benign Sarcoma-like Growths",
        body:"Examples of these benign tumors are ossifying fibromyxoid tumor, perivascular epithelioid cell tumor, angiomyolipoma, and sugar cell tumor, lymphangioleiomyomatosis, giant cell tumor of the tendon sheath and pigmented villonodular synovitis, myoepithelial tumors of soft tissue, and glomus tissue tumor. Benign tumors that are the least aggressive are lipoma, lipomatosis, lipoblastoma or lipoblastomatosis, angiolipoma, angiomyolipoma, angiomyolipoma, hibernoma, granular cell tumors, elastoma, hemangioma, leiomyoma, schwannoma, neurofibroma, myxoma, angiomyxoma, and angiofibroma."
      },
      {
        heading:"What Are the Treatment Options for Sarcoma?",
        body:"All cancer patients at MSK are offered compassionate and personalized care from their experts. Specialists experienced in surgery, chemotherapy, radiation therapy, rehabilitation, and maintaining the quality of life will work closely to develop a customized treatment plan to ensure the best outcome possible. Patients also benefit from new chemotherapy drugs through thousands of ongoing clinical trials at MSK. MSK doctors see more than 600 new patients with sarcoma every year and operate on tumors considered inoperable by other cancer centers. They have published their experience in diagnosing and treating more than 10,000 patients with soft tissue sarcoma."
      }
     ]
  },{
    path:"lymphoma",
    metaTitle: "Lymphoma Treatment | MSKCC-India",
    metaDescription:
      "Find information on lymphoma types, the latest treatment options available at MSK, and the team of expert oncologists.",
    metaKeywords: "Lymphoma Treatment",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/lymphoma",
    title: "Lymphoma",
    breadCrumbName: "Lymphoma",
    about:"You will face many hard decisions if a loved one or you have been diagnosed with lymphoma. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    info:[

      {
        heading:"What Is Lymphoma?",
        body:"Lymphoma is a type of cancer that develops due to abnormal growth of lymphocytes, a white blood cell type that makes the immune system of the body, which are located in the lymph nodes, spleen, tonsils, bone marrow, and thymus gland-like organs. As the lymphatic system moves lymph throughout the body, these cancer cells usually circulate to all parts of the body, such as the liver, lungs, and bone marrow."
      },
      {
        heading:"What Are the Types of Lymphoma?",
        subItems:[
          {
            heading:" Hodgkin’s Lymphoma",
            subItems:[
              
                {
                  heading: "Nodular Sclerosis Hodgkin’s Lymphoma",
                  body: "The most common type of Hodgkin’s lymphoma that affects young adults."
                },
                {
                  heading: "Lymphocyte-Depleted Hodgkin’s Disease",
                  body: "A rare and aggressive type that affects less than 1% of the population and is commonly diagnosed in immunocompromised patients."
                },
                {
                  heading: "Lymphocyte-Rich Hodgkin’s Disease",
                  body: "Men are most commonly affected, and about 5% of lymphoma patients have this type."
                },
                {
                  heading: "Nodular Lymphocyte-Predominant Hodgkin’s Disease",
                  body: "It is diagnosed in around 5% of lymphoma patients, usually between 30 and 50 years of age."
                },
                {
                  heading: "Mixed Cellularity Hodgkin’s Lymphoma. Non-Hodgkin’s Lymphoma (NHL)",
                  body: " It commonly affects older men."
                },
                
            ]
          },
          {
            heading:"Non-Hodgkin’s lymphoma (NHL)",
            subItems:[
              
                {
                  heading: "B-Cell Lymphoma",
                  body: "It is a common and aggressive lymphoma that develops from abnormal B-cells in the blood and grows rapidly."
                },
                {
                  heading: "T-Cell Lymphoma",
                  body: "It is less common than B-cell lymphoma and originates in abnormal T-cells, a type of white blood cells."
                },
                {
                  heading: "Follicular Lymphoma",
                  body: "White blood cells divide abnormally and result in follicular lymphoma."
                },
                {
                  heading: "Burkitt’s Lymphoma",
                  body: "This type affects immunocompromised people and is common in children."
                },
                {
                  heading: "Mantle Cell Lymphoma",
                  body: "A rare and aggressive type of lymphoma that usually affects the gastrointestinal tract or bone marrow."
                },
                {
                  heading: "Lymphoplasmacytic Lymphoma",
                  body: "Also called Waldenstrom macroglobulinemia. It is a rare subtype of lymphoma that mainly affects older adults."
                },
                {
                  heading: "Small Lymphocytic Lymphoma",
                  body: "A slow-growing B-cell lymphoma."
                }
              
              ]
          }
         
        ]
      },
      {
        heading:"What Are the Treatment Options for Lymphoma?",
        body:"Treatment options for lymphoma depend on the type and the severity (how far the cancer cells have spread). MSK's advances in molecular and genetic testing have helped their doctors develop individualized treatments for patients suffering from lymphoma. Certain slow-growing lymphomas might not need to be treated, and only careful monitoring is sufficient. For the other types, chemotherapy, targeted therapies, radiation, stem cell transplantation, immunotherapy, and other therapies are available at MSK. MSK's lymphoma team provides compassionate and highest possible cancer care. MSK's specialists have vast experience in all types of lymphoma, which is why they treat more than 1,200 lymphoma patients every year."
      }
    ]
  },{
    path:"leukemia",
    metaTitle: "Leukemia Treatment | MSKCC-India",
    metaDescription:
      "Find information on leukemia types, the latest treatment options available at MSK, and the team of expert oncologists.",
    metaKeywords: "Leukemia Treatment",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/leukemia",
    title: "Leukemia",
    breadCrumbName: "Leukemia",
    about:"You will face many hard decisions if a loved one or you have been diagnosed with leukemia. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    info:[
      {
        heading:"What Is Leukemia?",
        body:"Leukemia or blood cancer develops due to the abnormal growth of blood-forming tissues, bone marrow, and the lymphatic system. Some types of leukemia are more common in children, while others occur mostly in adults. Leukemia often affects the white blood cells, and the abnormal white blood cells do not function like normal WBC. Leukemia is also the most common type of cancer seen in children under 15 years of age.",
        
      },
      {
heading:"What Are the Types of Leukemia?",
subItems:[
  {
    heading: "Acute Lymphocytic Leukemia (ALL)",
    body: "The most common childhood cancer, but also affects adults."
  },
  {
    heading: "Acute Myelogenous Leukemia (AML)",
    body: "The most common type of acute leukemia that affects both children and adults."
  },
  {
    heading: "Chronic Lymphocytic Leukemia (CLL)",
    body: "The most common chronic leukemia seen in adults."
  },
  {
    heading: "Chronic Myelogenous Leukemia (CML)",
    body: "Mostly affects adults."
  },
  {
    heading: "Hairy Cell Leukemia",
    body: "A rare and chronic leukemia that affects the B cells (lymphocytes)."
  },
  {
    heading: "Myelodysplastic Syndromes",
    body: "A group of conditions that are caused by the bone marrow producing immature blood cells."
  },

],
bodyTwo:"Acute leukemia spreads and worsens quickly and requires aggressive treatment. Chronic leukemia progresses very slowly and goes undiagnosed for years."


      },

      {
        heading:"What Are the Treatment Options for Leukemia?",
        body:"The recommended treatment options for leukemia are targeted therapy, chemotherapy, CAR T cell therapy, other immunotherapy, bone marrow or hematopoietic stem cell transplantation. The personalized treatment plan will depend on which blood cancer the patient has. All cancer patients at MSK are offered compassionate and personalized care from their experts. Specialists experienced in surgery, chemotherapy, radiation therapy, rehabilitation, and maintaining the quality of life will work closely to develop a customized treatment plan to ensure the best outcome possible. Patients also benefit from new chemotherapy drugs through thousands of ongoing clinical trials at MSK. MSK leukemia experts use various tests to diagnose leukemia. Tests also show changes in the bone marrow or genetic makeup of the cancer cells. MSK's hematologists identify abnormal genes in each leukemia patient to know the drugs that will be most effective."
      }
    ]
  },
  {
    path:"multiple-myeloma",
    metaTitle: "Multiple Myeloma Treatment | MSKCC-India",
    metaDescription:
      "Find information on multiple myeloma types, the latest treatment options available at MSK, and the team of expert oncologists.",
    metaKeywords: "Multiple Myeloma Treatment",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/multiple-myeloma",
    title: "Multiple Myeloma",
    breadCrumbName: "Multiple Myeloma",
    about:"You will face many hard decisions if a loved one or you have been diagnosed with multiple myeloma. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    info:[
      {
        heading:"What Is Multiple Myeloma?",
        body:"Multiple myeloma is a type of cancer that originates in a type of white blood cell called the plasma cell. These cells make antibodies that protect our body from foreign bodies and microorganisms and fight infections. In multiple myeloma patients, abnormal plasma cells accumulate in the bone marrow and outnumber the healthy blood cells present there. These cancer cells do not produce antibodies. Instead, they produce abnormal proteins that affect the kidneys and other organs."
      },
      {
        heading:"What Are the Types of Multiple Myeloma?",
        subItems:[
          {
            heading:"Hyperdiploid (HMM) ",
            body:"Around 45 % of multiple myeloma cases are this type, and it is a less aggressive type. Here, the abnormal plasma cells have more chromosomes than normal."
          },
          {
            heading:"Non-hyperdiploid or Hypodiploid ",
            body:" Unlike the first type, these cancer cells have fewer chromosomes. It is more aggressive and is seen in 40 % of the cases."
          },
          {
            heading:"Other Types",
            subItems:[
              
                {
                  heading: "Light Chain Myeloma"
                },
                {
                  heading: "Non-secretory Myeloma"
                },
                {
                  heading: "Solitary Plasmacytoma"
                },
                {
                  heading: "Monoclonal Gammopathy of Undetermined Significance (MGUS)"
                },
                {
                  heading: "Smoldering Multiple Myeloma (SMM)"
                },
                {
                  heading: "Immunoglobulin E (IgE) Myeloma"
                },
                {
                  heading: "Immunoglobulin D (IgD) Myeloma"
                }            
            ]
          }
          
        ]
      },
      {
        heading:"What Are the Treatment Options for Multiple Myeloma?",
        body:"Multiple myeloma that is causing symptoms is called active myeloma, and it requires treatment. And if it does not cause symptoms, it is called smoldering myeloma, which only requires close monitoring. Multiple myeloma is only treated if it causes symptoms. All cancer patients at MSK are offered compassionate and personalized care from their experts. Specialists who are experienced in surgery, chemotherapy, radiation therapy, rehabilitation, and maintaining the quality of life will work closely to come up with a customized treatment plan to ensure the best outcome possible. Patients also benefit from new chemotherapy drugs through thousands of ongoing clinical trials at MSK."
      }
    ]
  },
  {
    path:"ovarian-cervical-and-endometrial-cancer",
    metaTitle: "Ovarian, Cervical, and Endometrial Cancer Treatment | MSKCC-India",
    metaDescription:
      "Find information on ovarian, cervical, and endometrial cancer types, the latest treatment options available at MSK, and the team of expert oncologists.",
    metaKeywords: "Ovarian, Cervical, and Endometrial Cancer Treatment",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/ovarian-cervical-and-endometrial-cancer",
    title: "Ovarian, Cervical, and Endometrial Cancer",
    breadCrumbName: "Ovarian, Cervical, and Endometrial Cancer",
    about:"You will face many hard decisions if a loved one or you have been diagnosed with multiple myeloma. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    info:[
      {
        infoTitle:"Ovarian Cancer",
        heading:"What Is Ovarian Cancer?",
        body:"The type of cancer where the cells in the ovaries, two almond-sized female reproductive organs that produce eggs and female hormones (estrogen and progesterone), multiply and grow out of control is called ovarian cancer. When the genes in the cells of the ovaries no longer work properly, the cells divide uncontrollably and form a tumor. Ovarian cancer is the second most common cancer seen in women, and one in seventy women is at risk of developing it. One in ten women with ovarian cancer also has a positive family history or a genetic mutation that increases their risk. Genetic tests at MSK can help identify such women at risk.",
        link:" Try out MSK's Ovarian Cancer - Cancer-Specific Survival Following Surgery (Prediction Tool) nomogram!",
        linkPath:"https://www.mskcc.org/nomograms/ovarian"
      },
      {
        heading:"What Are the Types of Ovarian Cancer?",
        body:"All ovarian cancer patients are different, and all of them need a customized treatment plan according to the type of ovarian cancer. Ovarian cancer has more than 30 different types, and they are named based on the ovarian cell they develop from. The common types include:",
        subItems:[
          {
            heading:"Ovarian Epithelial Cancer ",
            body:" These tumors originate in the epithelial cells that line the outer surface of the ovaries. This type accounts for 85 to 90 % of all ovarian cancers.",
          },
          {
            heading:"Germ Cell Tumors",
            body:"Tumors can also form from the egg-producing cells of the ovaries, and most of these growths are benign."
          },
          {
            heading:"Sex Cord-Stromal Tumors",
            body:"This type accounts for about 1 % of ovarian cancers. These tumors develop from the stroma tissue cells (the cells that produce female hormones - estrogen and progesterone)."
          }
        ]
  
      },
      {
        heading:"What Are the Treatment Options for Ovarian Cancer?",
        body:"The main treatment option is surgery for both early and advanced ovarian cancer. The type of surgery will be decided based on the cancer type and stage, the patient’s general health, and if the patient plans on having children in the future. MSK experts suggest chemotherapy after surgery to prevent a recurrence."
      },
      {
        infoTitle:"Cervical Cancer",
        heading:"What Is Cervical Cancer?",
        body:"The type of cancer that originates in the cervix, which is the lower part of the uterus that connects to the vagina. The majority of this cancer (almost 90 %) results from sexually transmitted infections with various strains of human papillomavirus strains (HPV). Once infected, the virus survives for years in some women and changes the tissue lining the cervix. This is called dysplasia or precancer, which can lead to cancer if not treated. It is a slow-growing tumor, and before the actual cancerous transformation occurs, dysplastic cells can be removed, and cancer can be prevented."
      },
     {
      heading:"What Are the Types of Cervical Cancer?",
      subItems:[
        {
          heading:"Squamous Cell Carcinoma (SCC)",
          body:"The squamous cells (thin and flat cells) present in the lowermost part of the cervix divide uncontrollably and form this type of cervical cancer. Almost 70 % of all cervical cancer is SCC.",

        },
        {
          heading:"Adenocarcinoma",
          body:"It is the second most common type and accounts for 20 % of cancer in the cervix. The glandular cells (column-shaped) that line the cervix and produce mucus undergo cancerous transformation."
        },
        {
          heading:"Adenosquamous Carcinoma ",
          body:"It is a mix of both squamous and glandular cancer cells. It is rare and is seen in only 5 to 6 % of cervical cancer cases."
        }
      ]
     },
     {
      heading:"What Are the Treatment Options for Ovarian Cancer?",
      body:"The main treatment option is surgery for both early and advanced ovarian cancer. The type of surgery will be decided based on the cancer type and stage, the patient’s general health, and if the patient plans on having children in the future. MSK experts suggest chemotherapy after surgery to prevent a recurrence."
     },
     {
      infoTitle:"Uterine (Endometrial) Cancer",
      heading:"What Is Uterine Cancer?",
      body:"Uterine or endometrial cancer is a type of cancer that develops in the endometrium, the inner lining of the uterus (the inverted-pear-shaped hollow female reproductive organ). Women who have been diagnosed with endometrial hyperplasia, those who are obese, had their menarche before 12 years and menopause after 55 years, etc., are at risk of this cancer.",
      link:"Try out MSK's Endometrial Cancer - Overall Survival Probability Following Surgery (Prediction Tool) nomogram!",
      linkPath:"https://www.mskcc.org/nomograms/endometrial",
      
      
     },
     {
          heading:"What Are the Types of Uterine Cancer?",
          subItems:[
            {
              heading:"Endometrioid Adenocarcinoma ",
              body:"Cancer develops in the glandular cells that line the uterus. Almost 75 % of all uterine cancers are this type."
            },
            {
              heading:"Serous Adenocarcinoma",
              body:"This type most commonly spreads to lymph nodes and other areas of the body. Around 10 % of women diagnosed with uterine cancer have this type."
            },
            {
              heading:"Adenosquamous Carcinoma ",
              body:"This is a rare type of uterine cancer that affects the glandular cells and the flat squamous cells that line the uterus."
            },
            {
              heading:"Carcinosarcoma",
              body:"This is also a rare type that was thought to be a type of uterine sarcoma. They have a higher risk of spreading to other body parts and lymph nodes."
            }
          ],
          bodyTwo:"MSK physicians treat almost 1,300 women every year with some form of gynecologic cancer. From which, around 300 have uterine cancer. They form customized treatment plans for every woman suffering from cancer."

     },
     {
      heading:"What Are the Treatment Options for Uterine Cancer?",
      body:"MSK experts determine the type of uterine cancer and its stage through biopsy and other tests. Depending on the results, the doctor might suggest surgery, chemotherapy, radiotherapy, or a combination of therapies. Patients can also benefit from the thousands of clinical trials ongoing at MSK that explore new therapies."
     }

    ]
  
  },
  {

    path:"brain-tumor-and-cancer",
    metaTitle: "Brain Tumor and Cancer Treatment | MSKCC-India",
    metaDescription:
      "Find information on various brain tumors and cancer types, the latest treatment options available at MSK, and the team of expert oncologists.",
    metaKeywords: "Brain Tumor and Cancer Treatment",
    canonicalUrl: "https://mskcc-test.icliniq.com/cancer-care/types/brain-tumor-and-cancer",
    title: "Brain Tumors and Cancers",
    breadCrumbName: "Brain Tumors and Cancers",
    about:"You will face many hard decisions if a loved one or you have been diagnosed with a brain tumor or cancer. Including several questions like where should you go for treatment? What are the available treatment options? How to maintain your quality of life? We have tried to describe these concerns, the types, and possible treatment, which will help you decide.",
    info:[
      {
        heading:"What Are Brain Tumors and Cancers?",
        body:"Abnormal cell growth in the brain is called brain tumor or cancer. There are various types of brain tumors, some of which are non-cancerous, while some are cancerous. And they are also tumors that begin in the brain (primary brain tumors) and those that spread from other body parts (secondary or metastatic brain tumors). Anyone can get brain cancer or tumor, and the exact cause is still not known. Some risk factors are exposure to radiation and family history. Treatment depends on the location, stage, size, and type of brain tumor, and the treatment options are radiotherapy, surgery, and chemotherapy."
      },
      {
        heading:"What Are the Types of Brain Tumors?",
        subItems:[
          {
            heading:"Primary Brain Tumors:",
            subItems:[
              {
                heading:"Gangliocytoma",
                body:" A rare type of brain tumor that originates from mature neurons."
              },
              {
                heading:"Meningiomas",
                body:"This tumor starts in the meninges (membranes that surround the brain and spinal cord). About 10 to 15 % of all brain tumors are this type, and it is the most common benign brain tumor."
              },
              {
                heading:"Craniopharyngiomas",
                body:"These tumors originate in some part of the pituitary gland and are located deep in the brain."
              },
              {
                heading:"Pineocytomas",
                body:"These tumors develop from the pineal cells. They are well-defined and slow-growing."
              },
              {
                heading:"Schwannomas",
                body:"These are primary tumors that originate in the Schwann cells (cells that assist in nerve impulses)."
              },
              {
                heading:"Gliomas",
                body:"These tumors form in the glia (a type of cell in the brain or spinal cord), and almost 78 % of all adult cancerous brain tumors are this type. The subtypes include:"
                ,subItems:[
                  {
                    heading:"Ependymomas"
                  },{
                    heading:"Glioblastoma Multiforme (GBM)."
                  },
                  {
                    heading:"Astrocytomas."
                  },
                  {
                    heading:"Brainstem Glioma."
                  },
                  {
                    heading:"Medulloblastomas."
                  },
                  {
                    heading:"Oligodendrogliomas."
                  }
                ]
              }
            ]
          
          }
        ]
      },
      {
        heading:"Secondary Brain Tumors:",
        body:"The following types of cancer can metastasis and result in secondary brain tumors:",
        subItems:[
          {
            heading:" Breast cancer."
          },{
            heading:" Lung cancer."
          },
          {
            heading:"Melanoma."
          },
          {
            heading:"Colon cancer."
          },
          {
            heading:" Kidney cancer."
          }
        ]
      },
      {
        heading:"What Are the Treatment Options for Brain Tumors and Cancers?",
        body:"Experts at MSK are dedicated to caring for people with brain tumors and are working hard to find new treatment options for inoperable and aggressive brain tumors. Specialists who are experienced in surgery, chemotherapy, radiation therapy, rehabilitation, and maintaining the quality of life will work closely to come up with a customized treatment plan to ensure the best outcome possible. MSK neurosurgeons use the most advanced surgical technologies like intraoperative MRI scanning, brain mapping, and stereotactic radiosurgery to help their patients."
      }
    ]
  }
];
