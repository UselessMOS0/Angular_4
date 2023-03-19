import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CiboserviceService } from '../ciboservice.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  food: any;
  objk = Object.keys;
  
  constructor(
    private route: ActivatedRoute,
    private service: CiboserviceService,
    private location: Location,) { }

    ngOnInit(): void {
      //Ottengo l'observable che notifica le informazioni sulla route attiva
      this.route.paramMap.subscribe(this.getRouterParam);
    }
    getRouterParam = (params: ParamMap) => {
      let foodId = params.get('id'); //Ottengo l'id dalla ParamMap
      console.log(foodId); //Stampo su console
      //spotifyServiceObs va dichiarato
      if (foodId != null) {
        this.service.getFood(foodId).subscribe((data) => {
          this.food = data;
        })
      }
    }
    back() : void
    {
      this.location.back();
    }
}
