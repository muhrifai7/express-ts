import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1647839554018 implements MigrationInterface {
    name = 'Migrations1647839554018'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "salaries"
            ALTER COLUMN "overtime_pay" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salaries"
            ALTER COLUMN "allowance" DROP NOT NULL
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
            ALTER COLUMN "allowance"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salaries"
            ALTER COLUMN "overtime_pay"
            SET NOT NULL
        `);
    }

}
