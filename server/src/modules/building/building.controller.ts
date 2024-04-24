import { Body, Controller, Post, Get, Delete, Param } from '@nestjs/common';
import { BuildingService } from './building.service';
import { BuildingDTO } from '../../DTOs';

@Controller('buildings')
export class BuildingController {
    constructor(private readonly buildingService: BuildingService) {}
  
    @Post()
    async createBuilding(@Body() building: BuildingDTO): Promise<BuildingDTO> {
      return this.buildingService.createBuilding(building);
    }
  
    @Get()
    async getAllBuildings(): Promise<BuildingDTO[]> {
      return this.buildingService.getAllBuildings();
    }
  
    @Delete(':id')
    deleteBuilding(@Param('id') id: string): Promise<boolean> {
      return this.buildingService.deleteBuilding(+id);
    }
  }