import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/dashboard/customer.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
    declarations: [AppComponent, CustomerComponent],
    // tslint:disable-next-line:max-line-length
    imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, FormsModule, AppRoutingModule, AgGridModule.withComponents([]), MatInputModule, MatFormFieldModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
