import { TokenAuthGuard } from '../../guards/tokenAuthGuard';
import { Body, Controller, Post, Get, Delete, Param, UseGuards } from '@nestjs/common';
import { DealService } from './deal.service';
import { DealDTO } from '../../DTOs';

@Controller('deals')
export class DealController {
    constructor(private readonly dealService: DealService) {}
  
    @Post()
    async createDeal(@Body() deal: DealDTO): Promise<DealDTO> {
      return this.dealService.createDeal(deal);
    }
  
    @UseGuards(TokenAuthGuard)
    @Get()
    async getAllDeals(): Promise<DealDTO[]> {
      return this.dealService.getAllDeals();
    }
  
    @Delete(':id')
    deleteDeal(@Param('id') id: string): Promise<boolean> {
      return this.dealService.deleteDeal(+id);
    }
  }