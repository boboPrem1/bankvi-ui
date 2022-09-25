import { PlateformsComponent } from './pages/dashboard/plateforms/plateforms.component';
import { UsersComponent } from './pages/dashboard/users/users.component';
import { ProductsComponent } from './pages/dashboard/products/products.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MoreInfosComponent } from './pages/index/more-infos/more-infos.component';
import { IndexComponent } from './pages/index/index.component';
import { ValidateTelComponent } from './pages/index/validate-tel/validate-tel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfilComponent } from './pages/dashboard/user-profil/user-profil.component';
import { EchelonsComponent } from './pages/dashboard/echelons/echelons.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'validate', component: ValidateTelComponent },
  { path: 'more-infos', component: MoreInfosComponent},
  { path: 'dashboard', component: DashboardComponent,
  children: [
    {
      path: '',
      component: UserProfilComponent,
     },{
      path: 'profil',
      component: UserProfilComponent,
     },
     {
      path: 'users',
      component: UsersComponent,
     },
     {
      path: 'products',
      component: ProductsComponent,
     },
     {
      path: 'echelons',
      component: EchelonsComponent,
     },
     {
      path: 'plateforms',
      component: PlateformsComponent,
     },
    ]},
  { path: '', component: IndexComponent },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
