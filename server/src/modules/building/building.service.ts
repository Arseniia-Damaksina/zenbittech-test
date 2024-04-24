import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BuildingDTO } from '../../DTOs';
import { Building } from '../../models/building.model';

@Injectable()
export class BuildingService {
  constructor(
    @InjectModel(Building) private readonly buildingRepository: typeof Building,
  ) {}

  async getAllBuildings(): Promise<BuildingDTO[]> {
    return this.buildingRepository.findAll();
  }

  async createBuilding(building: BuildingDTO): Promise<BuildingDTO> {
    await this.buildingRepository.create({
      name: building.name,
      price: building.price,
      ticketPrice: building.ticketPrice,
      yield: building.yield,
      sold: building.sold,
      daysLeft: building.daysLeft,
      image: building.image,
    });
    return building;
  }

  async deleteBuilding(id: number): Promise<boolean> {
    await this.buildingRepository.destroy({
      where: { id },
    });
    return true;
  }
}