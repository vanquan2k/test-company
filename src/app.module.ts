import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { CompanyService } from './companies/companies.service';
import { TravelService } from './travels/travels.service';

@Module({
  imports: [GraphqlModule],
  controllers: [AppController],
  providers: [AppService, CompanyService , TravelService],
})
export class AppModule {}
