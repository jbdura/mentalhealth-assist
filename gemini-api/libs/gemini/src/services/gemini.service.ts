import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ResponseService } from './response.service';
import { CreatePromptDto } from '../dtos/prompt.dto';
import { ResponseDto } from '../dtos/response.dto';

@Injectable()
export class GeminiService {
  private chatInstance: any; // To maintain the chat session
  private genAI: GoogleGenerativeAI;

  constructor(private readonly responseService: ResponseService) {
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  }

  async generateResponse(
    createPromptDto: CreatePromptDto,
  ): Promise<ResponseDto<string>> {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(createPromptDto.text);
    const content = result.response.text();
    return this.responseService.success(content);
  }

  async initializeChat(): Promise<void> {
    const model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    this.chatInstance = model.startChat({
      history: [], // Initialize with an empty history
    });
  }

  async sendMessage(
    createPromptDto: CreatePromptDto,
  ): Promise<ResponseDto<string>> {
    if (!this.chatInstance) {
      await this.initializeChat();
    }

    const result = await this.chatInstance.sendMessage(createPromptDto.text);
    const content = result.response.text();
    return this.responseService.success(content);
  }
}
