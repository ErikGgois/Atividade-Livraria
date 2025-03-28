import { Module } from '@nestjs/common';
import { LivrosModule } from './Livros/Livros.module';

@Module({
  imports: [LivrosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
