import { Module } from '@nestjs/common';
import { LivrosModule } from './Livro/Livros.module';

@Module({
  imports: [LivrosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
