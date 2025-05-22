/*
  Warnings:

  - You are about to drop the column `on_site_work` on the `logs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `logs` DROP COLUMN `on_site_work`,
    ADD COLUMN `on_site_coordinates` JSON NULL;
