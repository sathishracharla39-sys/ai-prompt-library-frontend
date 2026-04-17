import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PromptService } from '../services/prompt.service';

@Component({
  selector: 'app-add-prompt',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-prompt.component.html'
})
export class AddPromptComponent {

  prompt = {
    title: '',
    content: '',
    complexity: 1
  };

  constructor(private service: PromptService, private router: Router) {}

  submit() {
    this.service.addPrompt(this.prompt).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}