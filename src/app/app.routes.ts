import { Routes } from '@angular/router';
import { PromptListComponent } from './prompt-list/prompt-list.component';
import { AddPromptComponent } from './add-prompt/add-prompt.component';
import { PromptDetailComponent } from './prompt-detail/prompt-detail.component';

export const routes: Routes = [
  { path: '', component: PromptListComponent },
  { path: 'add', component: AddPromptComponent },
  { path: 'prompts/:id', component: PromptDetailComponent }
];