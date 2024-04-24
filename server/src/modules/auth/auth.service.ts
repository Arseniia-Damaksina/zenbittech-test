import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDTO, LoginUserDTO } from '../../DTOs';
import { Errors } from '../../utils/errors';
import * as bcrypt from 'bcrypt';
import { AuthUserResponse } from '../../responses';
import { TokenService } from '../token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async registerUser(user: CreateUserDTO): Promise<CreateUserDTO> {
    const userExists = await this.userService.findUserByEmail(user.email);
    if (userExists) {
      throw new BadRequestException(Errors.USER_EXISTS);
    }
    return this.userService.createUser(user);
  }

  async loginUser(user: LoginUserDTO): Promise<AuthUserResponse> {
    const userExists = await this.userService.findUserByEmail(user.email);
    if (!userExists) {
      throw new BadRequestException(Errors.USER_NOT_EXIST);
    }

    const validatePassword = await bcrypt.compare(
      user.password,
      userExists.password,
    );
    if (!validatePassword) {
      throw new BadRequestException(Errors.WRONG_CREDENTIALS);
    }

    const token = await this.tokenService.generateJwtToken(user.email)

    const userWithoutPassword = await this.userService.publicUser(user.email);

    return {...userWithoutPassword, token};
  }
  
}
