import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  currentHero: Hero;

  @Output()
  helloClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  lookHello(hello) {
    this.helloClick.emit(hello);
  }

  imgUrl = "http://www.baidu.com/img/bd_logo1.png"
}
