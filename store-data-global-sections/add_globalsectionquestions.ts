import type { Prisma } from "@prisma/client";
import prisma from "../db/db";
import { EmployeesCountSectionQuestion } from "./section_question_data/employees_count.data";
import { EmployeesWellBeingSectionQuestion } from "./section_question_data/employees_well_being.data";
import { DiversityNInclusionSectionQuestion } from "./section_question_data/diversity_n_inclusion.data";
import { laborManagementRelationsSectionQuestion } from "./section_question_data/labor_management_relations.data";
import { trainingNEduSectionQuestion } from "./section_question_data/training_n_edu.data";
import { OccupationalHealthNSafetySectionQuestion } from "./section_question_data/occupational_health_n_safety.data";
import { holdingsNSubsSectionQuestion } from "./section_question_data/holdings_n_subs.data";

const GlobalSectionQuestions_GeneralDisclosure: Prisma.GlobalSectionQuestionsCreateManyInput[] =
  [
    // {
    //   questionId: 1,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 2,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 3,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 4,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 5,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 6,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 7,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 8,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 9,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 10,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 11,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 12,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 13,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 14,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 15,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 16,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 17,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 18,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 19,
    //   globalSectionId: 1,
    // },
    // {
    //   questionId: 20,
    //   globalSectionId: 2,
    // },
    // {
    //   questionId: 21,
    //   globalSectionId: 2,
    // },
    // {
    //   questionId: 22,
    //   globalSectionId: 2,
    // },
    // {
    //   questionId: 23,
    //   globalSectionId: 2,
    // },
    // {
    //   questionId: 24,
    //   globalSectionId: 2,
    // },
    // {
    //   questionId: 25,
    //   globalSectionId: 2,
    // },
    // {
    //   questionId: 26,
    //   globalSectionId: 2,
    // },
    // {
    //   questionId: 27,
    //   globalSectionId: 2,
    // },
    // {
    //   questionId: 28,
    //   globalSectionId: 2,
    // },
    // {
    //   questionId: 29,
    //   globalSectionId: 2,
    // },
    // {
    //   questionId: 30,
    //   globalSectionId: 2,
    // },
    // {
    //   questionId: 31,
    //   globalSectionId: 3,
    // },
    // {
    //   questionId: 32,
    //   globalSectionId: 3,
    // },
    // {
    //   questionId: 33,
    //   globalSectionId: 3,
    // },
    // {
    //   questionId: 34,
    //   globalSectionId: 3,
    // },
    // {
    //   questionId: 35,
    //   globalSectionId: 3,
    // },
    // {
    //   questionId: 36,
    //   globalSectionId: 3,
    // },
    // {
    //   questionId: 37,
    //   globalSectionId: 3,
    // },
    // {
    //   questionId: 38,
    //   globalSectionId: 3,
    // },
    // {
    //   questionId: 39,
    //   globalSectionId: 4,
    // },
    // {
    //   questionId: 40,
    //   globalSectionId: 4,
    // },
    // {
    //   questionId: 41,
    //   globalSectionId: 4,
    // },
    // {
    //   questionId: 42,
    //   globalSectionId: 4,
    // },
    // {
    //   questionId: 43,
    //   globalSectionId: 4,
    // },
    // {
    //   questionId: 44,
    //   globalSectionId: 4,
    // },
    // {
    //   questionId: 45,
    //   globalSectionId: 4,
    // },
    // {
    //   questionId: 46,
    //   globalSectionId: 4,
    // },
    // {
    //   questionId: 47,
    //   globalSectionId: 4,
    // },
    // {
    //   questionId: 48,
    //   globalSectionId: 4,
    // },
    // {
    //   questionId: 49,
    //   globalSectionId: 4,
    // },
    // {
    //   questionId: 50,
    //   globalSectionId: 4,
    // },
    // {
    //   questionId: 51,
    //   globalSectionId: 4,
    // },
    // {
    //   questionId: 52,
    //   globalSectionId: 5,
    // },
    // {
    //   questionId: 53,
    //   globalSectionId: 5,
    // },
    // {
    //   questionId: 54,
    //   globalSectionId: 5,
    // },
    // {
    //   questionId: 55,
    //   globalSectionId: 5,
    // },

    {
      questionId: 56,
      globalSectionId: 6,
    },
    {
      questionId: 57,
      globalSectionId: 6,
    },
    {
      questionId: 58,
      globalSectionId: 6,
    },
    {
      questionId: 59,
      globalSectionId: 6,
    },
    {
      questionId: 60,
      globalSectionId: 6,
    },
    {
      questionId: 61,
      globalSectionId: 6,
    },
    {
      questionId: 62,
      globalSectionId: 6,
    },
    {
      questionId: 63,
      globalSectionId: 6,
    },
  ];

async function main() {
  console.log("Adding Global Section Questions to the database");
  await prisma.globalSectionQuestions.createMany({
    data: holdingsNSubsSectionQuestion
  });
  console.log("Global Section Questions added to the database");
}

main()
  .catch((e) => {
    console.error(e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
