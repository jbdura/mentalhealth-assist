import { Body, Controller, Post } from '@nestjs/common';
import { GeminiService } from '../services/gemini.service';
import { CreatePromptDto } from '../dtos/prompt.dto';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post('generate')
  generate(@Body() createPromptDto: CreatePromptDto): Promise<any> {
    return this.geminiService.generateResponse(createPromptDto);
  }

  @Post('chat')
  chat(@Body() createPromptDto: CreatePromptDto): Promise<any> {
    return this.geminiService.sendMessage(createPromptDto);
  }
}
