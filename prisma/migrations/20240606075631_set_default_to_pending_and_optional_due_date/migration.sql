-- AlterTable
ALTER TABLE `sub_task` MODIFY `status` ENUM('pending', 'in_progress', 'completed', 'uploaded') NOT NULL DEFAULT 'pending',
    MODIFY `dueDate` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `task` MODIFY `status` ENUM('pending', 'in_progress', 'completed', 'uploaded') NOT NULL DEFAULT 'pending',
    MODIFY `dueDate` DATETIME(3) NULL;
