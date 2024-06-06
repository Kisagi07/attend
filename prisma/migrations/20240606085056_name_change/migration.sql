-- DropForeignKey
ALTER TABLE `project` DROP FOREIGN KEY `Project_projectLeadId_fkey`;

-- AddForeignKey
ALTER TABLE `project` ADD CONSTRAINT `project_projectLeadId_fkey` FOREIGN KEY (`projectLeadId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
