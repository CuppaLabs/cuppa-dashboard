import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { ChartModule } from 'angular-highcharts';
import { DashboardService } from './dashboard.services';
@NgModule({
    declarations: [DashboardComponent],
    imports: [ BrowserModule,FormsModule,AngularMultiSelectModule,ChartModule],
    exports: [DashboardComponent],
    providers: [DashboardService],
    bootstrap: [DashboardComponent]
})
export class DashboardModule {

}