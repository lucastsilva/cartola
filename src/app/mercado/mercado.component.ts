import { Component, } from '@angular/core';
import { HttpParams } from "@angular/common/http";
import {
  Clube,
  ClubeID,
  Mercado,
  Posicao,
  Status,
  Atleta
} from "../app.model";
import { AppService } from '../app.service';

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.css'],
  providers: [AppService]
})
export class MercadoComponent {

  displayPlayers: boolean = false;
  clubes: Clube[];
  posicoes: Posicao[];
  status: Status[];
  atletas;
  atletasFilter: Atleta[];
  clubeIdSelecionado: number = 0;

  constructor(private appService: AppService) {    
    this.getMercado();
  }

  getMercado() {
    this.appService.getMercado().subscribe((res: Mercado) => {
      this.posicoes = Object.values(res.posicoes);
      this.status = Object.values(res.status);
      this.clubes = Object.values(res.clubes);
      this.atletas = Object.values(res.atletas);
    });
  }

  showPlayers(clube_id: number) {   
    this.displayPlayers = this.clubeIdSelecionado !== clube_id ? true : !this.displayPlayers;
    this.clubeIdSelecionado = clube_id;
    this.atletasFilter = this.atletas;
    if (this.displayPlayers) {
      this.atletasFilter = this.atletas.filter(
        atleta => atleta.clube_id === clube_id
      );
    }
  }
}
