import { from } from "rxjs";
import {IsInt, IsNotEmpty, IsString, MinLength,IsOptional } from "class-validator";

export class alteraLivrosDTO{
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    Id:string;

    @IsString()
    @IsOptional({message: "o titulo Não pode ser vazio"})
    Titulo: string;

    @IsString()
    @IsOptional()
    Autor: string;


    @IsInt()
    @IsOptional()
    AnoPublicacao: Number;


    @IsString()
    @IsOptional()
    Genero: string;

    @IsString()
    @IsOptional()
    Sinopse: string;
    
}