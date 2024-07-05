import type { Prisma } from "@prisma/client";
import prisma from "../db/db";


async function main() {
    console.log("Adding sections to the database");
    await prisma.sections.createMany({
        data: [
            {
                name: "Section A",
                description: "Section A description",
                formId: 1
            },
            {
                name: "AI1",
                description: "AI1 description",
                formId: 1
            },
            {
                name: "AI13",
                description: "AI13 description",
                formId: 1
            },
            {
                name: "AI14",
                description: "AI14 description",
                formId: 1
            },
            {
                name: "1.2",
                description: "1.2 description",
                formId: 2
            },
            {
                name: "1.3",
                description: "1.3 description",
                formId: 2
            },
            {
                name: "1.4",
                description: "1.4 description",
                formId: 2
            },
            {
                name: "1.6",
                description: "1.6 description",
                formId: 2
            }
        ]
    })
    console.log("Sections added to the database");
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
        process.exit(0);
    })