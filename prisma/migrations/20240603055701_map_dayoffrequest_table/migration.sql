-- DropForeignKey
ALTER TABLE `dayoffrequest` DROP FOREIGN KEY `DayOffRequest_userId_fkey`;

-- AddForeignKey
ALTER TABLE `dayoffrequest` ADD CONSTRAINT `dayoffrequest_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
