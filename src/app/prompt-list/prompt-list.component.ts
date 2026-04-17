import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PromptService } from '../services/prompt.service';

@Component({
  selector: 'app-prompt-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './prompt-list.component.html'
})
export class PromptListComponent implements OnInit {

  prompts: any[] = [];
  searchText: string = '';
  loading = true;

  constructor(private service: PromptService) {}

  ngOnInit() {
    this.service.getPrompts().subscribe((data: any) => {
      this.prompts = data;
      this.loading = false;
    });
  }

  sortedPrompts() {
    return this.prompts.filter(p =>
      p.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  deletePrompt(id: number) {
    this.service.deletePrompt(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}