import { Routes } from '@angular/router';
import { PromptListComponent } from './prompt-list/prompt-list.component';
import { AddPromptComponent } from './add-prompt/add-prompt.component';
import { EditPromptComponent } from './edit-prompt/edit-prompt.component';

export const routes: Routes = [
  { path: '', component: PromptListComponent },
  { path: 'add', component: AddPromptComponent },
  { path: 'edit/:id', component: EditPromptComponent }
];