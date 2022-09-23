import { IndexComponent } from './pages/index/index.component';
import { ValidateTelComponent } from './pages/index/validate-tel/validate-tel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'validate', component: ValidateTelComponent },
  { path: 'more-infos', component: ValidateTelComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
