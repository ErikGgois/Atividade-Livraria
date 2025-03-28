export class LivrosEntity{
    Id: string;
    Titulo: string;
    Autor: string;
    AnoPublicacao: number;
    Genero: string;
    Sinopse: string;

    constructor(Id: string,Titulo: string,Autor: string,AnoPublicacao: number,Genero: string,Sinopse: string){
        this.Id = Id;
        this.Titulo = Titulo;
        this.Autor = Autor;
        this.AnoPublicacao = AnoPublicacao;
        this.Genero = Genero;
        this.Sinopse = Sinopse;
    
    }
}