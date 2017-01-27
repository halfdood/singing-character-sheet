import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FaeModule } from './../fae/fae.module';
import { NotFoundComponent } from './../not-found/not-found.component';
import { StoreService } from './../services/store.service';
import { SystemSelectComponent } from './../system-select/system-select.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SystemSelectComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FaeModule,
    FormsModule,
    HttpModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
