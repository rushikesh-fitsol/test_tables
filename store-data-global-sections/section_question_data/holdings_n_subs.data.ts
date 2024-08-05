import type { Prisma } from "@prisma/client";
import prisma from "../../db/db";


export const holdingsNSubsSectionQuestion: Prisma.GlobalSectionQuestionsCreateManyInput[] = [
    // copy this for each question till questionId 218 with globalSectionId 13
    {
        globalSectionId: 13,
        questionId: 215
    },
    {
        globalSectionId: 13,
        questionId: 216
    },
    {
        globalSectionId: 13,
        questionId: 217
    },
    {
        globalSectionId: 13,
        questionId: 218
    }

]