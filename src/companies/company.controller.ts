import { Controller, Get } from '@nestjs/common';

import { CompanyEntity } from './company.entity';
import { CompanyService } from './companies.service';
import { TravelService } from 'src/travels/travels.service';


@Controller('companies')
export class CompanyController {
  constructor(
    private readonly companyService: CompanyService,
    private readonly travelService: TravelService,
  ) {}

  @Get('nested-array')
  async getNestedArray(): Promise<CompanyEntity[]> {
    const companies = await this.companyService.getCompanies().toPromise();
    const travels = await this.travelService.getTravels().toPromise();
    return []; 
  }
}