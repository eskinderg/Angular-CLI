import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth/auth-guard.service';
import { NotesComponent } from './components/notes.component';
import { NotesResolver } from './services/notes.resolver';
import { NotesService } from './services/notes.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: NotesComponent,
        canActivate: [AuthGuardService],
        resolve: {
          //notes: NotesResolver
        }
      }
    ])
  ],
  providers: [NotesService],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
