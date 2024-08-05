import type { Prisma } from "@prisma/client";
import { stringify } from "../utils";


export const DiversityNInclusion: Prisma.QuestionsCreateManyInput[] = [
    {
        quid: 139,
        description: "What is the total number of the Board of Directors?",
        name: "number of directors",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score"
    },
    {
        quid: 140,
        description: "What is the total number of women in the Board of Directors?",
        name: "number of women in board of directors",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score"
    },
    {
        quid: 141,
        description: "What is the total number of the Key Management Personnel?",
        name: "number of key management personnel",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score"
    },
    {
        quid: 142,
        description: "What is the total number of women in the Key Management Personnel?",
        name: "number of women in key management personnel",
        answerSchema: stringify({
            type: "number",
            version: "1.0"
        }),
        scoreGuide: "No Score"
    },
    {
        quid: 143,
        description: "Do you have a Diversity and Inclusion Policy? Y/N",
        name: "is there diversity and inclusition policy?",
        answerSchema: stringify({
            type: "dropdown",
            version: "1.0",
            options: [
                {
                    id: "Yes",
                    label: "Yes",
                },
                {
                    id: "No",
                    label: "No"
                }
            ]

        })
    },
    {
        quid: 144,
        description: "What processes are in place to help you foster equitable employee representation?",
        name: "processes to foster equitable employee representation",
        answerSchema: stringify({
            type: "longtext",
            version: "1.0"
        })
    },
    {
        quid: 145,
        description: "Does the firm have an equal opportunity policy as per the relevant Disabilities Act? Mention the relevant Act and provide a web-link to the policy.",
        name: "equal opportunity policy",
        answerSchema: stringify({
            type: "dropdown",
            version: "1.0",
            options: [
                {
                    id: "Yes",
                    label: "Yes",
                },
                {
                    id: "No",
                    label: "No"
                }
            ]
        }),
        scoreGuide: "1 for Reported; 0 for NR",
        max_essential_indicators_score: 1,
        max_leadership_indicators_score: 0,
        esg: "G"
    },
    {
        quid: 146,
        description: "Are the premises / offices of the entity accessible to differently abled employees and workers, as per the requirements of the relevant Disabilities Act,? If not, whether any steps are being taken by the entity in this regard.",
        name: "premises accessibility",
        answerSchema: stringify({
            type: "dropdown",
            version: "1.0",
            options: [
                {
                    id: "Yes",
                    label: "Yes",
                },
                {
                    id: "No",
                    label: "No"
                }
            ]
        }),
        scoreGuide: "1 for Reported; 0 for NR",
        max_essential_indicators_score: 1,
        max_leadership_indicators_score: 0,
        esg: "G"
    }
]