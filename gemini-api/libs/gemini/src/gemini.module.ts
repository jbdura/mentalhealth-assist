import { Module } from '@nestjs/common';
import { GeminiService } from './services/gemini.service';
import { GeminiController } from '@app/gemini/controllers/gemini.controller';
import { ResponseService } from '@app/gemini/services/response.service';

@Module({
  providers: [GeminiService, ResponseService],
  exports: [GeminiService, ResponseService],
  controllers: [GeminiController],
})
export class GeminiModule {}
