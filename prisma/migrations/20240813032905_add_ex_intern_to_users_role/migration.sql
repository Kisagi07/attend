-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('admin', 'employee', 'intern', 'ex_employee', 'ex_intern') NOT NULL DEFAULT 'intern';
