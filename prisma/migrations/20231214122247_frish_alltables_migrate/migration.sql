-- CreateTable
CREATE TABLE `class` (
    `id` VARCHAR(191) NOT NULL,
    `name` CHAR(5) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `class_id_key`(`id`),
    UNIQUE INDEX `class_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `material` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(70) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `classId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `material_id_key`(`id`),
    UNIQUE INDEX `material_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

-- CreateTable
CREATE TABLE `photo` (
    `id` VARCHAR(191) NOT NULL,
    `image` VARCHAR(150) NOT NULL,

    UNIQUE INDEX `photo_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `description` (
    `id` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(255) NOT NULL,
    `result` VARCHAR(100) NOT NULL,
    `photoId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `description_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `material` ADD CONSTRAINT `material_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz` ADD CONSTRAINT `quiz_materialId_fkey` FOREIGN KEY (`materialId`) REFERENCES `material`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `description` ADD CONSTRAINT `description_photoId_fkey` FOREIGN KEY (`photoId`) REFERENCES `photo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
