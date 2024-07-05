import type { Prisma } from "@prisma/client";
import prisma from "../db/db";

const brsrForm: Prisma.FormCatalogsCreateInput = {
    name: "BRSR",
    description: "Business Responsibility & Sustainability Reporting",
}

const cdpForm: Prisma.FormCatalogsCreateInput = {
    name: "CDP",
    description: "Carbon Disclosure Project",
}

// insert theses forms into the database
async function main() {
    console.log("Adding forms to the database");
    await prisma.formCatalogs.create({ data: brsrForm });
    await prisma.formCatalogs.create({ data: cdpForm });
    console.log("Forms added to the database");
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
        process.exit(0);
    })