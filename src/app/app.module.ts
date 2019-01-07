import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChartModule , HIGHCHARTS_MODULES } from 'angular-highcharts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardService } from './dashboard.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {DemopaisComponent} from './demopais/demopais.component';





@NgModule({
  declarations: [
    AppComponent,
    DemopaisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule ,
    ChartModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    DashboardService

  ],
  bootstrap: [AppComponent],
  entryComponents :[DemopaisComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }


