import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LivrosArmazenados } from "./Livros.dm";
import { LivrosEntity } from "./Livros.entity";
import { criaLivrosDTO } from "./DTO/Livros.dto";

import {v4 as uuid} from 'uuid';
import { ListaLivrosDTO } from "./DTO/consulta.dto";
import { alteraLivrosDTO } from "./DTO/alteraLivros.dto";


@Controller('/Livros')
export class LivrosController{
    constructor(private clsLivrosArmazenados: LivrosArmazenados){
        
    }    
    @Post()
    async criaLivros(@Body() dadosLivros: criaLivrosDTO){
        
         
        var novoLivros = new LivrosEntity(uuid(),dadosLivros.Id,
                                            dadosLivros.Titulo,dadosLivros.Autor,dadosLivros.AnoPublicacao,
                                            dadosLivros.Genero,dadosLivros.Sinopse);
        this.clsLivrosArmazenados.AdicionarLivros(novoLivros);

        var Livros = {
            dadosLivros : novoLivros,
            status: "Livro Criado"
        }
        return Livros;
    }

    @Get()
    async listaLivros(){
        

        const LivrosListados = this.clsLivrosArmazenados.Livros;
        const listaRetorno = LivrosListados.map(
            Livros => new ListaLivrosDTO(
                Livros.Id,
                Livros.Titulo,
                Livros.Autor,
                Livros.AnoPublicacao,
                Livros.Genero,
                Livros.Sinopse
            )
        );
        
        return listaRetorno;
    }
    
    @Put('/:id')
    async atualizaLivros(@Param('id') id: string, @Body() novosDados: alteraLivrosDTO){
        const LivrosAtualizado = await this.clsLivrosArmazenados.atualizaLivros(id, novosDados);
        return {
            usuario: LivrosAtualizado,
            message: "Livro Atualizado"
    }
}

@Delete('/:id')
async removeLivros(@Param('id') id: string){
    const LivrosRemovido = await this.clsLivrosArmazenados.removeLivros(id);
    return {
        usuario: LivrosRemovido,
        message: "Livro Removido"
    }
}

}