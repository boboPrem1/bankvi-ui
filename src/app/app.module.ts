import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './pages/index/components/header/header.component';
import { MainIndexComponent } from './pages/index/components/main-index/main-index.component';
import { FooterIndexComponent } from './pages/index/components/footer-index/footer-index.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ValidateTelComponent } from './pages/index/validate-tel/validate-tel.component';
import { MoreInfosComponent } from './pages/index/more-infos/more-infos.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/dashboard/users/users.component';
import { ProductsComponent } from './pages/dashboard/products/products.component';
import { EchelonsComponent } from './pages/dashboard/echelons/echelons.component';
import { PlateformsComponent } from './pages/dashboard/plateforms/plateforms.component';
import { UserProfilComponent } from './pages/dashboard/user-profil/user-profil.component';
import { FormsModule } from '@angular/forms';
import { ModalComponentComponent } from './pages/modal-component/modal-component.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    MainIndexComponent,
    FooterIndexComponent,
    ValidateTelComponent,
    MoreInfosComponent,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    EchelonsComponent,
    PlateformsComponent,
    UserProfilComponent,
    ModalComponentComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
