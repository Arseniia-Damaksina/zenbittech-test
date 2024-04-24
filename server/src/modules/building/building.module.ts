import { Module } from '@nestjs/common';
import { BuildingService } from './building.service';
import { BuildingController } from './building.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Building } from '../../models/building.model';

@Module({
  imports: [SequelizeModule.forFeature([Building])],
  providers: [BuildingService],
  controllers: [BuildingController]
})
export class BuildingModule {}





