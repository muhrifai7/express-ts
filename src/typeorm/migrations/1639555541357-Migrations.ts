import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1639555541357 implements MigrationInterface {
    name = 'Migrations1639555541357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "FK_997a794e811a6476943faa3d2c8"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "UQ_997a794e811a6476943faa3d2c8"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "role_id_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "role"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "basic_salary"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "overtime_pay"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "tax"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "jamsostek"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "allowance"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "total_pay"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "paid_date"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "role_name" character varying NOT NULL DEFAULT 'STANDARD'
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "role_id" uuid
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "UQ_fb2e442d14add3cefbdf33c4561" UNIQUE ("role_id")
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "total_pay" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "paid_date" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "basic_salary" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "overtime_pay" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "tax" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "jamsostek" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "allowance" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "allowance"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "jamsostek"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "tax"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "overtime_pay"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "basic_salary"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "paid_date"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "total_pay"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "UQ_fb2e442d14add3cefbdf33c4561"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "role_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "role_name"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "paid_date" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "total_pay" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "allowance" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "jamsostek" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "tax" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "overtime_pay" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "basic_salary" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "role" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "role_id_id" uuid
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "UQ_997a794e811a6476943faa3d2c8" UNIQUE ("role_id_id")
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "FK_997a794e811a6476943faa3d2c8" FOREIGN KEY ("role_id_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

}
