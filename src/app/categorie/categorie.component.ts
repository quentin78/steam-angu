import { Component, OnInit } from '@angular/core';

import { jeux } from './jeux.model';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  listeJeux: Array<jeux>;
  
  constructor() {

  }

  ngOnInit() {
  }

}
