import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1639753012538 implements MigrationInterface {
    name = 'Migrations1639753012538'

    public async up(queryRunner: QueryRunner): Promise<void> {
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
            ADD "is_active" boolean NOT NULL DEFAULT true
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
            ALTER TABLE "absence" DROP CONSTRAINT "PK_30089b15c0f880f026581218c16"
        `);
        await queryRunner.query(`
            ALTER TABLE "absence" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "absence"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "absence"
            ADD CONSTRAINT "PK_30089b15c0f880f026581218c16" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance" DROP CONSTRAINT "PK_ee0ffe42c1f1a01e72b725c0cb2"
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ADD CONSTRAINT "PK_ee0ffe42c1f1a01e72b725c0cb2" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "bank" DROP CONSTRAINT "PK_7651eaf705126155142947926e8"
        `);
        await queryRunner.query(`
            ALTER TABLE "bank" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "bank"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "bank"
            ADD CONSTRAINT "PK_7651eaf705126155142947926e8" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "bank_account" DROP CONSTRAINT "PK_f3246deb6b79123482c6adb9745"
        `);
        await queryRunner.query(`
            ALTER TABLE "bank_account" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "bank_account"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "bank_account"
            ADD CONSTRAINT "PK_f3246deb6b79123482c6adb9745" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "FK_78cb02d20ca6caa5a95331cbfb0"
        `);
        await queryRunner.query(`
            ALTER TABLE "modules" DROP CONSTRAINT "PK_7dbefd488bd96c5bf31f0ce0c95"
        `);
        await queryRunner.query(`
            ALTER TABLE "modules" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "modules"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "modules"
            ADD CONSTRAINT "PK_7dbefd488bd96c5bf31f0ce0c95" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "email_blast" DROP CONSTRAINT "PK_4582502e03da142a4449da8d34c"
        `);
        await queryRunner.query(`
            ALTER TABLE "email_blast" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "email_blast"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "email_blast"
            ADD CONSTRAINT "PK_4582502e03da142a4449da8d34c" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "FK_afd2c87bee70dd5557f48911e66"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "REL_afd2c87bee70dd5557f48911e6"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "department_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "department_id" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "UQ_afd2c87bee70dd5557f48911e66" UNIQUE ("department_id")
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "REL_78cb02d20ca6caa5a95331cbfb"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "module_id"
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
            ALTER TABLE "department" DROP CONSTRAINT "PK_9a2213262c1593bffb581e382f5"
        `);
        await queryRunner.query(`
            ALTER TABLE "department" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "department"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "department"
            ADD CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "furlough" DROP CONSTRAINT "PK_ef606229ae3c12a062a6808334c"
        `);
        await queryRunner.query(`
            ALTER TABLE "furlough" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "furlough"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "furlough"
            ADD CONSTRAINT "PK_ef606229ae3c12a062a6808334c" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "info" DROP CONSTRAINT "PK_687dc5e25f4f1ee093a45b68bb7"
        `);
        await queryRunner.query(`
            ALTER TABLE "info" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "info"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "info"
            ADD CONSTRAINT "PK_687dc5e25f4f1ee093a45b68bb7" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "occupation" DROP CONSTRAINT "PK_07cfcefef555693d96dce8805c5"
        `);
        await queryRunner.query(`
            ALTER TABLE "occupation" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "occupation"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "occupation"
            ADD CONSTRAINT "PK_07cfcefef555693d96dce8805c5" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "overtime" DROP CONSTRAINT "PK_9c8b3927dee0be83907202c2389"
        `);
        await queryRunner.query(`
            ALTER TABLE "overtime" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "overtime"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "overtime"
            ADD CONSTRAINT "PK_9c8b3927dee0be83907202c2389" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP CONSTRAINT "PK_3ac75d9585433a6264e618a6503"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD CONSTRAINT "PK_3ac75d9585433a6264e618a6503" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "sub_modules" DROP CONSTRAINT "PK_5ff0a1cb4fee84375a8caeefa47"
        `);
        await queryRunner.query(`
            ALTER TABLE "sub_modules" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "sub_modules"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "sub_modules"
            ADD CONSTRAINT "PK_5ff0a1cb4fee84375a8caeefa47" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "FK_afd2c87bee70dd5557f48911e66" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
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
            ALTER TABLE "user" DROP CONSTRAINT "FK_afd2c87bee70dd5557f48911e66"
        `);
        await queryRunner.query(`
            ALTER TABLE "sub_modules" DROP CONSTRAINT "PK_5ff0a1cb4fee84375a8caeefa47"
        `);
        await queryRunner.query(`
            ALTER TABLE "sub_modules" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "sub_modules"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "sub_modules"
            ADD CONSTRAINT "PK_5ff0a1cb4fee84375a8caeefa47" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP CONSTRAINT "PK_3ac75d9585433a6264e618a6503"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "salary"
            ADD CONSTRAINT "PK_3ac75d9585433a6264e618a6503" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "overtime" DROP CONSTRAINT "PK_9c8b3927dee0be83907202c2389"
        `);
        await queryRunner.query(`
            ALTER TABLE "overtime" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "overtime"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "overtime"
            ADD CONSTRAINT "PK_9c8b3927dee0be83907202c2389" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "occupation" DROP CONSTRAINT "PK_07cfcefef555693d96dce8805c5"
        `);
        await queryRunner.query(`
            ALTER TABLE "occupation" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "occupation"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "occupation"
            ADD CONSTRAINT "PK_07cfcefef555693d96dce8805c5" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "info" DROP CONSTRAINT "PK_687dc5e25f4f1ee093a45b68bb7"
        `);
        await queryRunner.query(`
            ALTER TABLE "info" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "info"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "info"
            ADD CONSTRAINT "PK_687dc5e25f4f1ee093a45b68bb7" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "furlough" DROP CONSTRAINT "PK_ef606229ae3c12a062a6808334c"
        `);
        await queryRunner.query(`
            ALTER TABLE "furlough" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "furlough"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "furlough"
            ADD CONSTRAINT "PK_ef606229ae3c12a062a6808334c" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "department" DROP CONSTRAINT "PK_9a2213262c1593bffb581e382f5"
        `);
        await queryRunner.query(`
            ALTER TABLE "department" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "department"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "department"
            ADD CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "UQ_78cb02d20ca6caa5a95331cbfb0"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "module_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "module_id" uuid
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "REL_78cb02d20ca6caa5a95331cbfb" UNIQUE ("module_id")
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "UQ_afd2c87bee70dd5557f48911e66"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "department_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "department_id" uuid
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "REL_afd2c87bee70dd5557f48911e6" UNIQUE ("department_id")
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "FK_afd2c87bee70dd5557f48911e66" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "email_blast" DROP CONSTRAINT "PK_4582502e03da142a4449da8d34c"
        `);
        await queryRunner.query(`
            ALTER TABLE "email_blast" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "email_blast"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "email_blast"
            ADD CONSTRAINT "PK_4582502e03da142a4449da8d34c" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "modules" DROP CONSTRAINT "PK_7dbefd488bd96c5bf31f0ce0c95"
        `);
        await queryRunner.query(`
            ALTER TABLE "modules" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "modules"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "modules"
            ADD CONSTRAINT "PK_7dbefd488bd96c5bf31f0ce0c95" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "FK_78cb02d20ca6caa5a95331cbfb0" FOREIGN KEY ("module_id") REFERENCES "modules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "bank_account" DROP CONSTRAINT "PK_f3246deb6b79123482c6adb9745"
        `);
        await queryRunner.query(`
            ALTER TABLE "bank_account" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "bank_account"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "bank_account"
            ADD CONSTRAINT "PK_f3246deb6b79123482c6adb9745" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "bank" DROP CONSTRAINT "PK_7651eaf705126155142947926e8"
        `);
        await queryRunner.query(`
            ALTER TABLE "bank" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "bank"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "bank"
            ADD CONSTRAINT "PK_7651eaf705126155142947926e8" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance" DROP CONSTRAINT "PK_ee0ffe42c1f1a01e72b725c0cb2"
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ADD CONSTRAINT "PK_ee0ffe42c1f1a01e72b725c0cb2" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "absence" DROP CONSTRAINT "PK_30089b15c0f880f026581218c16"
        `);
        await queryRunner.query(`
            ALTER TABLE "absence" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "absence"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "absence"
            ADD CONSTRAINT "PK_30089b15c0f880f026581218c16" PRIMARY KEY ("id")
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
            ALTER TABLE "user" DROP COLUMN "is_active"
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
    }

}
