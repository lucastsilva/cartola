import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import {
  LoginAuth,
  AuthResponse,
  Clube,
  ClubeID,
  Mercado,
  Rodada,
  MeuTime,
  AtletasPontuados
} from "./app.model";
import { map } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppService {
  urlLoginGlobo = "https://login.globo.com/api/authentication";
  urlAPI = "https://api.cartolafc.globo.com/";
  urlGetClubes = `${this.urlAPI}clubes`;
  urlGetMercado = `${this.urlAPI}atletas/mercado`;
  urlRodada = `${this.urlAPI}partidas/`;
  urlTime = `${this.urlAPI}auth/time`;
  urlAtletasPontuados = `${this.urlAPI}atletas/pontuados`;

  private token = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) {}

  getToken() {
    return this.token.asObservable();
  }

  setToken(token: string) {
    return this.token.next(token);
  }

  setTokenHttpOptions(token: string) {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "X-GLB-Token": token
      })
    };
  }

  loginGlobo(loginAuth): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(this.urlLoginGlobo, loginAuth, {
        headers: { "Content-Type": "application/json" }
      })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  getMercado(): Observable<Mercado> {
    return this.http
      .get<Mercado>(this.urlGetMercado)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  getRodada(nrPartida: number): Observable<Rodada> {
    return this.http
      .get<Rodada>(this.urlRodada + nrPartida)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  getMeuTime(token: string): Observable<MeuTime> {
    return this.http.get<MeuTime>(this.urlTime, this.setTokenHttpOptions(token)).pipe(
      map(res => {
        return res;
      })
    );
  }

  getAtletasPontuados(): Observable<AtletasPontuados> {
    return this.http
      .get<AtletasPontuados>(this.urlAtletasPontuados)
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
