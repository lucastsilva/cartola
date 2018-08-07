import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Rodada, Partida, Clube } from '../app.model';

@Component({
  selector: 'app-rodada',
  templateUrl: './rodada.component.html',
  styleUrls: ['./rodada.component.css']
})
export class RodadaComponent implements OnInit {
  clubes: Clube[];
  partidas: Partida[];
  rodada: number;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getRodada();
  }

  getRodada() {
    this.appService.getRodada(11).subscribe((res: Rodada) => {
      this.clubes = Object.values(res.clubes);
      this.partidas = res.partidas;
      this.rodada = res.rodada;
    });
  }


}
