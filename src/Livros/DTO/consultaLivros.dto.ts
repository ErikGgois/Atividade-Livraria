export class ListaLivrosDTO{
    constructor(
        readonly Id: string,
        readonly Titulo: string,
        readonly Autor: string,
        readonly AnoPublicacao: number,
        readonly Genero: string,
        readonly Sinopse: string,

        ){}
}