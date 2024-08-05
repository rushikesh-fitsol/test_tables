import type { Prisma } from "@prisma/client";
import prisma from "../../db/db";


export const laborManagementRelationsSectionQuestion: Prisma.GlobalSectionQuestionsCreateManyInput[] = [
    // copy this for each question till questionId 155 with globalSectionId 10
    {
        globalSectionId: 10,
        questionId: 147,
    },
    {
        globalSectionId: 10,
        questionId: 148,
    },
    {
        globalSectionId: 10,
        questionId: 149,
    },
    {
        globalSectionId: 10,
        questionId: 150,
    },
    {
        globalSectionId: 10,
        questionId: 151,
    },
    {
        globalSectionId: 10,
        questionId: 152,
    },
    {
        globalSectionId: 10,
        questionId: 153,
    },
    {
        globalSectionId: 10,
        questionId: 154,
    },
    {
        globalSectionId: 10,
        questionId: 155,
    },
]