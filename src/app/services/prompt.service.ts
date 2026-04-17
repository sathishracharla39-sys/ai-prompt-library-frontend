import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  private apiUrl = 'https://ai-prompt-library-backend-hq8c.onrender.com/prompts/';

  constructor(private http: HttpClient) {}

  getPrompts() {
    return this.http.get(this.apiUrl);
  }

  getPromptById(id: number) {
    return this.http.get(`${this.apiUrl}${id}/`);
  }

  addPrompt(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  updatePrompt(id: number, data: any) {   // ✅ ADD THIS
    return this.http.put(`${this.apiUrl}${id}/`, data);
  }

  deletePrompt(id: number) {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}