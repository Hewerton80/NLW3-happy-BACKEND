import {MigrationInterface, QueryRunner} from "typeorm";

export class createImageTable1602631601204 implements MigrationInterface {
    name = 'createImageTable1602631601204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `image_orphanage` (`id` int NOT NULL AUTO_INCREMENT, `orphanage_id` int NOT NULL, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `orphanage` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `latitude` float NOT NULL, `longitude` float NOT NULL, `about` text NOT NULL, `instructions` text NOT NULL, `opening_hours` varchar(255) NOT NULL, `open_on_weekends` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `image_orphanage` ADD CONSTRAINT `FK_02b7c72203429551c4ab769b339` FOREIGN KEY (`orphanage_id`) REFERENCES `orphanage`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `image_orphanage` DROP FOREIGN KEY `FK_02b7c72203429551c4ab769b339`");
        await queryRunner.query("DROP TABLE `orphanage`");
        await queryRunner.query("DROP TABLE `image_orphanage`");
    }

}
