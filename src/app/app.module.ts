import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoyenneComponent } from './moyenne/moyenne.component';
import { JeuxComponent } from './jeux/jeux.component';
import { JeuxService } from './jeux.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';

//import { ClassementComponent } from './classement/classement.component';

@NgModule({
  declarations: [
    AppComponent,
    MoyenneComponent,
    JeuxComponent,
    HeaderComponent,
    FooterComponent,
    BibliothequeComponent,
    //ClassementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
      {
        path: 'bibliotheque',
        component: BibliothequeComponent
      }
    ])
  ],

  providers: [JeuxService],
  bootstrap: [AppComponent]
})
export class AppModule { }


