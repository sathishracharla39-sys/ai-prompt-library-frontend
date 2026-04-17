import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PromptService } from '../services/prompt.service';
import { FormsModule } from '@angular/forms';

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
  console.log("Submitting", this.prompt);   // ✅ DEBUG

  this.service.addPrompt(this.prompt).subscribe({
    next: () => {
      alert("Prompt added successfully");
      this.router.navigate(['/']);
    },
    error: (err) => {
      console.error(err);
    }
  });
}
}