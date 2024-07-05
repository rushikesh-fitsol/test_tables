import prisma from "../db/db";
import { createInterface } from 'readline';

async function truncateTable(tables: string[]) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const answer = await new Promise<string>((resolve) => {
        console.log(`Truncating tables: \n\x1b[31m${tables.join('\n')}\x1b[0m`);
        rl.question('Are you sure you want to truncate these tables? (yes/no) ', (answer) => {
            resolve(answer);
        });
    });

    if (answer.toLowerCase() === 'yes') {
        try {
            // Disable foreign key checks
            await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS=0;');

            for (const table of tables) {
                console.log(`\x1b[31mTruncating table: ${table}\x1b[0m`);
                await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${table};`);
                console.log(`\x1b[32mTruncated table: ${table}\x1b[0m`);
            }

            // Re-enable foreign key checks
            await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS=1;');
            console.log('\x1b[32mTruncate operation completed.\x1b[0m');
        } catch (error: any) {
            console.error(`\x1b[31mError during truncate operation: ${error.message}\x1b[0m`);
        }
    } else {
        console.log('Truncate operation cancelled.');
    }
    rl.close();
}

// Order is important, more dependent tables should be dropped first
// if you want to truncate Questions table, you should truncate GlobalSectionQuestions first, then GlobalSections and then Questions
const tablesToTruncateInOrder: string[] = [
    // 'GlobalSectionQuestions',
    // 'GlobalSections',
    // 'Questions',
];

truncateTable(tablesToTruncateInOrder).then(() => {
    // console.log('Done');
}).catch(console.error).finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
});