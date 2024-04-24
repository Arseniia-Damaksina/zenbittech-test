import { IsString, IsNumber } from "class-validator";

export class CreateUserDTO {
    @IsString()
    username: string

    @IsString()
    email: string

    @IsString()
    password: string
}

export class LoginUserDTO {
    @IsString()
    email: string

    @IsString()
    password: string
}

export class BuildingDTO {
    @IsString()
    name: string

    @IsNumber()
    price: number

    @IsNumber()
    ticketPrice: number

    @IsString()
    yield: string
    
    @IsNumber()
    sold: number

    @IsNumber()
    daysLeft: number

    @IsString()
    image: string
}