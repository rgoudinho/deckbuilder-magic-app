import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';
import { DecksPageComponent } from './decks-page/decks-page.component';

const routes: Routes = [
  {path: 'builder', component: DeckBuilderComponent },
  {path: 'decks', component:  DecksPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
