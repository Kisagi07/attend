/*
  Warnings:

  - You are about to drop the `project` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_projecttousers` DROP FOREIGN KEY `_ProjectTousers_A_fkey`;

-- DropForeignKey
ALTER TABLE `project` DROP FOREIGN KEY `project_projectLeadId_fkey`;

-- DropTable
DROP TABLE `project`;

-- CreateTable
CREATE TABLE `projects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fund` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `status` ENUM('pending', 'in_progress', 'completed') NOT NULL DEFAULT 'pending',
    `priority` ENUM('low', 'normal', 'high', 'urgent') NOT NULL,
    `projectLeadId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_projectLeadId_fkey` FOREIGN KEY (`projectLeadId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectTousers` ADD CONSTRAINT `_ProjectTousers_A_fkey` FOREIGN KEY (`A`) REFERENCES `projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
