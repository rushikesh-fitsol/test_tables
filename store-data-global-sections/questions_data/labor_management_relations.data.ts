import type { Prisma } from "@prisma/client";
import { stringify } from "../utils";


export const labor_management_rel: Prisma.QuestionsCreateManyInput[] = [
    {
        quid: 147,
        description: "Do the employees have the option of joining an association or Union?",
        name: "employees have the option of joining an association or Union",
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
        scoreGuide: "No Score",
    },
    {
        quid: 148,
        description: "What are the total number of permanent male employees who are part of association(s) or Union in the current FY?",
        name: "total number of permanent male empl in association(s) or Union in the current FY",
        answerSchema: "{}",
        scoreGuide: "No Score",
    },
    {
        quid: 149,
        description: "What are the total number of permanent female employees who are part of association(s) or Union in the current FY?",
        name: "total number of permanent female empl in association(s) or Union in the current FY",
        answerSchema: "{}",
        scoreGuide: "No Score",
    },
    {
        quid: 150,
        description: "What are the total number of permanent male workers who are part of association(s) or Union in the current FY?",
        name: "total number of permanent male workers in association(s) or Union in the current FY",
        answerSchema: "{}",
        scoreGuide: "No Score",
    },
    {
        quid: 151,
        description: "What are the total number of permanent female workers who are part of association(s) or Union in the current FY?",
        name: "total number of permanent female workers in association(s) or Union in the current FY",
        answerSchema: "{}",
        scoreGuide: "No Score",
    },
    {
        quid: 152,
        description: "What are the total number of permanent male employees who are part of association(s) or Union in the previous FY?",
        name: "total number of permanent male employees in association(s) or Union in the previous FY",
        answerSchema: "{}",
        scoreGuide: "No Score",
    },
    {
        quid: 153,
        description: "What are the total number of permanent female employees who are part of association(s) or Union in the previous FY?",
        name: "total number of permanent female employees in association(s) or Union in the previous FY",
        answerSchema: "{}",
        scoreGuide: "No Score",
    },
    {
        quid: 154,
        description: "What are the total number of permanent male workers who are part of association(s) or Union in the previous FY?",
        name: "total number of permanent male workers in association(s) or Union in the previous FY",
        answerSchema: "{}",
        scoreGuide: "No Score",
    },
    {
        quid: 155,
        description: "What are the total number of permanent female workers who are part of association(s) or Union in the previous FY?",
        name: "total number of permanent female workers in association(s) or Union in the previous FY",
        answerSchema: "{}",
        scoreGuide: "No Score",
    }
]