import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { RoleType } from '../entities/users/userTypes';
import { User } from '../entities/users/User';

export class SeedUsers1590519635401 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let user = new User();
    const userRepository = getRepository(User);

    user.username = 'Heisenberg';
    user.email = 'admin@admin.com';
    user.password = 'pass1';
    user.hashPassword();
    user.role = 'ADMINISTRATOR' as RoleType;
    await userRepository.save(user);

    user = new User();
    user.username = 'Jesse';
    user.email = 'standard@standard.com';
    user.password = 'pass1';
    user.hashPassword();
    user.role = 'STANDARD' as RoleType;
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    console.log('Not implemented');
  }
}
