import type { Prisma } from "@prisma/client";
import prisma from "../db/db";

const GlobalSectionQuestions_GeneralDisclosure: Prisma.GlobalSectionQuestionsCreateManyInput[] = [
    {
        questionId: 1,
        globalSectionId: 1,
    },
    {
        questionId: 2,
        globalSectionId: 1,
    },
    {
        questionId: 3,
        globalSectionId: 1,
    },
    {
        questionId: 4,
        globalSectionId: 1,
    },
    {
        questionId: 5,
        globalSectionId: 1,
    },
    {
        questionId: 6,
        globalSectionId: 1,
    },
    {
        questionId: 7,
        globalSectionId: 1,
    },
    {
        questionId: 8,
        globalSectionId: 1,
    },
    {
        questionId: 9,
        globalSectionId: 1,
    },
    {
        questionId: 10,
        globalSectionId: 1,
    },
    {
        questionId: 11,
        globalSectionId: 1,
    },
    {
        questionId: 12,
        globalSectionId: 1,
    },
    {
        questionId: 13,
        globalSectionId: 1,
    },
    {
        questionId: 14,
        globalSectionId: 1,
    },
    {
        questionId: 15,
        globalSectionId: 1,
    },
    {
        questionId: 16,
        globalSectionId: 1,
    },
    {
        questionId: 17,
        globalSectionId: 1,
    },
    {
        questionId: 18,
        globalSectionId: 1,
    },
    {
        questionId: 19,
        globalSectionId: 1,
    },
]

async function main() {
    console.log("Adding Global Section Questions to the database");
    await prisma.globalSectionQuestions.createMany({
        data: GlobalSectionQuestions_GeneralDisclosure        
    })
    console.log("Global Section Questions added to the database");
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