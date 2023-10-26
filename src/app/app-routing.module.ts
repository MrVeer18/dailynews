import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadlinesComponent } from './Components/top-headlines/top-headlines.component';
import { EntertainmentComponent } from './Components/entertainment/entertainment.component';
import { BusinessComponent } from './Components/business/business.component';
import { SportsComponent } from './Components/sports/sports.component';
import { TechnologyComponent } from './Components/technology/technology.component';

const routes: Routes = [
  {path:'', component:TopHeadlinesComponent},
  {path:'technology', component:TechnologyComponent},
  {path:'sports', component:SportsComponent},
  {path:'business', component:BusinessComponent},
  {path:'entertainment', component:EntertainmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
