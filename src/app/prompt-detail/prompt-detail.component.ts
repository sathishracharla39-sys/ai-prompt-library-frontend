import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PromptService } from '../services/prompt.service';

@Component({
  selector: 'app-prompt-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prompt-detail.component.html'
})
export class PromptDetailComponent implements OnInit {

  prompt: any = null;

  constructor(
    private route: ActivatedRoute,
    private promptService: PromptService
  ) {}

  ngOnInit(): void {
    console.log("DETAIL COMPONENT LOADED");  // ✅ DEBUG

    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("ID:", id); // ✅ DEBUG

    this.promptService.getPromptById(id).subscribe((data: any) => {
      console.log("API DATA:", data); // ✅ DEBUG
      this.prompt = data;
    });
  }
}