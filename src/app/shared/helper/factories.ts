// import { IArtista } from "../Interfaces/IArtista";
import { IMusica } from "../interfaces/IMusica";
// import { IPlaylist } from "../Interfaces/IPlaylist";

export function newArtista(): any {
  return {
    id: '',
    imagemUrl: '',
    nome: '',
    musicas: []
  };
}

export function newMusica(): IMusica {
  return {
    id: '',
    album: {
      id: '',
      imagemUrl: '',
      nome: '',
    },
    artistas: [],
    tempo: '',
    titulo: ''
  }
}

export function newPlaylist(): any {
  return {
    id: '',
    imagemUrl: '',
    nome: '',
    musicas: []
  }
}
