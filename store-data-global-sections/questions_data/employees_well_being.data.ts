import type { Prisma } from "@prisma/client";
import { stringify } from "../utils";


export const employees_well_being: Prisma.QuestionsCreateManyInput[] = [
    {
        quid: 106,
        description: "Does the firm provide any benefits to its employees and workers?",
        name: 'are benefits provided',
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
        scoreGuide: "No Score"
    },
    {
        quid: 107,
        description: "What are the benefits provided to the employees of the firm? Add all benefits - i. Health Insurance; ii. Accident Insurance; iii. Disability & Invalidity coverage; iv. Maternity Benefits; v. Paternity Benefits; vi. Day Care Facilities; vii. others",
        name: 'benefits provided',
        answerSchema: "{}",
        scoreGuide: "No Score"

    },
    {
        quid: 108,
        description: "What are the total number of Permanent Employees in the firm?",
        name: 'total permanent employees',
        answerSchema: "{}",
        scoreGuide: "No Score"
    },
    {
        quid: 109,
        description: "Please mention total male employees covered for above mentioned benefits - i. Health Insurance; ii. Accident Insurance; iii. Disability & Invalidity coverage; iv. Maternity Benefits; v. Paternity Benefits; vi. Day Care Facilities; vii. others",
        name: 'total male employees for benefits',
        answerSchema: "{}",
        scoreGuide: "No Score"
    },
    {
        quid: 110,
        description: "Please mention total female employees covered for above mentioned benefits - i. Health Insurance; ii. Accident Insurance; iii. Disability & Invalidity coverage; iv. Maternity Benefits; v. Paternity Benefits; vi. Day Care Facilities; vii. others",
        name: "total female employees for benefits",
        answerSchema: "{}",
        scoreGuide: "No Score"
    },
    {
        quid: 111,
        description: "Please mention total other than permanent male employees covered for above mentioned benefits - i. Health Insurance; ii. Accident Insurance; iii. Disability & Invalidity coverage; iv. Maternity Benefits; v. Paternity Benefits; vi. Day Care Facilities; vii. others",
        name: "total other than permanent male employees for benefits",
        answerSchema: "{}",
        scoreGuide: "No Score"
    },
    {
        quid: 112,
        description: "Please mention total other than permanent female employees covered for above mentioned benefits - i. Health Insurance; ii. Accident Insurance; iii. Disability & Invalidity coverage; iv. Maternity Benefits; v. Paternity Benefits; vi. Day Care Facilities; vii. others",
        name: "total other than permanent female employees for benefits",
        answerSchema: "{}",
        scoreGuide: "No Score"
    },
    {
        quid: 113,
        description: "Please mention total male workers covered for above mentioned benefits - i. Health Insurance; ii. Accident Insurance; iii. Disability & Invalidity coverage; iv. Maternity Benefits; v. Paternity Benefits; vi. Day Care Facilities; vii. others",
        name: "total male workers for benefits",
        answerSchema: "{}",
        scoreGuide: "No Score"
    },
    {
        quid: 114,
        description: "Please mention total female workers covered for above mentioned benefits - i. Health Insurance; ii. Accident Insurance; iii. Disability & Invalidity coverage; iv. Maternity Benefits; v. Paternity Benefits; vi. Day Care Facilities; vii. others",
        name: "total female workers for benefits",
        answerSchema: "{}",
        scoreGuide: "No Score"
    },
    {
        quid: 115,
        description: "Please mention total other than permanent male workers covered for above mentioned benefits - i. Health Insurance; ii. Accident Insurance; iii. Disability & Invalidity coverage; iv. Maternity Benefits; v. Paternity Benefits; vi. Day Care Facilities; vii. others",
        name: "total other than permanent male workers for benefits",
        answerSchema: "{}",
        scoreGuide: "No Score"
    },
    {
        quid: 116,
        description: "Please mention total other than permanent female workers covered for above mentioned benefits - i. Health Insurance; ii. Accident Insurance; iii. Disability & Invalidity coverage; iv. Maternity Benefits; v. Paternity Benefits; vi. Day Care Facilities; vii. others",
        name: "total other than permanent female workers for benefits",
        "answerSchema": "{}"
    },
    {
        quid: 117,
        description: "What was the cost incurred on well-being measures as a % of total revenue of the company for current FY?",
        name: "cost incurred on well-being measures as a % of total revenue",
        answerSchema: "{}",
        scoreGuide: "No Score"
    },
    {
        quid: 118,
        description: "What was the cost incurred on well-being measures as a % of total revenue of the company for previous FY?",
        name: "cost incurred on well-being measures as a % of total revenue for previous FY",
        answerSchema: "{}",
        scoreGuide: "No Score"
    },
    {
        quid: 119,
        description: "Does the firm provide any retirement benefits to its employees and workers?",
        name: "are retirement benefits provided",
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
        scoreGuide: "No Score"
    },
    {
        quid: 120,
        description: "What are the retirement benefits provided to the firm's employees? Add all benefits - i. PF; ii. Gratuity; iii. ESI; iv. NPS; v. Any other benefits?",
        name: "retirement benefits provided",
        answerSchema: stringify({
            type: "multiselect",
            version: "1.0",
            options: [
                {
                    id: "PF",
                    label: "PF"
                },
                {
                    id: "Gratuity",
                    label: "Gratuity"
                },
                {
                    id: "ESI",
                    label: "ESI"
                },
                {
                    id: "NPS",
                    label: "NPS"
                },
                {
                    id: "Any other benefits",
                    label: "Any other benefits"
                }
            ]
        }),
        scoreGuide: "No Score"
    },
    {
        quid: 121,
        description: "For each benefit mention No. of employees covered as a % of total employees for current FY",
        name: "employees covered as a % of total employees for current FY",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score"
    },
    {
        quid: 122,
        description: "For each benefit mention No. of workers covered as a % of total employees for current FY",
        name: "workers covered as a % of total employees for current FY",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score"
    },
    {
        quid: 123,
        description: "Please indicate for each benefit whether the relevant payment has been deducted and deposited with the relevant authority for the current FY",
        name: "payment deducted and deposited with the relevant authority for the current FY",
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
                },
                {
                    id: "NA",
                    label: "NA"
                }
            ]
        }),
        scoreGuide: "No Score"
    },
    {
        quid: 124,
        description: "For each benefit mention No. of employees covered as a % of total employees for previous FY",
        name: "employees covered as a % of total employees for previous FY",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score"
    },
    {
        quid: 125,
        description: "For each benefit mention No. of workers covered as a % of total employees for previous FY",
        name: "workers covered as a % of total employees for previous FY",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score"
    },
    {
        quid: 126,
        description: "Please indicate for each benefit whether the relevant payment has been deducted and deposited with the relevant authority for the previous FY",
        name: "payment deducted and deposited with the relevant authority for the previous FY",
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
                },
                {
                    id: "NA",
                    label: "NA"
                }
            ]
        }),
        scoreGuide: "No Score"
    },
    {
        quid: 127,
        description: "Please mention the number of male permanent employees who returned to work after taking parental leave as a percentage ",
        name: "number of male permanent employees who returned to work after taking parental leave as a percentage",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "1 for Reported, 0 for NR",
        max_essential_indicators_score: 1,
        max_leadership_indicators_score: 0,
        esg: "S"
    },
    {
        quid: 128,
        description: "Please mention the number of female permanent employees who returned to work after taking parental leave as a percentage ",
        name: "number of female permanent employees who returned to work after taking parental leave as a percentage",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "1 for Reported, 0 for NR",
        max_essential_indicators_score: 1,
        max_leadership_indicators_score: 0,
        esg: "S"
    },
    {
        quid: 129,
        description: "What is the retention rate of permanent male employees who took parental leave",
        name: "retention rate of permanent male emplyees who took parental leave",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "1 for Reported, 0 for NR",
        max_essential_indicators_score: 1,
        max_leadership_indicators_score: 0,
        esg: "S"
    },
    {
        quid: 130,
        description: "What is the retention rate of permanent female employees who took parental leave",
        name: "retention rate of permanent female employees who took parental leave",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "1 for Reported, 0 for NR",
        max_essential_indicators_score: 1,
        max_leadership_indicators_score: 0,
        esg: "S"
    },
    {
        quid: 131,
        description: "Please mention the number of male permanent workers who returned to work after taking parental leave as a percentage ",
        name: "number of male permanent workers who returned to work after taking parental leave as a percentage",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "1 for Reported, 0 for NR",
        max_essential_indicators_score: 1,
        max_leadership_indicators_score: 0,
        esg: "S"
    },
    {
        quid: 132,
        description: "Please mention the number of female permanent workers who returned to work after taking parental leave as a percentage ",
        name: "number of female permanent workers who returned to work after taking parental leave as a percentage",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "1 for Reported, 0 for NR",
        max_essential_indicators_score: 1,
        max_leadership_indicators_score: 0,
        esg: "S"
    },
    {
        quid: 133,
        description: "What is the retention rate of permanent male workers who took parental leave",
        name: "retention rate of permanent male workers who took parental leave",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "1 for Reported, 0 for NR",
        max_essential_indicators_score: 1,
        max_leadership_indicators_score: 0,
        esg: "S"
    },
    {
        quid: 134,
        description: "What is the retention rate of permanent female workers who took parental leave",
        name: "retention rate of permanent female workers who took parental leave",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "1 for Reported, 0 for NR",
        max_essential_indicators_score: 1,
        max_leadership_indicators_score: 0,
        esg: "S"
    },
    {
        quid: 135,
        description: "Please mention the total permanent employees who returned to work after taking parental leave as a percentage ",
        name: "total permanent employees who returned to work after taking parental leave as a percentage",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "1 for Reported, 0 for NR",
        max_essential_indicators_score: 1,
        max_leadership_indicators_score: 0,
        esg: "S"
    },
    {
        quid: 136,
        description: "What is the total retention rate of employees who took parental leave as a percentage",
        name: "total retention rate of employees who took parental leave as a percentage",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "1 for Reported, 0 for NR",
        max_essential_indicators_score: 1,
        max_leadership_indicators_score: 0,
        esg: "S"
    },
    {
        quid: 137,
        description: "Please mention the total permanent workers who returned to work after taking parental leave as a percentage ",
        name: "total permanent workers who returned to work after taking parental leave as a percentage",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "1 for Reported, 0 for NR",
        max_essential_indicators_score: 1,
        max_leadership_indicators_score: 0,
        esg: "S"
    },
    {
        quid: 138,
        description: "What is the total retention rate of workers who took parental leave as a percentage",
        name: "total retention rate of workers who took parental leave as a percentage",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "1 for Reported, 0 for NR",
        max_essential_indicators_score: 1,
        max_leadership_indicators_score: 0,
        esg: "S"
    }
]