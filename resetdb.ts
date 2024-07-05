import prisma from "./db/db";

async function dropSchemaTables(tables: string[]) {
    for (const table of tables) {
        console.log(`Dropping table: ${table}`);
        try {
            await prisma.$executeRawUnsafe(`DROP TABLE IF EXISTS ${table} CASCADE;`);
            console.log(`Dropped table: ${table}`);
        } catch (error) {
            console.error(`Error dropping table ${table}:`);
        }
    }
}

// Order is important, more dependent tables should be dropped first
const tablesToDrop = [
    'Answers',
    'QuestionSections',
    'GlobalSectionQuestions',
    'Questions',
    'Sections',
    'FormCatalogs',
    'GlobalSections',
]; // Replace with your actual table names
dropSchemaTables(tablesToDrop).then(() => {
    console.log('Done');
}).catch(console.error).finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
});