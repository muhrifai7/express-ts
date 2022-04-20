import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1648963288884 implements MigrationInterface {
    name = 'Migrations1648963288884'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "salaries"
            ADD "total_salaries" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "tu_user"
            ADD "account_number" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "tu_user"
            ADD "join_date" TIMESTAMP NOT NULL DEFAULT now()
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-04-03'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-04-03'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-04-01 00:00:00'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-04-01 00:00:00'
        `);
        await queryRunner.query(`
            ALTER TABLE "tu_user" DROP COLUMN "join_date"
        `);
        await queryRunner.query(`
            ALTER TABLE "tu_user" DROP COLUMN "account_number"
        `);
        await queryRunner.query(`
            ALTER TABLE "salaries" DROP COLUMN "total_salaries"
        `);
    }

}
