/*
  Warnings:

  - You are about to drop the `sequelizemeta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sub_task` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `sub_task` DROP FOREIGN KEY `sub_task_taskId_fkey`;

-- DropForeignKey
ALTER TABLE `task` DROP FOREIGN KEY `task_userId_fkey`;

-- DropTable
DROP TABLE `sequelizemeta`;

-- DropTable
DROP TABLE `sub_task`;

-- DropTable
DROP TABLE `task`;
