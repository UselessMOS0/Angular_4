import { Component } from '@angular/core';
import { CiboserviceService } from '../ciboservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  cibo : any;
  query!: string;
  
  constructor (private service : CiboserviceService) {}

  ngOnInit(): void{
    this.service.allFood().subscribe((data)=>this.cibo = data)
  }
  submit(query: HTMLInputElement): void {

    if (!query.value) {
      this.service.allFood().subscribe((data)=>this.cibo = data)
      return;
    }
    this.query = query.value;
    this.service.searchFood(this.query).subscribe((data) => { this.cibo = data; console.log(this.cibo) });
  }
}
