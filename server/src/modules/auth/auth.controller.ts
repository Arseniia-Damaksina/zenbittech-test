import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO, LoginUserDTO } from '../../DTOs';
import { IsPostalCode } from 'class-validator';
import { AuthUserResponse } from '../../responses';
import { TokenAuthGuard } from '../../guards/tokenAuthGuard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register (@Body() user: CreateUserDTO): Promise<CreateUserDTO> {
        return this.authService.registerUser(user);
    }

    @Post('login')
    login (@Body() user: LoginUserDTO): Promise<AuthUserResponse> {
        return this.authService.loginUser(user);
    }    

    @UseGuards(TokenAuthGuard)
    @Post('test')
    test () {
        return true
    }
}
