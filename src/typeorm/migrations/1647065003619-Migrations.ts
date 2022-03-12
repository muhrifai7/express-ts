import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1647065003619 implements MigrationInterface {
    name = 'Migrations1647065003619'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "modules"
            ADD "user_id" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "email_blast"
            ADD "user_id" integer
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
            ALTER TABLE "modules"
            ADD CONSTRAINT "FK_c4a51ce3cef38e3099962872399" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "email_blast"
            ADD CONSTRAINT "FK_d75c0aa54cacf82f69fe7be1247" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "email_blast" DROP CONSTRAINT "FK_d75c0aa54cacf82f69fe7be1247"
        `);
        await queryRunner.query(`
            ALTER TABLE "modules" DROP CONSTRAINT "FK_c4a51ce3cef38e3099962872399"
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
            ALTER TABLE "email_blast" DROP COLUMN "user_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "modules" DROP COLUMN "user_id"
        `);
    }

}
