import { IndexComponent } from './pages/index/index.component';
import { MoreInfosComponent } from './pages/index/more-infos/more-infos.component';
import { ValidateTelComponent } from './pages/index/validate-tel/validate-tel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }