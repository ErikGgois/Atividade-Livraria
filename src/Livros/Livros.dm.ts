import { Injectable } from "@nestjs/common";
import { LivrosEntity } from "./Livros.entity";

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

    atualizaLivros(Id: string, dadosAtualizacao: Partial<LivrosEntity>){
        const Livros = this.buscaPorID(Id);
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

    private buscaPorID(Id: string){
        const possivelLivros = this.#Livros.find(
            LivrosSalvo => LivrosSalvo.Id === Id
        )
        if(!possivelLivros){
            throw new Error('Livro não encontrado');
        }
    

        return possivelLivros;
    }

    async removeLivros(Id: string){
        const Livros = this.buscaPorID(Id);

        this.#Livros = this.#Livros.filter(
            LivrosSalvo => LivrosSalvo.Id !== Id);
            return Livros;
    }

} 