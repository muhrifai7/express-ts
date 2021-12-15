import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1639555331563 implements MigrationInterface {
    name = 'Migrations1639555331563'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561"
        `);
        await queryRunner.query(`
            CREATE TABLE "absence" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "description" character varying NOT NULL,
                "from" character varying NOT NULL,
                "to" character varying NOT NULL,
                "created_by" character varying NOT NULL,
                "updated_by" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_30089b15c0f880f026581218c16" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "attendance" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying NOT NULL,
                "attendance_date" character varying NOT NULL,
                "time_of_entry" character varying NOT NULL,
                "time_of_out" character varying NOT NULL,
                "total_working_days" character varying NOT NULL,
                "created_by" character varying NOT NULL,
                "updated_by" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_ee0ffe42c1f1a01e72b725c0cb2" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "bank" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "code" character varying NOT NULL,
                CONSTRAINT "PK_7651eaf705126155142947926e8" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "bank_account" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nik" character varying NOT NULL,
                "description" character varying NOT NULL,
                "account_number" character varying NOT NULL,
                "created_by" character varying NOT NULL,
                "updated_by" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_f3246deb6b79123482c6adb9745" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "modules" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "code" character varying NOT NULL,
                "can_create" character varying NOT NULL,
                "can_update" character varying NOT NULL,
                "can_read" character varying NOT NULL,
                "can_delete" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_7dbefd488bd96c5bf31f0ce0c95" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "email_blast" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "subject" character varying NOT NULL,
                "email_type" character varying NOT NULL,
                "content" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "user_id" integer,
                CONSTRAINT "PK_4582502e03da142a4449da8d34c" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "furlough" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nik" character varying NOT NULL,
                "description" character varying NOT NULL,
                "leave_date" character varying NOT NULL,
                "created_by" character varying NOT NULL,
                "updated_by" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_ef606229ae3c12a062a6808334c" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "info" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying NOT NULL,
                "subtitle" character varying NOT NULL,
                "image_url" character varying NOT NULL,
                "content" character varying NOT NULL,
                "created_by" character varying NOT NULL,
                "updated_by" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_687dc5e25f4f1ee093a45b68bb7" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "occupation" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "code" character varying NOT NULL,
                "name" integer NOT NULL,
                "daily_rate" character varying NOT NULL,
                "montly_rate" character varying NOT NULL,
                "working_days_per_month" character varying NOT NULL,
                "updated_by" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_07cfcefef555693d96dce8805c5" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "overtime" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nip" character varying NOT NULL,
                "overtime_date" integer NOT NULL,
                "description" character varying NOT NULL,
                "updated_by" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_9c8b3927dee0be83907202c2389" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "salary" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nip" character varying NOT NULL,
                "total_pay" integer NOT NULL,
                "paid_date" character varying NOT NULL,
                "created_by" character varying NOT NULL,
                "updated_by" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_3ac75d9585433a6264e618a6503" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "sub_modules" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "code" character varying NOT NULL,
                "can_create" character varying NOT NULL,
                "can_update" character varying NOT NULL,
                "can_read" character varying NOT NULL,
                "can_delete" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_5ff0a1cb4fee84375a8caeefa47" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "UQ_fb2e442d14add3cefbdf33c4561"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "role_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "total_pay"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "paid_date"
        `);
        await queryRunner.query(`
            ALTER TABLE "profile"
            ADD "place_of_birth" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "profile"
            ADD "date_of_birth" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "profile"
            ADD "religion" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "profile"
            ADD "academic" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "profile"
            ADD "title" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "profile"
            ADD "address" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "profile"
            ADD "city" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "profile"
            ADD "country" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "profile"
            ADD "postal_code" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "profile"
            ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()
        `);
        await queryRunner.query(`
            ALTER TABLE "profile"
            ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()
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
            ADD "module_id" uuid
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "UQ_78cb02d20ca6caa5a95331cbfb0" UNIQUE ("module_id")
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
            ALTER TABLE "email_blast"
            ADD CONSTRAINT "FK_d75c0aa54cacf82f69fe7be1247" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "FK_997a794e811a6476943faa3d2c8" FOREIGN KEY ("role_id_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "FK_78cb02d20ca6caa5a95331cbfb0" FOREIGN KEY ("module_id") REFERENCES "modules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "FK_78cb02d20ca6caa5a95331cbfb0"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "FK_997a794e811a6476943faa3d2c8"
        `);
        await queryRunner.query(`
            ALTER TABLE "email_blast" DROP CONSTRAINT "FK_d75c0aa54cacf82f69fe7be1247"
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
            ALTER TABLE "user" DROP CONSTRAINT "UQ_78cb02d20ca6caa5a95331cbfb0"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "module_id"
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
            ALTER TABLE "profile" DROP COLUMN "updated_at"
        `);
        await queryRunner.query(`
            ALTER TABLE "profile" DROP COLUMN "created_at"
        `);
        await queryRunner.query(`
            ALTER TABLE "profile" DROP COLUMN "postal_code"
        `);
        await queryRunner.query(`
            ALTER TABLE "profile" DROP COLUMN "country"
        `);
        await queryRunner.query(`
            ALTER TABLE "profile" DROP COLUMN "city"
        `);
        await queryRunner.query(`
            ALTER TABLE "profile" DROP COLUMN "address"
        `);
        await queryRunner.query(`
            ALTER TABLE "profile" DROP COLUMN "title"
        `);
        await queryRunner.query(`
            ALTER TABLE "profile" DROP COLUMN "academic"
        `);
        await queryRunner.query(`
            ALTER TABLE "profile" DROP COLUMN "religion"
        `);
        await queryRunner.query(`
            ALTER TABLE "profile" DROP COLUMN "date_of_birth"
        `);
        await queryRunner.query(`
            ALTER TABLE "profile" DROP COLUMN "place_of_birth"
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
            ALTER TABLE "user"
            ADD "role_id" uuid
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "UQ_fb2e442d14add3cefbdf33c4561" UNIQUE ("role_id")
        `);
        await queryRunner.query(`
            DROP TABLE "sub_modules"
        `);
        await queryRunner.query(`
            DROP TABLE "salary"
        `);
        await queryRunner.query(`
            DROP TABLE "overtime"
        `);
        await queryRunner.query(`
            DROP TABLE "occupation"
        `);
        await queryRunner.query(`
            DROP TABLE "info"
        `);
        await queryRunner.query(`
            DROP TABLE "furlough"
        `);
        await queryRunner.query(`
            DROP TABLE "email_blast"
        `);
        await queryRunner.query(`
            DROP TABLE "modules"
        `);
        await queryRunner.query(`
            DROP TABLE "bank_account"
        `);
        await queryRunner.query(`
            DROP TABLE "bank"
        `);
        await queryRunner.query(`
            DROP TABLE "attendance"
        `);
        await queryRunner.query(`
            DROP TABLE "absence"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

}
