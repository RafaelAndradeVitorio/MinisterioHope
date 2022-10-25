import { Comentarios } from "../infos/comentarios";

 export class Ingresso  {
   id: string | undefined;
   lote: string | undefined;
   horario: string | undefined;
   dia: string | undefined;
   preco: string | undefined;
   imagem: string | undefined;
   comentario: Comentarios[] | undefined;
 }

