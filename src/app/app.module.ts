import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarsComponent } from './stars/stars.component';
import { AddStarComponent } from './add-star/add-star.component';
import { FormsModule } from '@angular/forms';
import { UpdateStarComponent } from './update-star/update-star.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StarsComponent,
    AddStarComponent,
    UpdateStarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , 
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
