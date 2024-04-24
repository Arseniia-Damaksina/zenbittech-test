import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../models/user.model';
import { CreateUserDTO } from '../../DTOs';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
  ) {}

  async hashPassword (password: string) {
    return bcrypt.hash(password, 10);
  }

  async createUser(user): Promise<CreateUserDTO> {
    user.password = await this.hashPassword(user.password);
    await this.userRepository.create(user);
    return user;
  }
}
