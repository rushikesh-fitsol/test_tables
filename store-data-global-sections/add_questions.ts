import type { Prisma } from "@prisma/client";
import prisma from "../db/db";
import type { AnswerSchema } from "./types";

const GeneralDisclosureQuestions: Prisma.QuestionsCreateManyInput[] = [
    {
        description: "In which language are you submitting your response?",
        name: "Language",
        answerSchema: stringify(
            {
                type: "dropdown",
                version: "1.0",
                options: [
                    { id: "English", label: "English" },
                    { id: "Hindi", label: "Hindi" },
                    { id: "Marathi", label: "Marathi" },
                    { id: "Spanish", label: "Spanish" },
                    { id: "French", label: "French" },
                ]
            }
        )
    },
    {
        description: "Select the currency used for all financial information disclosed throughout your response.",
        name: "Currency",
        answerSchema: stringify(
            {
                type: "dropdown",
                version: "1.0",
                options: [
                    { id: "INR", label: "INR" },
                    { id: "USD", label: "USD" },
                    { id: "EUR", label: "EUR" },
                    { id: "GBP", label: "GBP" },
                ]
            }
        )
    },
    {
        description: "Provide an overview and introduction to your organization.",
        name: "Overview",
        answerSchema: stringify(
            {
                type: "longtext",
                version: "1.0"
            }
        )
    },
    {
        description: "Please provide unique identification number of the company",
        name: "Company ID",
        answerSchema: stringify(
            {
                type: "alphanumeric",
                version: "1.0"
            }
        )
    },
    {
        description: "What is the name of the Company?",
        name: "Company Name",
        answerSchema: stringify(
            {
                type: "alphanumeric",
                version: "1.0"
            }
        )
    },
    {
        description: "What is your Year of Incorporation?",
        name: "Year of Incorporation",
        answerSchema: stringify(
            {
                type: "alphanumeric",
                version: "1.0"
            }
        )
    },
    {
        description: "Please provide your Registered office address",
        name: "Registered Office Address",
        answerSchema: stringify(
            {
                type: "text",
                version: "1.0"
            }
        )
    },
    {
        description: "Please provide your Corporate office address",
        name: "Corporate Office Address",
        answerSchema: stringify(
            {
                type: "text",
                version: "1.0"
            }
        )
    },
    {
        description: "Please provide your corporate E-mail address",
        name: "Corporate Email",
        answerSchema: stringify(
            {
                type: "email",
                version: "1.0"
            }
        )
    },
    {
        description: "Please provide your corporate Telephone number",
        name: "Corporate Telephone",
        answerSchema: stringify(
            {
                type: "alphanumeric",
                version: "1.0"
            }
        )
    },
    {
        description: "Provide link to your Website",
        name: "Website",
        answerSchema: stringify(
            {
                type: "text",
                version: "1.0"
            }
        )
    },
    {
        description: "Mention the Financial year for which reporting is being done",
        name: "Financial Year",
        answerSchema: stringify(
            {
                type: "alphanumeric",
                version: "1.0"
            }
        )
    },
    {
        description: "State the end date of the year for which you are reporting data.",
        name: "Reporting Year",
        answerSchema: stringify(
            {
                type: "date",
                version: "1.0"
            }
        )
    },
    {
        description: "Mention the name of the Stock Exchange(s) where shares are listed",
        name: "Stock Exchange",
        answerSchema: stringify(
            {
                type: "dropdown",
                version: "1.0",
                options: [
                    { id: "BSE", label: "BSE" },
                    { id: "NSE", label: "NSE" },
                    { id: "NYSE", label: "NYSE" },
                    { id: "NASDAQ", label: "NASDAQ" },
                ]
            }
        )
    },
    {
        description: "What is the Paid-up Capital of the firm?",
        name: "Paid-up Capital",
        answerSchema: stringify(
            {
                type: "alphanumeric",
                version: "1.0"
            }
        )
    },
    {
        description: "Provide the name and contact details (telephone, email address) of the person for asking questions about this report",
        name: "Contact Person",
        answerSchema: stringify(
            {
                type: "text",
                version: "1.0"
            }
        )
    },
    {
        description: "Provide details on your Reporting Boundary",
        name: "Reporting Boundary",
        answerSchema: stringify(
            {
                type: "longtext",
                version: "1.0"
            }
        )
    },
    {
        description: "Name of Assurance Provider",
        name: "Assurance Provider",
        answerSchema: stringify(
            {
                type: "text",
                version: "1.0"
            }
        )
    },
    {
        description: "Type of Assurance Provided",
        name: "Assurance Type",
        answerSchema: stringify(
            {
                type: "text",
                version: "1.0"
            }
        )
    }

]

function stringify(obj: AnswerSchema): string {
    return JSON.stringify(obj);
}


async function main() {
    console.log("Adding questions to the database");
    await prisma.questions.createMany({
        data: GeneralDisclosureQuestions
    })
    console.log("Questions added to the database");
}

main()
    .catch(e => {
        console.error(e)
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
        process.exit(0);
    })