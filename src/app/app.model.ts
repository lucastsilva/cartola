export interface LoginAuth {
  captcha: string;
  payload: Login;
}

export interface Login {
  email: string;
  password: string;
  serviceId: number;
}

export interface AuthResponse {
  glbId: string;
  id: string;
  userMessage: string;
}

export interface Escudos {
  "60x60": string;
  "45x45": string;
  "30x30": string;
}

export interface Clube {
  id: number;
  nome: string;
  abreviacao: string;
  posicao: number;
  escudos: Escudos;
}

export interface ClubeID {
  [key: string]: Clube;
}

export interface Scout {
  CA?: number;
  FC?: number;
  FD?: number;
  FF?: number;
  FS?: number;
  G?: number;
  I?: number;
  PE?: number;
  RB?: number;
  A?: number;
  SG?: number;
  DD?: number;
  GS?: number;
  GC?: number;
  CV?: number;
  FT?: number;
  DP?: number;
  PP?: number;
}

export interface Atleta {
  nome: string;
  slug: string;
  apelido: string;
  foto: string;
  atleta_id: number;
  rodada_id: number;
  clube_id: number;
  posicao_id: number;
  status_id: number;
  pontos_num: number;
  preco_num: number;
  variacao_num: number;
  media_num: number;
  jogos_num: number;
  scout: Scout;
}

export interface Posicao {
  id: number;
  nome: string;
  abreviacao: string;
}

export interface Status {
  id: number;
  nome: string;
}

export interface Mercado {
  atletas: Atleta[];
  clubes: Clube[];
  posicoes: Posicao[];
  status: Status;
}

export interface Partida {
  partida_id: number;
  clube_casa_id: number;
  clube_casa_posicao: number;
  clube_visitante_id: number;
  aproveitamento_mandante: string[];
  aproveitamento_visitante: string[];
  clube_visitante_posicao: number;
  partida_data: string;
  local: string;
  valida: boolean;
  placar_oficial_mandante: number;
  placar_oficial_visitante: number;
  url_confronto: string;
  url_transmissao: string;
}

export interface Rodada {
  partidas: Partida[];
  clubes: Clube[];
  rodada: number;
}

export interface Time {
  time_id: number;
  clube_id: number;
  esquema_id: number;
  globo_id: string;
  facebook_id: number;
  foto_perfil: string;
  nome: string;
  nome_cartola: string;
  slug: string;
  tipo_escudo: number;
  cor_fundo_escudo: string;
  cor_borda_escudo: string;
  cor_primaria_estampa_escudo: string;
  cor_secundaria_estampa_escudo: string;
  url_escudo_svg: string;
  url_escudo_png: string;
  url_camisa_svg: string;
  url_camisa_png: string;
  tipo_estampa_escudo: number;
  tipo_adorno: number;
  tipo_camisa: number;
  tipo_estampa_camisa: number;
  cor_camisa: string;
  cor_primaria_estampa_camisa: string;
  cor_secundaria_estampa_camisa: string;
  rodada_time_id: number;
  assinante: boolean;
  cadastro_completo: boolean;
  patrocinador1_id: number;
  patrocinador2_id: number;
  temporada_inicial: number;
  simplificado: boolean;
  sorteio_pro_num?: any;
}

export interface MeuTime {
  atletas: Atleta[];
  clubes: Clube[];
  posicoes: Posicao[];
  status: Status;
  capitao_id: number;
  time: Time;
  patrimonio: number;
  esquema_id: number;
  pontos: number;
  valor_time: number;
  rodada_atual: number;
  variacao_patrimonio: number;
  variacao_pontos: number;
  servicos: any[];
  total_ligas: number;
  total_ligas_matamata: number;
}

export interface AtletasPontuados {
  atletas: Atleta[];
  clubes: Clube[];
  posicoes: Posicao[];
  rodada: number;
  total_atletas: number;
}

export interface PlayerScout {
  scout: string,
  qtd: number
};