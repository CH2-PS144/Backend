/*
  Warnings:

  - You are about to drop the column `options` on the `question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `question` DROP COLUMN `options`,
    MODIFY `answer` TEXT NOT NULL;
