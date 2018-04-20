import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { QuotationsComponent } from './quotations/quotations.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';
import { TempSensorComponent } from './temp-sensor/temp-sensor.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotationsComponent,
    NewsComponent,
    WeatherComponent,
    TempSensorComponent
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
