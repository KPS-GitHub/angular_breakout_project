import { Component, OnInit } from '@angular/core';

import { HEROES } from '../mock-heroes';

// @ means it's a "decorator"
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // the caps lock HEROES is just from the tutorial - it doesn't have to be all caps
  // tutorial instructions - "add a heroes property to the class that exposes these heroes for binding"
  heroes = HEROES

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
