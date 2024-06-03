-- CreateTable
CREATE TABLE `DayOffRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `request_date` DATETIME(3) NOT NULL,
    `leave_type` VARCHAR(191) NOT NULL,
    `status` ENUM('approved', 'pending', 'rejected') NOT NULL DEFAULT 'pending',
    `comment` VARCHAR(191) NOT NULL,
    `leave_start_date` DATETIME(3) NOT NULL,
    `leave_end_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
