import { Module } from "@nestjs/common";
import { LivrosController } from "./Livros.controller";
import { LivrosArmazenados } from "./Livros.dm";


@Module({
    imports:[],
    controllers:[LivrosController],
})
export class LivrosModule{}