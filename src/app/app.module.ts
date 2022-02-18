import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from "@angular/router";
import { TheaterComponent } from './theater/theater.component';
import { CinemaComponent } from './cinema/cinema.component';
import { ConcertComponent } from './concert/concert.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AllEventsComponent } from './all-events/all-events.component';





const appRoutes: Routes =
[
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cinema', component: CinemaComponent},
  {path: 'concert', component: ConcertComponent},
  {path: 'theater', component: TheaterComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'allEvents', component: AllEventsComponent}

  ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TheaterComponent,
    CinemaComponent,
    ConcertComponent,
    ContactComponent,
    AllEventsComponent,
    AllEventsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
