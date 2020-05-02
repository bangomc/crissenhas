import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChaveComponent } from './chave/chave.component';
import { SenhasComponent } from './senhas/senhas.component';
import { AddComponent } from './senhas/add/add.component';


const routes: Routes = [

  { path: '', component: ChaveComponent },
  { path: 'senhas', component: SenhasComponent },
  { path: 'senhas/add', component: AddComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
