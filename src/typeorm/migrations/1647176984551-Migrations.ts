import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1647176984551 implements MigrationInterface {
    name = 'Migrations1647176984551'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-03-13'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-03-13'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-03-12 00:00:00'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-03-12 00:00:00'
        `);
    }

}
