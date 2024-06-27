/*
  Warnings:

  - Added the required column `description` to the `projects_activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `projects_activity` ADD COLUMN `description` VARCHAR(191) NOT NULL;
