import { Injectable } from "@nestjs/common";
import { LivrosEntity } from "../Livro/Livros.entity";

@Injectable()
export class LivrosArmazenados{
    validaNome(value: any) {
        throw new Error("Method not implemented.");
    }
    #Livros: LivrosEntity[] = [];  

    AdicionarLivros(Livros: LivrosEntity){
        this.#Livros.push(Livros);
    }

    get Livros(){        
        return this.#Livros;
    }

    atualizaLivros(id: string, dadosAtualizacao: Partial<LivrosEntity>){
        const Livros = this.buscaPorID(id);
        Object.entries(dadosAtualizacao).forEach(
            ([chave, valor]) => {
                if(chave === 'id'){
                    return
                }
                if (valor !== undefined){
                    return}
                    
                Livros[chave] = valor;
            }
        )
        return Livros;
    }

    private buscaPorID(id: string){
        const possivelLivros = this.#Livros.find(
            LivrosSalvo => LivrosSalvo.id === id
        )
        if(!possivelLivros){
            throw new Error('Livro não encontrado');
        }
    

        return possivelLivros;
    }

    async removeLivros(id: string){
        const Livros = this.buscaPorID(id);

        this.#Livros = this.#Livros.filter(
            LivrosSalvo => LivrosSalvo.id !== id);
            return Livros;
    }

} 