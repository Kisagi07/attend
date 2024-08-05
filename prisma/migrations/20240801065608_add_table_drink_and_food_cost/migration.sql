-- CreateTable
CREATE TABLE `DrinkAndFoodCost` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` ENUM('drink', 'food') NOT NULL,
    `amount` INTEGER NOT NULL,
    `cost` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
