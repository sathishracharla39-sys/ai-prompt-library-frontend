import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  private apiUrl = 'https://ai-prompt-library-backend-wez0.onrender.com/prompts/';

  constructor(private http: HttpClient) {}

  // GET ALL
  getPrompts() {
    return this.http.get(this.apiUrl);
  }

  // GET BY ID
  getPromptById(id: any) {
    return this.http.get(`${this.apiUrl}${id}/`);
  }

  // ADD
  addPrompt(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  // DELETE
  deletePrompt(id: any) {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }

  // UPDATE ⭐ NEW
  updatePrompt(id: any, data: any) {
    return this.http.put(`${this.apiUrl}${id}/`, data);
  }
}