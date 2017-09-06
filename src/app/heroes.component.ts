import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[]
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes:Hero[];

  constructor(
    private router: Router,
    private heroService:HeroService){ }

  //heroes= this.heroService.getHeroData();   //not while using promise-returning method.

  getHeroesFromService():void{
    this.heroService.getHeroesSlowly().then(heroes=> this.heroes=heroes);
  }

  ngOnInit():void{
    this.getHeroesFromService();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  goToDetails(): void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}



