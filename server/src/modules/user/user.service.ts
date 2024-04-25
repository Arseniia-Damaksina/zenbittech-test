import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../models/user.model';
import { CreateUserDTO } from '../../DTOs';
import * as bcrypt from 'bcrypt';
import { Errors } from '../../utils/errors';
import { AuthUserResponse } from '../../responses';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
  ) {}

  async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  async findUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async publicUser(email: string) {
    return this.userRepository.findOne({
      where: { email },
      attributes: {
        exclude: ['password'],
      },
    });
  }

  async getAllUsers(): Promise<CreateUserDTO[]> {
    return this.userRepository.findAll();
  }

  async createUser(user: CreateUserDTO): Promise<CreateUserDTO> {
    const existingUser = await this.findUserByEmail(user.email);
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    user.password = await this.hashPassword(user.password);

    await this.userRepository.create({
      username: user.username,
      email: user.email,
      password: user.password,
    });
    return user;
  }

  async deleteUser(id: number) {
    await this.userRepository.destroy({
      where: { id },
    });
    return true;
  }
}
