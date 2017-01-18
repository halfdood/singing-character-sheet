import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { FaeModule } from './fae/fae.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SystemSelectComponent } from './system-select/system-select.component';

import { StoreService } from './services/store.service';

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
