import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, DashboardComponent],
    imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule, AgGridModule.withComponents([])],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
