import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit{


businessData:any = []  
constructor(private _newsApiService: NewsApiService){}

ngOnInit():void{
  this._newsApiService.business().subscribe((data)=>{
   this.businessData = data.sources
  }
  )}
}