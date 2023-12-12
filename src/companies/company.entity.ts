import { CompanyDto } from "./company.dto";


export class CompanyEntity extends CompanyDto {
  cost: number;
  children: CompanyEntity[];
}