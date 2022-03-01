import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1646147074629 implements MigrationInterface {
    name = 'Migrations1646147074629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-03-01'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-03-01'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-03-01 00:00:00'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-03-01 00:00:00'
        `);
    }

}
