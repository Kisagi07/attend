-- AlterTable
ALTER TABLE `projects` ADD COLUMN `entertainment_spending` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `food_spending` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `lodging_spending` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `transportation_spending` INTEGER NOT NULL DEFAULT 0;
