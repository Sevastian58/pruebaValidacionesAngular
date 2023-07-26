import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrerPageComponent } from './registrer-page/registrer-page.component';

const routes: Routes = [
  {
  path: '',
    children: [
      { path: 'sign-up', component: RegistrerPageComponent },
      { path: '**', redirectTo: 'sign-up' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
