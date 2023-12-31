import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './components/observables/observables.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

const routes: Routes = [
  {path: 'observables', component: ObservablesComponent},
  {path: 'operators', component: OperatorsComponent},
  {path: 'subjects', component: SubjectsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
