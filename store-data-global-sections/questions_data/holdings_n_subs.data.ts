import type { Prisma } from "@prisma/client";
import { stringify } from "../utils";


export const holdings_n_subs: Prisma.QuestionsCreateManyInput[] = [
    {
        "quid": 215,
        "description": "Are the disclosures under this report made on a standalone basis (i.e. only for the entity) or on a consolidated basis (i.e. for the entity and all the entities which form a part of its consolidated financial statements, taken together).",
        name: "standalone_or_consolidated",
        // "answerSchema": "Short Paragraph",
        answerSchema: stringify({
            type: "text",
            version: "1.0"
        }),
        "scoreGuide": "No Score",
    },
    {
        "quid": 216,
        "description": "Provide details of Holding, Subsidiary & Associate Companies (including joint ventures)",
        name: "holding_subsidiary_associate_companies",
        // "answerSchema": "Make column 3 as a drop down with the options given in the table. For Columns 4 and 5, make it drop down with Y/N options. Add the option to add more rows. Format should be as https://docs.google.com/spreadsheets/d/1IPfwCKSeoicF6HexJMFtjHmRTY99xZSNO9vyaE91tuQ/edit#gid=0&range=A1",
        answerSchema: "{}",
        "scoreGuide": "1 for Reported; 0 for Not Reported",
        "esg": "G",
        "max_essential_indicators_score": 1,
        "max_leadership_indicators_score": 0
    },
    {
        "quid": 217,
        "description": "Is your reporting boundary for your CDP disclosure the same as that used in your financial statements?",
        name: "reporting_boundary_same_as_financial_statements",
        // "answerSchema": "Dropdown with Y/N/NA",
        answerSchema: stringify({
            type: "dropdown",
            version: "1.0",
            options: [
                {
                    label: "Yes",
                    id: "Yes"
                },
                {
                    label: "No",
                    id: "No"
                },
                {
                    label: "NA",
                    id: "NA"
                }
            ]
        }),
        "scoreGuide": "No Score",
    },
    {
        "quid": 218,
        "description": "How does your reporting boundary differ to that used in your financial statement?",
        name: "reporting_boundary_differs_from_financial_statements",
        answerSchema: stringify({
            type: "text",
            version: "1.0"
        }),
        "scoreGuide": "no Score",
    }
]