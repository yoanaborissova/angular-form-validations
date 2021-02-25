import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManualComponent} from './manual/manual.component';
import {Template} from '@angular/compiler/src/render3/r3_ast';
import {TemplateDrivenComponent} from './template-driven/template-driven.component';
import {ReactiveComponent} from './reactive/reactive.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/manual'},
  {path: 'manual', component: ManualComponent},
  {path: 'template-driven', component: TemplateDrivenComponent},
  {path: 'reactive', component: ReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
