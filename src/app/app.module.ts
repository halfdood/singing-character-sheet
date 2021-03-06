import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FaeModule } from './../fae/fae.module';
import { FaeRoutingModule } from './../fae/fae-routing.module';
import { NotFoundComponent } from './../not-found/not-found.component';
import { StoreService } from './../services/store.service';
import { ToolbarService } from './../services/toolbar.service';
import { SystemSelectComponent } from './../system-select/system-select.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SystemSelectComponent
  ],
  imports: [
    BrowserModule,
    FaeModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FaeRoutingModule,
    AppRoutingModule
  ],
  providers: [StoreService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
