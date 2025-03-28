import { Module } from "@nestjs/common";
import { LivrosController } from "./Livros.controller";
import { LivrosArmazenados } from "../Livros/Livros.dm";


@Module({
    imports:[],
    controllers:[LivrosController],
    providers:[LivrosArmazenados]
})
export class LivrosModule{}