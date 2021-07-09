import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegionComponent } from './legion/legion.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'attributes', component: TestComponent
  },
  {
    path: 'services', component: LegionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
