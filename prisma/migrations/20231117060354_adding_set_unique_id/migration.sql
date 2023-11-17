/*
  Warnings:

  - You are about to drop the column `answer` on the `answer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `answer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `class` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `class` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `material` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `material` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `question` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `answer_answer_key` ON `answer`;

-- AlterTable
ALTER TABLE `answer` DROP COLUMN `answer`;

-- CreateIndex
CREATE UNIQUE INDEX `answer_id_key` ON `answer`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `class_id_key` ON `class`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `class_name_key` ON `class`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `material_id_key` ON `material`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `material_name_key` ON `material`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `question_id_key` ON `question`(`id`);
