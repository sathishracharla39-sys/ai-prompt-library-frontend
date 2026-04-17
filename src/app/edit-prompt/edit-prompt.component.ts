import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PromptService } from '../services/prompt.service';

@Component({
  selector: 'app-edit-prompt',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-prompt.component.html'
})
export class EditPromptComponent implements OnInit {

  id!: number;
  prompt: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: PromptService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getPromptById(this.id).subscribe(data => {
      this.prompt = data;
    });
  }

  update() {
    this.service.updatePrompt(this.id, this.prompt).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}