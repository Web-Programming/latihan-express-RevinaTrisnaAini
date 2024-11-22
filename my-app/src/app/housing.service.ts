import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { HousingLocationComponent } from './housing-location/housing-location.component';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  url = 'http://localhost:3000/housing';

  constructor() {}

  async getAllHousingLocations() : Promise<HousingLocation[]>{
    const data = await fetch(this.url);
    return await data.json()??[];
    }

  async getHousingLocationId(id : Number): Promise<HousingLocation[]>{
    const data = await fetch (this.url + '/'+id);
    return await data.json()?? {};
  }

  submitApplication(fristName: string, lastName: string, email: string){
    console.log(fristName, lastName, email)
  }
}
