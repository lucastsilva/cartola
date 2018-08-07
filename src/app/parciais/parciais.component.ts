import {
  MeuTime,
  Atleta,
  Time,
  AtletasPontuados,
  Posicao
} from "./../app.model";
import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-parciais",
  templateUrl: "./parciais.component.html",
  styleUrls: ["./parciais.component.css"]
})
export class ParciaisComponent implements OnInit {
  atletas: Atleta[];
  posicoes: Posicao[];
  capitao_id: number;
  time: Time;
  esquema_id: number;
  pontos: number;
  patrimonio: number;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getToken().subscribe(token => {
      if (token !== "") {
        this.getMeuTime(token);
      }
    });
    // this.getAtletasPontuados();
  }

  getMeuTime(token: string) {
    this.appService.getMeuTime(token).subscribe((res: MeuTime) => {
      this.atletas = Object.values(res.atletas);
      this.posicoes = Object.values(res.posicoes);
      this.capitao_id = res.capitao_id;
      this.time = res.time;
      this.esquema_id = res.esquema_id;
      this.pontos = res.pontos;
      this.patrimonio = res.patrimonio;
    });
  }

  // getAtletasPontuados() {
  //   this.appService.getAtletasPontuados().subscribe((res: AtletasPontuados) => {
  //     this.atletas = Object.values(res.atletas);
  //     this.posicoes = Object.values(res.posicoes);
  //   });
  // }
}
