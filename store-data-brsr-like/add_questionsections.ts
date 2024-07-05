import prisma from "../db/db";


async function main() {
    console.log("Adding question sections to the database");
    await prisma.questionSections.createMany({
        data: [
            {
                questionId: 1,
                sectionId: 5
            },
            {
                questionId: 2,
                sectionId: 1,
            },
            {
                questionId: 2,
                sectionId: 6,
            },
            {
                questionId: 3,
                sectionId: 2,
            },
            {
                questionId: 3,
                sectionId: 8,
            },
            {
                questionId: 4,
                sectionId: 7,
            },
            {
                questionId: 5,
                sectionId: 3,
            },
            {
                questionId: 6,
                sectionId: 4
            }
        ]
    })
    console.log("Question sections added to the database");
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
        process.exit(0);
    })