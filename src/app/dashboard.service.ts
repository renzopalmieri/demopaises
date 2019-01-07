import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';

type EntityResponseType = HttpResponse<String[]>;



const URL_API_WB: string = environment.URL_API_WorldBank;
const URL_API_COUNTRY: string = environment.URL_API_Countrys;


@Injectable({ providedIn: 'root' })
export class DashboardService {

  constructor(private http: HttpClient) { }

restCountryWB(country?: any) {
  return this.http
  .get<any[]>(URL_API_WB + `/${country}/` + `indicators/NY.GDP.MKTP.KD.ZG?format=json`);
}

restAllCountry(){
  return this.http
  .get<any[]>(URL_API_COUNTRY );
}






}
