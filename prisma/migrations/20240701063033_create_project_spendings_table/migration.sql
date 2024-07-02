/*
  Warnings:

  - You are about to drop the column `entertainment_spending` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `food_spending` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `lodging_spending` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `transportation_spending` on the `projects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `projects` DROP COLUMN `entertainment_spending`,
    DROP COLUMN `food_spending`,
    DROP COLUMN `lodging_spending`,
    DROP COLUMN `transportation_spending`;

-- CreateTable
CREATE TABLE `project_spendings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `project_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `type` ENUM('food', 'transportation', 'lodging', 'entertainment') NOT NULL,
    `amount` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `project_spendings` ADD CONSTRAINT `project_spendings_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_spendings` ADD CONSTRAINT `project_spendings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
