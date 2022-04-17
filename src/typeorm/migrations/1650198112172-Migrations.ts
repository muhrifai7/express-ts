import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1650198112172 implements MigrationInterface {
    name = 'Migrations1650198112172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "payroll"
            ALTER COLUMN "updated_by" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-04-17'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-04-17'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-04-17 00:00:00'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-04-17 00:00:00'
        `);
        await queryRunner.query(`
            ALTER TABLE "payroll"
            ALTER COLUMN "updated_by"
            SET NOT NULL
        `);
    }

}
