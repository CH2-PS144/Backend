/*
  Warnings:

  - Added the required column `name` to the `class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `class` ADD COLUMN `name` CHAR(5) NOT NULL;
