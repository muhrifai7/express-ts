import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1647063363672 implements MigrationInterface {
    name = 'Migrations1647063363672'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "department"
            ADD "user_id" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "department"
            ADD CONSTRAINT "UQ_9104d98173511557613e7ef99be" UNIQUE ("user_id")
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
            ALTER TABLE "department"
            ADD CONSTRAINT "FK_9104d98173511557613e7ef99be" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "department" DROP CONSTRAINT "FK_9104d98173511557613e7ef99be"
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
            ALTER TABLE "department" DROP CONSTRAINT "UQ_9104d98173511557613e7ef99be"
        `);
        await queryRunner.query(`
            ALTER TABLE "department" DROP COLUMN "user_id"
        `);
    }

}
