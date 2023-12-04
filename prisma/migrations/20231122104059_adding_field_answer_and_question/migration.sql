/*
  Warnings:

  - You are about to drop the column `active` on the `answer` table. All the data in the column will be lost.
  - Added the required column `isCorrect` to the `answer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `answer` DROP COLUMN `active`,
    ADD COLUMN `isCorrect` BOOLEAN NOT NULL,
    MODIFY `questionAnswer` VARCHAR(150) NOT NULL;
