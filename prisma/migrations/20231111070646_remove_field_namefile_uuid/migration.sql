/*
  Warnings:

  - The primary key for the `answer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `class` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `classId` on the `class` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `class` table. All the data in the column will be lost.
  - The primary key for the `material` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `materialId` on the `material` table. All the data in the column will be lost.
  - The primary key for the `question` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `questionId` on the `question` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `answer` DROP FOREIGN KEY `answer_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `material` DROP FOREIGN KEY `material_classId_fkey`;

-- DropForeignKey
ALTER TABLE `question` DROP FOREIGN KEY `question_materialId_fkey`;

-- DropIndex
DROP INDEX `class_classId_key` ON `class`;

-- DropIndex
DROP INDEX `material_materialId_key` ON `material`;

-- DropIndex
DROP INDEX `question_questionId_key` ON `question`;

-- AlterTable
ALTER TABLE `answer` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `questionId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `class` DROP PRIMARY KEY,
    DROP COLUMN `classId`,
    DROP COLUMN `name`,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `material` DROP PRIMARY KEY,
    DROP COLUMN `materialId`,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `classId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `question` DROP PRIMARY KEY,
    DROP COLUMN `questionId`,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `materialId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `material` ADD CONSTRAINT `material_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_materialId_fkey` FOREIGN KEY (`materialId`) REFERENCES `material`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `answer` ADD CONSTRAINT `answer_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `question`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
