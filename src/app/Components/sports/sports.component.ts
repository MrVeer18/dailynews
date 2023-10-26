import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  sportData:any = []  
constructor(private _newsApiService: NewsApiService){}

ngOnInit():void{
  this._newsApiService.sports().subscribe((data)=>{
   this.sportData = data.sources
  }
  )}
}
