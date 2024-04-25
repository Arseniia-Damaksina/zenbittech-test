import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DealDTO } from '../../DTOs';
import { Deal } from '../../models/deal.model';

@Injectable()
export class DealService {
  constructor(
    @InjectModel(Deal) private readonly dealRepository: typeof Deal,
  ) {}

  async getAllDeals(): Promise<DealDTO[]> {
    return this.dealRepository.findAll();
  }

  async createDeal(deal: DealDTO): Promise<DealDTO> {
    await this.dealRepository.create({
      name: deal.name,
      price: deal.price,
      ticketPrice: deal.ticketPrice,
      yield: deal.yield,
      sold: deal.sold,
      daysLeft: deal.daysLeft,
      image: deal.image,
    });
    return deal;
  }

  async deleteDeal(id: number): Promise<boolean> {
    await this.dealRepository.destroy({
      where: { id },
    });
    return true;
  }
}