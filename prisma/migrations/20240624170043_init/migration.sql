/*
  Warnings:

  - You are about to drop the `QuestionSectionForm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `QuestionSectionForm` DROP FOREIGN KEY `QuestionSectionForm_formId_fkey`;

-- DropForeignKey
ALTER TABLE `QuestionSectionForm` DROP FOREIGN KEY `QuestionSectionForm_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `QuestionSectionForm` DROP FOREIGN KEY `QuestionSectionForm_sectionId_fkey`;

-- DropTable
DROP TABLE `QuestionSectionForm`;

-- CreateTable
CREATE TABLE `QuestionSection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `questionId` INTEGER NOT NULL,
    `sectionId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `QuestionSection` ADD CONSTRAINT `QuestionSection_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Question`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `QuestionSection` ADD CONSTRAINT `QuestionSection_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `Section`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
