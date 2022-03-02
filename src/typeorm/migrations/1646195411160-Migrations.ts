import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1646195411160 implements MigrationInterface {
    name = 'Migrations1646195411160'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user_tax" DROP CONSTRAINT "FK_52655d5c0c3fa89f54575a7c123"
        `);
        await queryRunner.query(`
            ALTER TABLE "user_tax" DROP CONSTRAINT "UQ_52655d5c0c3fa89f54575a7c123"
        `);
        await queryRunner.query(`
            ALTER TABLE "user_tax" DROP COLUMN "user_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "salaries"
            ADD "user_tax_id" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "salaries"
            ADD CONSTRAINT "UQ_293535400965cdf138e08ee8c18" UNIQUE ("user_tax_id")
        `);
        await queryRunner.query(`
            ALTER TABLE "user_tax"
            ALTER COLUMN "name" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user_tax" DROP CONSTRAINT "UQ_1ac2ad6b435cde8af09555395d6"
        `);
        await queryRunner.query(`
            ALTER TABLE "user_tax"
            ALTER COLUMN "description" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-03-02'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-03-02'
        `);
        await queryRunner.query(`
            ALTER TABLE "salaries"
            ADD CONSTRAINT "FK_293535400965cdf138e08ee8c18" FOREIGN KEY ("user_tax_id") REFERENCES "user_tax"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "salaries" DROP CONSTRAINT "FK_293535400965cdf138e08ee8c18"
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "updated_at"
            SET DEFAULT '2022-03-02 00:00:00'
        `);
        await queryRunner.query(`
            ALTER TABLE "attendance"
            ALTER COLUMN "created_at"
            SET DEFAULT '2022-03-02 00:00:00'
        `);
        await queryRunner.query(`
            ALTER TABLE "user_tax"
            ALTER COLUMN "description"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user_tax"
            ADD CONSTRAINT "UQ_1ac2ad6b435cde8af09555395d6" UNIQUE ("name")
        `);
        await queryRunner.query(`
            ALTER TABLE "user_tax"
            ALTER COLUMN "name"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "salaries" DROP CONSTRAINT "UQ_293535400965cdf138e08ee8c18"
        `);
        await queryRunner.query(`
            ALTER TABLE "salaries" DROP COLUMN "user_tax_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "user_tax"
            ADD "user_id" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user_tax"
            ADD CONSTRAINT "UQ_52655d5c0c3fa89f54575a7c123" UNIQUE ("user_id")
        `);
        await queryRunner.query(`
            ALTER TABLE "user_tax"
            ADD CONSTRAINT "FK_52655d5c0c3fa89f54575a7c123" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

}
