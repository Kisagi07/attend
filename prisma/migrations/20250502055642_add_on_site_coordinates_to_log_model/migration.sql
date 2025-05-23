-- AlterTable
ALTER TABLE `logs` ADD COLUMN `clock_in_picture` VARCHAR(191) NULL,
    ADD COLUMN `clock_out_picture` VARCHAR(191) NULL,
    ADD COLUMN `on_site_work` JSON NULL;
