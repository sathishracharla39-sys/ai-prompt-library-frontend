import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PromptService } from '../services/prompt.service';

@Component({
  selector: 'app-edit-prompt',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-prompt.component.html'
})
export class EditPromptComponent implements OnInit {

  prompt: any = {
    title: '',
    content: '',
    complexity: 1
  };

  id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private promptService: PromptService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.promptService.getPromptById(this.id).subscribe((data: any) => {
      this.prompt = data;
    });
  }

  update() {
    this.promptService.updatePrompt(this.id, this.prompt).subscribe(() => {
      alert("Updated successfully");
      this.router.navigate(['/prompts']);
    });
  }
}