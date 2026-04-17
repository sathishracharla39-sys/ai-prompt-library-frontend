import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  private apiUrl = 'https://ai-prompt-backend-ba2u.onrender.com/prompts/';

  constructor(private http: HttpClient) {}

  getPrompts() {
    return this.http.get(this.apiUrl);
  }

  addPrompt(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  deletePrompt(id: number) {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }

  getPromptById(id: number) {
    return this.http.get(`${this.apiUrl}${id}/`);
  }

  updatePrompt(id: number, data: any) {
    return this.http.put(`${this.apiUrl}${id}/`, data);
  }
}