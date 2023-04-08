import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements AfterViewInit{
  title = 'deckbuilder-magic-app';

  data = [
    "https://images.ctfassets.net/s5n2t79q9icq/25hUDpNqolJ5dJ5oLtxJ4M/f299266e643ce88e73a1fb8fba55373b/422742_inquisitor_greyfax_tablet_wallpaper.jpg",
    "https://images.ctfassets.net/s5n2t79q9icq/7s9zp3RMpQIQoQyaUtC5y2/986b2c2c58be6abd71243486d7e60c71/422700_szarekh_the_silent_king_tablet_wallpaper.jpg",
    "https://images.ctfassets.net/s5n2t79q9icq/4vNnkbVViprdeNVz62P11/57d58d241f5dadfdfbaa8e5334e783b6/422744_abaddon_the_despoiler_tablet_wallpaper.jpg",
    "https://images.ctfassets.net/s5n2t79q9icq/2rjxGTdeKDoIyqbLleVFTA/c6940ee7f84223f785d9429d4b979cf9/wrenn-and-six-tablet-2x2-background-2448x2448.jpg",
    "https://images.ctfassets.net/s5n2t79q9icq/5AHMlqNyyZbY9HzT6rCOZj/6b61cfec38b7ff43d4acd5ac035a6101/senseis-divining-top-tablet-2x2-background-2448x2448.jpg",
    "https://images.ctfassets.net/s5n2t79q9icq/1Dri2oB7qU1vOxxxDJzFWi/d8e9bd9f874a5ff59710ae815791586b/grand-arbiter-augustin-iv-tablet-2x2-background-2448x2448.jpg",
    "https://images.ctfassets.net/s5n2t79q9icq/QLxHgIwbrJMeJYHkZKnN0/55ea63be0b4681b3c49d0c97046a1670/mana-vault-tablet-2x2-background-2448x2448.jpg",
    "https://images.ctfassets.net/s5n2t79q9icq/1lqqfYSbEteRilTVAdK6sB/9eef9f45913c30dc19bdbdb53f3df320/dockside-extortionist-tablet-2x2-background-2448x2448.jpg"
  ]

  public backgroundImage = 'url(\" '+ this.data[Math.floor(Math.random()*this.data.length)] +'\")';
  ngAfterViewInit(): void {
    this.backgroundImage;
    console.log(this.backgroundImage);
    console.log(Math.floor(Math.random() * 20));
  }
}
