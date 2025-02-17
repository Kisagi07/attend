-- AlterTable
ALTER TABLE `logs` MODIFY `type` ENUM('work-from-home', 'sick', 'work-from-office', 'special-attendance', 'on_site_work', 'non_schedule_overtime') NOT NULL DEFAULT 'work-from-office';
