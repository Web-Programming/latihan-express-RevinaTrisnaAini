import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList : HousingLocation[] = []
  housingservice : HousingService = inject(HousingService)

  constructor(){
    this.housingservice.getAllHousingLocations().then((housingLocationList: HousingLocation[])=>{
      this.housingLocationList = housingLocationList;
    });
  }
}