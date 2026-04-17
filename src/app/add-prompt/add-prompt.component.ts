import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PromptService } from '../services/prompt.service';

@Component({
  selector: 'app-add-prompt',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-prompt.component.html'
})
export class AddPromptComponent {

  prompt = {
    title: '',
    content: '',
    complexity: 1
  };

  constructor(private service: PromptService, private router: Router) {}

  addPrompt() {
    this.service.addPrompt(this.prompt).subscribe(() => {
      alert("Prompt added!");
      this.router.navigate(['/prompts']);
    });
  }
}