/*
  Warnings:

  - You are about to drop the `Form` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `answerSchema` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Section` DROP FOREIGN KEY `Section_formId_fkey`;

-- AlterTable
ALTER TABLE `Question` ADD COLUMN `answerSchema` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Form`;

-- CreateTable
CREATE TABLE `FormCatalog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `region` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Section` ADD CONSTRAINT `Section_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `FormCatalog`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
