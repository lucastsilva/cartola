import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormatPlayerImgPipe } from './common/pipes/format-player-img.pipe';

import { MaterializeModule } from 'angular2-materialize';
import { NavbarComponent } from './navbar/navbar.component';
import { MercadoComponent } from './mercado/mercado.component';
import { ParciaisComponent } from './parciais/parciais.component';
import { ClubeImgPipe } from './common/pipes/clube-img.pipe';
import { RodadaComponent } from './rodada/rodada.component';
import { AtletaScoutPipe } from './common/pipes/atleta-scout.pipe';

const appRoutes: Routes = [
  { path: 'mercado', component: MercadoComponent },
  { path: 'rodada', component: RodadaComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    FormatPlayerImgPipe,
    NavbarComponent,
    MercadoComponent,
    ParciaisComponent,
    ClubeImgPipe,
    RodadaComponent,
    AtletaScoutPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    HttpClientModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
