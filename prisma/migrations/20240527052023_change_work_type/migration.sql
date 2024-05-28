/*
  Warnings:

  - You are about to alter the column `work` on the `logs` table. The data in that column could be lost. The data in that column will be cast from `LongText` to `Json`.

*/
-- AlterTable
ALTER TABLE `logs` MODIFY `type` ENUM('work-from-home', 'sick', 'work-from-office', 'work_with_duty') NOT NULL DEFAULT 'work-from-office',
    MODIFY `work` JSON NULL;
