import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentAppComponent } from '../app/parent-app/parent-app.component';
import { ChildAppComponent } from '../app/child-app/child-app.component';

import { DashboardComponent } from '../app/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'child-app',
    component: ChildAppComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
