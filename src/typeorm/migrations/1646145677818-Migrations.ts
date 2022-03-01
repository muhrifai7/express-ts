import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1646145677818 implements MigrationInterface {
    name = 'Migrations1646145677818'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "FK_3a9fba60e9094fa50ffc36e3e8c"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
                RENAME COLUMN "salares_id" TO "salaries_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
                RENAME CONSTRAINT "UQ_3a9fba60e9094fa50ffc36e3e8c" TO "UQ_454d12fe235a3a86291175bd067"
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
            ADD CONSTRAINT "FK_454d12fe235a3a86291175bd067" FOREIGN KEY ("salaries_id") REFERENCES "salaries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "FK_454d12fe235a3a86291175bd067"
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
            ALTER TABLE "user"
                RENAME CONSTRAINT "UQ_454d12fe235a3a86291175bd067" TO "UQ_3a9fba60e9094fa50ffc36e3e8c"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
                RENAME COLUMN "salaries_id" TO "salares_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "FK_3a9fba60e9094fa50ffc36e3e8c" FOREIGN KEY ("salares_id") REFERENCES "salaries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

}
