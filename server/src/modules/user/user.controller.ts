import { CreateUserDTO } from '../../DTOs';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  UseGuards,
  Req,
  Param
} from '@nestjs/common';
import { AuthUserResponse } from '../../responses';
import { TokenAuthGuard } from '../../guards/tokenAuthGuard';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getAllUsers(): Promise<CreateUserDTO[]> {
    return this.userService.getAllUsers();
  }

  @Post('register')
  createUser(@Body() createUserDTO: CreateUserDTO): Promise<CreateUserDTO> {
    return this.userService.createUser(createUserDTO);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
  
}
