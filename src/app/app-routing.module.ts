import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShareComponent} from './share/component';

const routes: Routes = [
    { path: 'share', component: ShareComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
