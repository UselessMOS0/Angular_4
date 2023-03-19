import { Component } from '@angular/core';
import { CiboserviceService } from './ciboservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cibo : any;
  constructor (private service : CiboserviceService) {}

  ngOnInit(): void{
    this.service.allFood().subscribe((data)=>this.cibo = data)
  }
}
