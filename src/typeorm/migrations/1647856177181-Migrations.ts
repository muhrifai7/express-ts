import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1647856177181 implements MigrationInterface {
    name = 'Migrations1647856177181'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "salaries"
                RENAME COLUMN "overtime_pay" TO "overtime"
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-03-21'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-03-21'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-03-21 00:00:00'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-03-21 00:00:00'
        `);
        await queryRunner.query(`
            ALTER TABLE "salaries"
                RENAME COLUMN "overtime" TO "overtime_pay"
        `);
    }

}
