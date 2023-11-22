/*
  Warnings:

  - Added the required column `content` to the `material` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `material` ADD COLUMN `content` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `question` MODIFY `questions` TEXT NOT NULL;
