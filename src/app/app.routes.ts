import { Routes } from '@angular/router';
import { PromptListComponent } from './prompt-list/prompt-list.component';
import { AddPromptComponent } from './add-prompt/add-prompt.component';
import { EditPromptComponent } from './edit-prompt/edit-prompt.component';
import { PromptDetailComponent } from './prompt-detail/prompt-detail.component';

export const routes: Routes = [
  { path: '', component: PromptListComponent },
  { path: 'add', component: AddPromptComponent },
  { path: 'edit/:id', component: EditPromptComponent },   // ✅ IMPORTANT
  { path: 'prompts/:id', component: PromptDetailComponent }
];