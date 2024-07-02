/*
  Warnings:

  - You are about to drop the column `dateTime` on the `projects_activity` table. All the data in the column will be lost.
  - Added the required column `date_time` to the `projects_activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `projects_activity` DROP COLUMN `dateTime`,
    ADD COLUMN `date_time` DATETIME(3) NOT NULL;
