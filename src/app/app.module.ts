import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IsraelComponent } from './clock/israel/israel.component';
import { NewYorkComponent } from './clock/new-york/new-york.component';
import { SwissComponent } from './clock/swiss/swiss.component';
import { ItalyComponent } from './clock/italy/italy.component';
import { BelgiunComponent } from './clock/belgiun/belgiun.component';
import { SpainComponent } from './clock/spain/spain.component';
import { JordenComponent } from './clock/jorden/jorden.component';
import { NorwayComponent } from './clock/norway/norway.component';
import { FinlandComponent } from './clock/finland/finland.component';
import { UkraineComponent } from './clock/ukraine/ukraine.component';

@NgModule({
  declarations: [
    AppComponent,
    IsraelComponent,
    NewYorkComponent,
    SwissComponent,
    ItalyComponent,
    BelgiunComponent,
    SpainComponent,
    JordenComponent,
    NorwayComponent,
    FinlandComponent,
    UkraineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
