import { Module } from "@nestjs/common";
import { LivrosController } from "./Livros.controller";
import { LivrosArmazenados } from "../Livro/Livros.dm";


@Module({
    imports:[],
    controllers:[LivrosController],
})
export class LivrosModule{}