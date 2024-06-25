import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class MyService {
  constructor(private readonly httpService: HttpService) {}

  getDataFromIP(ip: string): Observable<AxiosResponse<any>> {
    const url = `http://${ip}/your-endpoint`; // replace with the actual endpoint you need to access
    return this.httpService.get(url);
  }
}
