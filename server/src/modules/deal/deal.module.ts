import { Module } from '@nestjs/common';
import { DealService } from './deal.service';
import { DealController } from './deal.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Deal } from '../../models/deal.model';

@Module({
  imports: [SequelizeModule.forFeature([Deal])],
  providers: [DealService],
  controllers: [DealController]
})
export class DealModule {}



