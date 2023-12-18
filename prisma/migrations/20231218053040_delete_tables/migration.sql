/*
  Warnings:

  - You are about to drop the `description` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `photo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `description` DROP FOREIGN KEY `description_photoId_fkey`;

-- DropTable
DROP TABLE `description`;

-- DropTable
DROP TABLE `photo`;
