-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('admin', 'employee', 'intern', 'ex_employee') NOT NULL DEFAULT 'intern';
