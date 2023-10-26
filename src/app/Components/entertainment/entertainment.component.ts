import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit{
  entertainmentData:any = []  
constructor(private _newsApiService: NewsApiService){}

ngOnInit():void{
  this._newsApiService.entertainment().subscribe((data)=>{
   this.entertainmentData = data.sources
  }
  )}
}
