-- AlterTable
ALTER TABLE `projects` MODIFY `status` ENUM('in_progress', 'pending', 'completed') NOT NULL DEFAULT 'pending';
