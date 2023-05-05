type Activities = {
    id: number;
    activity: string;
    timestamp: string;
}[];


type CaseDetailLableVal = {
    label: string,
    value: string | number
}

export type CaseDetailQueryResp = {
    query: string,
    response: string | number
}

export type CaseDetailType = {
    general_info: {
        [key: string]: CaseDetailLableVal
    }
    medical_info: {
        [key: string]: CaseDetailQueryResp
    }
    patient_service: {
        [key: string]: CaseDetailQueryResp
    };

    personal_info: {
        [key: string]: CaseDetailLableVal
    }
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



export const ACTIVITIES: Activities =
    [
        {
            id: 1,
            "activity": "Sent a message",
            "timestamp": "2023-02-10"
        },
        {
            id: 2,
            "activity": "Made a payment",
            "timestamp": "2023-02-10"
        },
        {
            id: 3,
            "activity": "Uploaded a file",
            "timestamp": "2023-02-10"
        },
        {
            id: 4,
            "activity": "Updated profile details",
            "timestamp": "2023-02-10"
        },
        {
            id: 5,
            "activity": "Changed account password",
            "timestamp": "2023-02-10"
        },
        {
            id: 6,
            "activity": "Opted-in for WhatsApp alerts",
            "timestamp": "2023-02-10"
        }
    ]


export const PHYSICIAN_CAROUSEL = [
    {
        image: "https://i.pravatar.cc/150?img=5",
        name: "Raju",
        link: "https://www.w3sAchools.com/",
    },
    {
        image: "https://i.pravatar.cc/150?img=4",
        name: "Hari",
        link: "https://www.w3sSchools.com/",
    },
    {
        image: "https://i.pravatar.cc/150?img=3",
        name: "Dhan",
        link: "https://www.w3sCchools.com/",
    },
];


export const CASE_TABS = [
    {
        title: "Case Details",
        path: "/cases"
    },
    {
        title: "Medical Records",
        path: "/cases/medicalRecord",
    },
];


export const MEDICAL_RECORDS: CaseDetailType[] = [
    {
        general_info: {
            patient_name: {
                label: "Patient Name",
                value: "Sam",
            },
            irn: {
                label: "IRN",
                value: "2020202020",
            },
        },
        medical_info: {
            age_limit: {
                query: "You must be over the age of 18 to submit this form:",
                response: "yes",
            },
            diagnosis_status: {
                query: "Have you received a diagnosis of cancer:",
                response: "newly diagnosed",
            },
            call_time: {
                query: "Best Time to Call:",
                response: "Tuesday at 3.30 PM",
            },
        },

        patient_service:
        {
            assistance_type: {
                query: "What type of assistance are you looking for?",
                response: "Remote Consultation with MSK Doctor(s)"
            },
            hospitalization_status: {
                query: "Are you currently admitted to the hospital?",
                response: "No"
            },
            cancer_type: {
                query: "Typs of cancer",
                response: "Others"
            },
            additional_details: {
                query: "Are there any details you’d like to share that might help us get you the care you need?",
                response: "test"
            }
        },
        personal_info: {
            first_name: {
                label: "First Name",
                value: "BOB"
            },
            last_name: {
                label: "Last Name",
                value: "N"
            },
            gender: {
                label: "Gender",
                value: "Male",
            },
            dob: {
                label: "Date Of Birth",
                value: "12/05/1998",
            },
            phone_type: {
                label: "Phone Type",
                value: "string",
            },
            contact: {
                label: "Contact",
                value: "string",
            },
            address: {
                label: "Address",
                value: "string",
            },
            city: {
                label: "City",
                value: "string",
            },
            state: {
                label: "State",
                value: "string",
            },
            country: {
                label: "Country",
                value: "string",
            },
            postal_code: {
                label: "Postal Code",
                value: 999999999,
            },
            interpreter_needed: {
                label: "Will you require an interpreter for language other than English?",
                value: "string",
            },
            learned_from: {
                label: "How did you learn about MSK India?",
                value: "string",
            },
        }

    },
];

export const CASE_STATUS = [
    {
        "milestone": "Inquiry Submitted",
        "isPassed": true,
        "timestamp": "2023-03-23"
    },
    {
        "milestone": "Inquiry Accepted",
        "isPassed": true,
        "timestamp": "2023-03-23"
    },
    {
        "milestone": "Case History Collected",
        "isPassed": true,
        "timestamp": "2023-03-23"
    },
    {
        "milestone": "MSK Physician Assigned",
        "isPassed": true,
        "timestamp": "2023-03-23"
    },
    {
        "milestone": "Video Appointment Scheduled",
        "isPassed": false,
        "timestamp": "2023-03-23"
    },
    {
        "milestone": "Case Summary Received",
        "isPassed": false,
        "timestamp": ""
    },
    {
        "milestone": "Follow-up Questions Submitted",
        "isPassed": false,
        "timestamp": ""
    },
    {
        "milestone": "Answers Received",
        "isPassed": false,
        "timestamp": ""
    }
]
