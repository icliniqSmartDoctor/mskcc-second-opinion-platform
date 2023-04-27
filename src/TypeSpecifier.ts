type SpecialitiesKeyType = 'Benign Blood Disorders' | 'Brain Tumors and Cancers' | 'Breast Cancer' | 'Colorectal Cancer' | 'Gastric and Esophageal Cancer' | 'Head & Neck Cancer (Oral Cancer)' | 'Kidney Cancer (Renal Cell Cancer)' | 'Leukemia' | 'Liver, Biliary, and Pancreatic Cancer' | 'Lung Cancer' | 'Lymphoma' | 'Multiple Myeloma' | 'Ovarian, Cervical, and Endometrial Cancer' | 'Pediatric (Childhood) Cancers' | 'Prostate Cancer' | 'Sarcoma' | 'View Other Types of Cancer';
export type Specialities = {
    [key in SpecialitiesKeyType]: string;
} & { [key: string]: string };


export type MskccMenu = {
    [key: string]: string | {
        [key: string]: 
            {
                [key: string]: string 
            }[]
        
    }[]

} 