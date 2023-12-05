/*
  Warnings:

  - You are about to drop the `question` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `question` DROP FOREIGN KEY `question_materialId_fkey`;

-- DropTable
DROP TABLE `question`;

-- CreateTable
CREATE TABLE `quiz` (
    `id` VARCHAR(191) NOT NULL,
    `questions` TEXT NOT NULL,
    `answer` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `materialId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `quiz_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `quiz` ADD CONSTRAINT `quiz_materialId_fkey` FOREIGN KEY (`materialId`) REFERENCES `material`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
