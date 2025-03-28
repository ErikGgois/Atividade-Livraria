import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LivrosArmazenados } from "./Livros.dm";
import { LivrosEntity } from "./Livros.entity";
import { criaLivrosDTO } from "./DTO/Livros.dto";

import {v4 as uuid} from 'uuid';
import { ListaLivrosDTO } from "./DTO/consultaLivros.dto";
import { alteraLivrosDTO } from "./DTO/alteraLivros.dto";


@Controller('/Livros')
export class LivrosController{
    constructor(private clsLivrosArmazenados: LivrosArmazenados){
        
    }    
    @Post()
    async criaLivros(@Body() dadosLivros: criaLivrosDTO){
        
         
        var novoLivros = new LivrosEntity(dadosLivros.Id,
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
    
    @Put('/:Id')
    async atualizaLivros(@Param('Id') Id: string, @Body() novosDados: alteraLivrosDTO){
        const LivrosAtualizado = await this.clsLivrosArmazenados.atualizaLivros(Id, novosDados);
        return {
            usuario: LivrosAtualizado,
            message: "Livro Atualizado"
    }
}

@Delete('/:Id')
async removeLivros(@Param('Id') Id: string){
    const LivrosRemovido = await this.clsLivrosArmazenados.removeLivros(Id);
    return {
        usuario: LivrosRemovido,
        message: "Livro Removido"
    }
}

}
