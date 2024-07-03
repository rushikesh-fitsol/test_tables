import type { Prisma } from "@prisma/client";
import prisma from "../db/db";
import type { AnswerSchema } from "./types";

const questions: Prisma.QuestionsCreateManyInput[] = [
    {
        name: "Currency",
        description: "Select the currency used for all financial information disclosed throughout your response.",
        answerSchema: stringify(
            {
                type: "dropdown",
                version: "1.0",
                options: [
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
                type: "text",
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
    }

]

function stringify(obj: AnswerSchema): string {
    return JSON.stringify(obj);
}


async function main() {
    console.log("Adding questions to the database");
    await prisma.questions.createMany({
        data: questions
    })
    console.log("Questions added to the database");
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
        process.exit(0);
    })