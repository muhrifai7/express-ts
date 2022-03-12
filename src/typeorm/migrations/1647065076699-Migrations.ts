import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1647065076699 implements MigrationInterface {
    name = 'Migrations1647065076699'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "salaries"
            ADD "user_id" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salaries"
            ADD CONSTRAINT "UQ_c12591382bdd41fa79264f339e0" UNIQUE ("user_id")
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-03-12'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-03-12'
        `);
        await queryRunner.query(`
            ALTER TABLE "salaries"
            ADD CONSTRAINT "FK_c12591382bdd41fa79264f339e0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "salaries" DROP CONSTRAINT "FK_c12591382bdd41fa79264f339e0"
        `);
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
        await queryRunner.query(`
            ALTER TABLE "salaries" DROP CONSTRAINT "UQ_c12591382bdd41fa79264f339e0"
        `);
        await queryRunner.query(`
            ALTER TABLE "salaries" DROP COLUMN "user_id"
        `);
    }

}
