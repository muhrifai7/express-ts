import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1650196853859 implements MigrationInterface {
    name = 'Migrations1650196853859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "payroll"
            ADD "salaries_id" integer
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
        await queryRunner.query(`
            ALTER TABLE "payroll"
            ADD CONSTRAINT "FK_b13651381bc7fb6b56f44edb6cc" FOREIGN KEY ("salaries_id") REFERENCES "salaries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "payroll" DROP CONSTRAINT "FK_b13651381bc7fb6b56f44edb6cc"
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-04-03 00:00:00'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-04-03 00:00:00'
        `);
        await queryRunner.query(`
            ALTER TABLE "payroll" DROP COLUMN "salaries_id"
        `);
    }

}
