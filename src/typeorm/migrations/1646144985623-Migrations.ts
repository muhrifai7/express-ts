import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1646144985623 implements MigrationInterface {
    name = 'Migrations1646144985623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "salares_id" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "UQ_3a9fba60e9094fa50ffc36e3e8c" UNIQUE ("salares_id")
        `);
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
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "FK_3a9fba60e9094fa50ffc36e3e8c" FOREIGN KEY ("salares_id") REFERENCES "salaries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "FK_3a9fba60e9094fa50ffc36e3e8c"
        `);
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
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "UQ_3a9fba60e9094fa50ffc36e3e8c"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "salares_id"
        `);
    }

}
