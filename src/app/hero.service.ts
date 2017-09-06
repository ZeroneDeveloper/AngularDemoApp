import{ Injectable } from '@angular/core';
import{ Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import{ Hero } from './hero';


const Heroes:Hero[]=[
  {id: 1, name: 'Vishnu'},
  {id: 2, name: 'Vivek'},
  {id: 3, name: 'Jayesh'},
  {id: 4, name: 'Paul'},
  {id: 5, name: 'Dony'}]

@Injectable()

export class HeroService{

  private heroesUrl = "localhost:3000/Heroes"  ;

  constructor(private http: Http) {}

    // getHeroData(): Hero[]{
    //     return Heroes;
    // }                            //Non promise-returning method

    //Promise-returning method--Below using http

    getHeroData(): Promise<Hero[]>{
       return Promise.resolve(Heroes);   //Without using http

      //  return this.http.get(this.heroesUrl)
      //  .toPromise()
      //  .then(response => response.json().data as Hero[])
      //  .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
      return this.getHeroData()
                 .then(heroes => heroes.find(hero => hero.id === id));
    }

    getHeroesSlowly(): Promise<Hero[]> {
       
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroData()), 1500);
        });
      }

      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }

}