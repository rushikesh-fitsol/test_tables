import type { Prisma } from "@prisma/client";
import prisma from "../db/db";
import { EmployeesCountSectionQuestion } from "./section_question_data/employees_count.data";

const GlobalSections: Prisma.GlobalSectionsCreateManyInput[] = [
    {
        name: "General Disclosures",
        description: "General Disclosures",
    },
    {
        name: "CSR",
        description: "Corporate Social Responsibility",
    },
    {
        name: "Grivance Redressal",
        description: "Grivance Redressal",
    },
    {
        name: "Stakeholder Identification",
        description: "Stakeholder Identification",
    },
    {
        name: "Locations",
        description: "Locations",
    }
]

async function main() {
    console.log("Adding Global Sections to the database");
    await prisma.globalSections.createMany({
        data: GlobalSections
    })
    console.log("Global Sections added to the database");
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