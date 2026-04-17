import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';   // ✅ CORRECT PLACE
import { PromptService } from '../services/prompt.service';

@Component({
  selector: 'app-prompt-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // ✅ CORRECT
  templateUrl: './prompt-list.component.html'
})
export class PromptListComponent implements OnInit {

  prompts: any[] = [];
  searchText: string = '';
  sortOrder: string = '';
  loading = true;

  constructor(
    private promptService: PromptService,
    private cdr: ChangeDetectorRef   // ⭐ IMPORTANT
  ) {}

  ngOnInit(): void {
    console.log("LIST COMPONENT LOADED");

    this.promptService.getPrompts().subscribe({
      next: (data: any) => {
        console.log("DATA RECEIVED:", data);

        this.prompts = data;
        this.loading = false;

        this.cdr.detectChanges();   // ⭐ FORCE UPDATE
      },
      error: (err) => {
        console.error("ERROR:", err);
      }
    });
  }

  deletePrompt(id: number) {
  if (confirm("Are you sure you want to delete?")) {
    this.promptService.deletePrompt(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
filteredPrompts() {
  return this.prompts.filter(p =>
    p.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
    p.content.toLowerCase().includes(this.searchText.toLowerCase())
  );
}

sortedPrompts() {
  let data = this.filteredPrompts();

  if (this.sortOrder === 'low') {
    return data.sort((a, b) => a.complexity - b.complexity);
  } else if (this.sortOrder === 'high') {
    return data.sort((a, b) => b.complexity - a.complexity);
  }
  return data;
}
}