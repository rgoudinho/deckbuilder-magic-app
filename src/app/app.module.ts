import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';
import { DeckComponent } from './deck/deck.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { CardDeckComponent } from './card-deck/card-deck.component';
import { BackgroundImageComponent } from './background-image/background-image.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DeckBuilderComponent,
    DeckComponent,
    CardsComponent,
    CardComponent,
    CardDeckComponent,
    BackgroundImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
