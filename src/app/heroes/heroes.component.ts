import { Component, OnInit } from '@angular/core';

// @ means it's a "decorator"
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  constructor() { }

  ngOnInit() {
  }

}
