import prisma from "../db/db";
import { createInterface } from 'readline';

async function truncateTable(table: string[]) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const answer = await new Promise<string>((resolve) => {
        console.log(`Truncating tables: \n\x1b[31m${table.join('\n')}\x1b[0m`);
        rl.question('Are you sure you want to truncate these tables? (yes/no) ', (answer) => {
            resolve(answer);
        });
    });

    if (answer.toLowerCase() === 'yes') {
        for (const t of table) {
            console.log(`Truncating table: ${t}`);
            try {
                await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${t};`);
                console.log(`Truncated table: ${t}`);
            } catch (error) {
                console.log(error)
                console.error(`Error truncating table ${t}:`);
            }
        }
        console.log('Truncate operation completed.');
    } else {
        console.log('Truncate operation cancelled.');
    }
    rl.close();
}

// Order is important, more dependent tables should be dropped first
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