-- AlterTable
ALTER TABLE `logs` MODIFY `type` ENUM('work-from-home', 'sick', 'work-from-office', 'work_with_duty', 'special-attendance') NOT NULL DEFAULT 'work-from-office';
