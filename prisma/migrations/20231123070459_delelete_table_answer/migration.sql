/*
  Warnings:

  - You are about to drop the `answer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `answer` to the `question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `options` to the `question` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `answer` DROP FOREIGN KEY `answer_questionId_fkey`;

-- AlterTable
ALTER TABLE `question` ADD COLUMN `answer` CHAR(2) NOT NULL,
    ADD COLUMN `options` TEXT NOT NULL;

-- DropTable
DROP TABLE `answer`;
