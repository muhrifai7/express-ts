import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1641977431753 implements MigrationInterface {
    name = 'Migrations1641977431753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "FK_78cb02d20ca6caa5a95331cbfb0"
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance" DROP COLUMN "attendance_date"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "UQ_78cb02d20ca6caa5a95331cbfb0"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "module_id"
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
            ALTER TABLE "modules"
            ADD "user_id" integer
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
            ALTER TABLE "attendance"
            ALTER COLUMN "title" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance" DROP COLUMN "time_of_entry"
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ADD "time_of_entry" TIMESTAMP
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance" DROP COLUMN "time_of_out"
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ADD "time_of_out" TIMESTAMP
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "total_working_days" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_by" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_by" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "modules"
            ADD CONSTRAINT "FK_c4a51ce3cef38e3099962872399" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "modules" DROP CONSTRAINT "FK_c4a51ce3cef38e3099962872399"
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_by"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_by"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "total_working_days"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance" DROP COLUMN "time_of_out"
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ADD "time_of_out" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance" DROP COLUMN "time_of_entry"
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ADD "time_of_entry" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "title"
            SET NOT NULL
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
            ALTER TABLE "modules" DROP COLUMN "user_id"
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
            ADD "module_id" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "UQ_78cb02d20ca6caa5a95331cbfb0" UNIQUE ("module_id")
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ADD "attendance_date" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "FK_78cb02d20ca6caa5a95331cbfb0" FOREIGN KEY ("module_id") REFERENCES "modules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

}
