import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit {
  technologyData: any = [];
  constructor(private _newsApiService: NewsApiService) {}

  ngOnInit(): void {
    this._newsApiService.technology().subscribe((data) => {
      this.technologyData = data.sources;
      // console.log(data);
      
    });
  }
}
