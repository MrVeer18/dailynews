import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit {

topHeadlinesData:any = []  
constructor(private _newsApiService: NewsApiService){}

ngOnInit():void{
  this._newsApiService.topHeading().subscribe((data)=>{
   this.topHeadlinesData = data.articles
  }
  )}
}

