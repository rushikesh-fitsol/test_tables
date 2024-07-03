/*
  Warnings:

  - You are about to drop the `FormCatalog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Section` DROP FOREIGN KEY `Section_formId_fkey`;

-- DropTable
DROP TABLE `FormCatalog`;

-- CreateTable
CREATE TABLE `FormCatalogs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `region` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Section` ADD CONSTRAINT `Section_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `FormCatalogs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
