-- DropForeignKey
ALTER TABLE `projects` DROP FOREIGN KEY `Project_projectLeadId_fkey`;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `project_projectLeadId_fkey` FOREIGN KEY (`projectLeadId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
