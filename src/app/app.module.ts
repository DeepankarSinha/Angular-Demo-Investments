import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { InfocardComponent } from './infocard/infocard.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProgressbarComponent,
    InfocardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
