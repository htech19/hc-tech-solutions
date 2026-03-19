import peliculasJson from "./peliculas_bot.json";

export interface Pelicula {
  model: string;
  marca: string;
  busca: string[];
  compat: string;
  compatList: string[];
}

interface PeliculaRaw {
  marca: string;
  modelo: string;
  busca: string[];
  compativel_com: string[];
}

export const peliculas: Pelicula[] = (peliculasJson as PeliculaRaw[]).map((p) => ({
  model: p.modelo,
  marca: p.marca,
  busca: p.busca,
  compat: p.compativel_com.join(" / "),
  compatList: p.compativel_com,
}));
