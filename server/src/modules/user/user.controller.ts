import { CreateUserDTO } from '../../DTOs';
import { UserService } from './user.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    createUser (@Body() createUserDTO: CreateUserDTO) {
        return this.userService.createUser(createUserDTO);
    }
}
