import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Utilities/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { TopHeadlinesComponent } from './Components/top-headlines/top-headlines.component';
import { FooterComponent } from './Utilities/footer/footer.component';
import { TechnologyComponent } from './Components/technology/technology.component';
import { BusinessComponent } from './Components/business/business.component';
import { SportsComponent } from './Components/sports/sports.component';
import { EntertainmentComponent } from './Components/entertainment/entertainment.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopHeadlinesComponent,
    FooterComponent,
    TechnologyComponent,
    BusinessComponent,
    SportsComponent,
    EntertainmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
