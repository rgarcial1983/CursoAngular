import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  filtro:string;

  constructor( private activateRoute:ActivatedRoute, private heroesService:HeroesService ) {

   }

  ngOnInit() {
    this.activateRoute.params.subscribe( params =>{
      //console.log(params['filtro']);
      this.filtro = params['filtro'];
      this.heroes = this.heroesService.buscarHeroes(params['filtro']);
      console.log(this.heroes);
    });
  }

}
