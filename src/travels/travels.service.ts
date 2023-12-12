import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TravelDto } from './travel.dto';

@Injectable()
export class TravelService {
  getTravels(): Observable<TravelDto[]> {
    return Observable.create((observer) => {
      axios
        .get('https://5f27781bf5d27e001612e057.mockapi.io/webprovise/travels')
        .then((response: AxiosResponse<TravelDto[]>) => {
          if (response.data) {
            observer.next(response.data);
            observer.complete();
          } else {
            observer.error('No data received from the server');
          }
        })
        .catch((error) => {
          observer.error('Error fetching data: ' + error.message);
        });
    });
  }
}