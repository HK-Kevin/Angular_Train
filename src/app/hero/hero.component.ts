import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @ViewChild(HeroDetailComponent)
  detail: HeroDetailComponent;

  heros: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  hero: Hero;

  handerClick(data) {
    this.hero = data;
  }
  constructor() { }


  ngOnInit() {
  }

  lookDetail() {
    console.log('father get:' + this.detail);
  }
  helloClick(hello) {
    console.log(hello)
  }

}
