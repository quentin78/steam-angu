import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoyenneComponent } from './moyenne/moyenne.component';
import { JeuxComponent } from './jeux/jeux.component';
import { JeuxService } from './jeux.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { ClassementComponent } from './classement/classement.component';

@NgModule({
  declarations: [
    AppComponent,
    MoyenneComponent,
    JeuxComponent,
    HeaderComponent,
    FooterComponent,
    //ClassementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [JeuxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
