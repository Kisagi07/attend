/*
  Warnings:

  - The values [work_with_duty] on the enum `logs_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `logs` MODIFY `type` ENUM('work-from-home', 'sick', 'work-from-office', 'special-attendance') NOT NULL DEFAULT 'work-from-office';
