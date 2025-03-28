import {IsInt, IsNotEmpty, IsString } from "class-validator";


export class criaLivrosDTO{
    @IsString()
    @IsNotEmpty()
    Id:string;

    @IsString({message: "Titulo Não pode ser vazio"})
    Titulo: string;
    
    @IsString()
    Autor: string;

    @IsInt()
    AnoPublicacao: number;

    @IsString()
    Genero: string;

    @IsString()
    Sinopse: string;

}