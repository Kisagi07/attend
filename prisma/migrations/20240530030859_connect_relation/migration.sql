/*
  Warnings:

  - You are about to drop the column `leave_end_date` on the `dayoffrequest` table. All the data in the column will be lost.
  - You are about to drop the column `leave_start_date` on the `dayoffrequest` table. All the data in the column will be lost.
  - You are about to drop the column `leave_type` on the `dayoffrequest` table. All the data in the column will be lost.
  - You are about to drop the column `request_date` on the `dayoffrequest` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `dayoffrequest` table. All the data in the column will be lost.
  - Added the required column `leaveEndDate` to the `DayOffRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leaveStartDate` to the `DayOffRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leaveType` to the `DayOffRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requestDate` to the `DayOffRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `DayOffRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `dayoffrequest` DROP COLUMN `leave_end_date`,
    DROP COLUMN `leave_start_date`,
    DROP COLUMN `leave_type`,
    DROP COLUMN `request_date`,
    DROP COLUMN `user_id`,
    ADD COLUMN `leaveEndDate` DATETIME(3) NOT NULL,
    ADD COLUMN `leaveStartDate` DATETIME(3) NOT NULL,
    ADD COLUMN `leaveType` VARCHAR(191) NOT NULL,
    ADD COLUMN `requestDate` DATETIME(3) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `DayOffRequest` ADD CONSTRAINT `DayOffRequest_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
