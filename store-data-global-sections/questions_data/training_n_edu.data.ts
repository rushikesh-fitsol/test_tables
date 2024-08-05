import type { Prisma } from "@prisma/client";
import { stringify } from "../utils";


export const training_n_edu: Prisma.QuestionsCreateManyInput[] = [
    {
        quid: 156,
        description: "Are training and L&D opportunities provided to the employees by the entity?",
        name: "training_and_ld_opportunities_provided",
        // "answerSchema": "Dropdown with Y/N",
        answerSchema: stringify({
            type: "dropdown",
            version: "1.0",
            options: [
                {
                    id: "Yes",
                    label: "Yes"
                },
                {
                    id: "No",
                    label: "No"
                }
            ]
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 157,
        description: "Please mention the types of training provided to the employees and workers in the entity?",
        name: "types_of_training_provided",
        // "answerSchema": "Drop down with options given with the ability to select them,",
        answerSchema: stringify({
            type: "multiselect",
            version: "1.0",
            options: [
                {
                    label: "General training on health & safety",
                    id: "general_training"
                },
                {
                    label: "Training on specific work-related hazards hazardous activities, or hazardous situations",
                    id: "specific_training"
                },
                {
                    label: "Training on mental health",
                    id: "mental_health_training"
                },
                {
                    label: "Internal training courses for skill upgradation",
                    id: "internal_training"
                },
                {
                    label: "Funding support for external training or education",
                    id: "funding_support"
                },
                {
                    label: "Others (Please mention)",
                    id: "others"
                }
            ]
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 158,
        description: "What are the total number of permanent male employees who have received training on the above-selected trainings in the current FY?",
        name: "total_number_of_permanent_male_employees",
        // "answerSchema": "E103 - Numeric format - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 159,
        description: "What are the total number of permanent female employees who have received training on the above-selected trainings in the current FY?",
        name: "total_number_of_permanent_female_employees",
        // "answerSchema": "E104 - Numeric format - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 160,
        description: "What are the total number of permanent male workers who have received training on the above-selected trainings in the current FY?",
        name: "total_number_of_permanent_male_workers",
        // "answerSchema": "E107 - Numeric format - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 161,
        description: "What are the total number of permanent female workers who have received training on the above-selected trainings in the current FY?",
        name: "total_number_of_permanent_female_workers",
        // "answerSchema": "E108 - Numeric format - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 162,
        description: "What are the total number of permanent male employees who have received training on the above-selected trainings in the previous FY?",
        name: "some",
        // "answerSchema": "J103 - Numeric format - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 163,
        description: "What are the total number of permanent female employees who have received training on the above-selected trainings in the previous FY?",
        name: "some",
        // "answerSchema": "J104 - Numeric format - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 164,
        description: "What are the total number of permanent male workers who have received training on the above-selected trainings in the previous FY?",
        name: "some",
        // "answerSchema": "J107 - Numeric format - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 165,
        description: "What are the total number of permanent female workers who have received training on the above-selected trainings in the previous FY?",
        name: "some",
        // "answerSchema": "J108 - Numeric format - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 166,
        description: "Please select from the below options if training has been provided per organisation policies to the employees and workers:",
        name: "training_provided_per_org_policies",
        // "answerSchema": "Drop down with Y/N and option to select",
        answerSchema: stringify({
            type: "multiselect",
            version: "1.0",
            options: [
                {
                    label: "Sexual Harassment",
                    id: "sexual_harassment"
                },
                {
                    label: "Discrimination at workplace",
                    id: "discrimination_at_workplace"
                },
                {
                    label: "Child Labour",
                    id: "child_labour"
                },
                {
                    label: "Forced Labour/Involuntary Labour",
                    id: "forced_labour"
                },
                {
                    label: "Other human rights related issues",
                    id: "other_human_rights"
                }
            ]
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 167,
        description: "Please mention how many permanent employees have been trained on the above selected options in the current FY?",
        name: "permanent_employees_training",
        // "answerSchema": "E117 Numerical - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 168,
        description: "Please mention how many other than permanent employees have been trained on the above selected options in the current FY?",
        name: "other_than_permanent_employees_training",
        // "answerSchema": "E118 Numerical - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 169,
        description: "Please mention how many permanent workers have been trained on the above selected options in the current FY?",
        name: "permanent_workers_training",
        // "answerSchema": "E121 Numerical - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 170,
        description: "Please mention how many other than permanent workers have been trained on the above selected options in the current FY?",
        name: "other_than_permanent_workers_training",
        // "answerSchema": "E122 Numerical - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 171,
        description: "Please mention how many permanent employees have been trained on the above selected options in the previous FY?",
        name: "permanent_employees_training_previous",
        // "answerSchema": "H117 Numerical - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 172,
        description: "Please mention how many other than permanent employees have been trained on the above selected options in the previous FY?",
        name: "other_than_permanent_employees_training_previous",
        // "answerSchema": "H118 Numerical - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 173,
        description: "Please mention how many permanent workers have been trained on the above selected options in the previous FY?",
        name: "permanent_workers_training_previous",
        // "answerSchema": "H121 Numerical - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 174,
        description: "Please mention how many other than permanent workers have been trained on the above selected options in the previous FY?",
        name: "other_than_permanent_workers_training_previous",
        // "answerSchema": "H122 Numerical - Tables for Reporting",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 175,
        description: "Are there training or awareness campaigns held on the NGRBC'S by the entity for the below categories:",
        name: "training_or_awareness_campaigns_held",
        // "answerSchema": "",
        answerSchema: stringify({
            type: "dropdown",
            version: "1.0",
            options: [
                {
                    label: "Board of Directors",
                    id: "board_of_directors"
                },
                {
                    label: "Key Management Personnel",
                    id: "key_management_personnel"
                },
                {
                    label: "Employees other than BoD and KMPs",
                    id: "employees_other_than_bod_and_kmps"
                },
                {
                    label: "Workers",
                    id: "workers"
                }
            ]
        }),
        scoreGuide: "3 if held for Directors, Key Managerial Personnel, employees and others; 2 if for any of two categories; 1 if for only one category; 0 for none/ Not Reported (NR)",
        "esg": "G",
        "max_essential_indicators_score": 3,
        "max_leadership_indicators_score": 0
    },
    {
        quid: 176,
        description: "Mention the total number of training/awareness campaigns held on the NGRBC'S for the Board of Directors",
        name: "total_number_of_training_awareness_campaigns",
        // "answerSchema": "",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 177,
        description: "What were the topics/principles covered in the training/awareness campaign for the Board of Directors?",
        name: "topics_principles_covered",
        // "answerSchema": "Mention atleast one training against each principle of NGRBC",
        answerSchema: stringify({
            type: "text",
            version: "1.0"
        }),
        scoreGuide: "2 if coverage >90%, 1.5 if coverage 80 - 90%; 1 for 60-80%; 0.5 for 50- 60%; 0 for <50% or no awareness program held",
        "esg": "G",
        "max_essential_indicators_score": 2,
        "max_leadership_indicators_score": 0
    },
    {
        quid: 178,
        description: "What was the % of Board of Directors covered in the training/awareness campaign?",
        name: "percentage_of_board_of_directors_covered",
        // "answerSchema": "",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 179,
        description: "Mention the total number of training/awareness campaigns held on the NGRBC'S for the Key Management Personnel",
        name: "total_number_of_training_awareness_campaigns",
        // "answerSchema": "",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 180,
        description: "What were the topics/principles covered in the training/awareness campaign for the Key Management Personnel?",
        name: "topics_principles_covered",
        // "answerSchema": "Mention atleast one training against each principle of NGRBC",
        answerSchema: stringify({
            type: "text",
            version: "1.0"
        }),
        scoreGuide: "1 if coverage >90%, .75 if coverage 80 - 90%; 0.5 for 60-80%; 0.25 for 50- 60%; 0 for <50% or no awareness program held",
        "esg": "G",
        "max_essential_indicators_score": 2,
        "max_leadership_indicators_score": 0
    },
    {
        quid: 181,
        description: "What was the % of Key Management Personnel covered in the training/awareness campaign?",
        name: "percentage_of_key_management_personnel_covered",
        // "answerSchema": "",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 182,
        description: "Mention the total number of training/awareness campaigns held on the NGRBC'S for the employees other than BoD and KMP",
        name: "total_number_of_training_awareness_campaigns",
        // "answerSchema": "",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 183,
        description: "What were the topics/principles covered in the training/awareness campaign for the employees other than BoD and KMP?",
        name: "topics_principles_covered",
        // "answerSchema": "Mention atleast one training against each principle of NGRBC",
        answerSchema: stringify({
            type: "text",
            version: "1.0"
        }),
        scoreGuide: "1 if coverage >90%, .75 if coverage 80 - 90%; 0.5 for 60-80%; 0.25 for 50- 60%; 0 for <50% or no awareness program held",
        "esg": "G",
        "max_essential_indicators_score": 2,
        "max_leadership_indicators_score": 0
    },
    {
        quid: 184,
        description: "What was the % of employees other than BoD and KMP covered in the training/awareness campaign?",
        name: "percentage_of_employees_other_than_bod_and_kmp_covered",
        // "answerSchema": "",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 185,
        description: "Mention the total number of training/awareness campaigns held on the NGRBC'S for the Workers",
        name: "total_number_of_training_awareness_campaigns",
        // "answerSchema": "",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    {
        quid: 186,
        description: "What were the topics/principles covered in the training/awareness campaign for the Workers?",
        name: "topics_principles_covered",
        // "answerSchema": "Mention atleast one training against each principle of NGRBC",
        answerSchema: stringify({
            type: "text",
            version: "1.0"
        }),
        scoreGuide: "1 if coverage >90%, .75 if coverage 80 - 90%; 0.5 for 60-80%; 0.25 for 50- 60%; 0 for <50% or no awareness program held",
        "esg": "G",
        "max_essential_indicators_score": 2,
        "max_leadership_indicators_score": 0
    },
    {
        quid: 187,
        description: "What was the % of Workers covered in the training/awareness campaign?",
        name: "percentage_of_workers_covered",
        // "answerSchema": "",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score",
    },
    // {
    //     quid: 188,
    //     description: "What are the total number of permanent employees in the previous year?",
    //     name: 
    //     // "answerSchema": "",
    //     scoreGuide: "",
    // },
    // {
    //     quid: "",
    //     description: "What are the total other than permanent employees in the previous year?",
    //     // "answerSchema": "",
    //     scoreGuide: "",
    // },
    // {
    //     quid: "",
    //     description: "What are the total number of permanent workers in the previous year?",
    //     // "answerSchema": "",
    //     scoreGuide: "",
    // },
    // {
    //     quid: "",
    //     description: "What are the total other than permanent workers in the previous year?",
    //     // "answerSchema": "",
    //     scoreGuide: "",
    // },
    // {
    //     quid: "",
    //     description: "",
    //     // "answerSchema": "",
    //     scoreGuide: "",
    // },
    // {
    //     quid: "",
    //     description: "What is the % of employees trained on Health and Safety?",
    //     // "answerSchema": "",
    //     scoreGuide: "1 for 80-100%, 0.5 for 60-80%, 0 otherwise",
    //     "ESG": "S",
    //     "max_essential_indicators_score": 1,
    //     "max_leadership_indicators_score": 0
    // },
    // {
    //     quid: "",
    //     description: "What is the % of employees trained on Skill Upgradation?",
    //     // "answerSchema": "",
    //     scoreGuide: "1 for 80-100%, 0.5 for 60-80%, 0 otherwise",
    //     "ESG": "S",
    //     "max_essential_indicators_score": 1,
    //     "max_leadership_indicators_score": 0
    // },
    // {
    //     quid: "",
    //     description: "What is the % of workers trained on Health and Safety?",
    //     // "answerSchema": "",
    //     scoreGuide: "1 for 80-100%, 0.5 for 60-80%, 0 otherwise",
    //     "ESG": "S",
    //     "max_essential_indicators_score": 1,
    //     "max_leadership_indicators_score": 0
    // },
    // {
    //     quid: "",
    //     description: "What is the % of workers trained on Skill Upgradation?",
    //     // "answerSchema": "",
    //     scoreGuide: "1 for 80-100%, 0.5 for 60-80%, 0 otherwise",
    //     "ESG": "S",
    //     "max_essential_indicators_score": 1,
    //     "max_leadership_indicators_score": 0
    // },
    // {
    //     quid: "",
    //     description: "What is the % of employees trained on Human Rights Policies?",
    //     // "answerSchema": "",
    //     scoreGuide: "1 for 80-100%, 0.5 for 60-80%, 0 otherwise",
    //     "ESG": "S",
    //     "max_essential_indicators_score": 1,
    //     "max_leadership_indicators_score": 0
    // },
    // {
    //     quid: "",
    //     description: "What is the % of workers trained on Human Rights Policies?",
    //     // "answerSchema": "",
    //     scoreGuide: "1 for 80-100%, 0.5 for 60-80%, 0 otherwise",
    //     "ESG": "S",
    //     "max_essential_indicators_score": 1,
    //     "max_leadership_indicators_score": 0
    // }
]