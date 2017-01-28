import { Component, OnInit } from '@angular/core';

import { JeuxService } from '../jeux.service';

//import { classement } from './classement.model';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent {

  constructor(public _jeuxService: JeuxService) {

  }
  jeux = this._jeuxService.getJeux;



}
