import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1647691945691 implements MigrationInterface {
    name = 'Migrations1647691945691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "salaries" (
                "id" SERIAL NOT NULL,
                "overtime_pay" integer NOT NULL,
                "allowance" character varying NOT NULL,
                "additional" character varying,
                "created_by" character varying,
                "updated_by" character varying,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "user_id" integer NOT NULL,
                CONSTRAINT "REL_c12591382bdd41fa79264f339e" UNIQUE ("user_id"),
                CONSTRAINT "PK_20ca60aa8d4201c7bcb430fdb36" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "user_tax" (
                "id" SERIAL NOT NULL,
                "user_id" integer NOT NULL,
                "name" character varying,
                "tax" character varying NOT NULL,
                "bpjs" character varying NOT NULL,
                "description" character varying,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "REL_52655d5c0c3fa89f54575a7c12" UNIQUE ("user_id"),
                CONSTRAINT "PK_0a7d7fda471d4aa8dd655e73518" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-03-19'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-03-19'
        `);
        await queryRunner.query(`
            ALTER TABLE "salaries"
            ADD CONSTRAINT "FK_c12591382bdd41fa79264f339e0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "user_tax"
            ADD CONSTRAINT "FK_52655d5c0c3fa89f54575a7c123" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user_tax" DROP CONSTRAINT "FK_52655d5c0c3fa89f54575a7c123"
        `);
        await queryRunner.query(`
            ALTER TABLE "salaries" DROP CONSTRAINT "FK_c12591382bdd41fa79264f339e0"
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-03-19 00:00:00'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-03-19 00:00:00'
        `);
        await queryRunner.query(`
            DROP TABLE "user_tax"
        `);
        await queryRunner.query(`
            DROP TABLE "salaries"
        `);
    }

}
