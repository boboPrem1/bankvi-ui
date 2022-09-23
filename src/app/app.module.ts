import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './pages/index/components/header/header.component';
import { MainIndexComponent } from './pages/index/components/main-index/main-index.component';
import { FooterIndexComponent } from './pages/index/components/footer-index/footer-index.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ValidateTelComponent } from './pages/index/validate-tel/validate-tel.component';
import { MoreInfosComponent } from './pages/index/more-infos/more-infos.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    MainIndexComponent,
    FooterIndexComponent,
    ValidateTelComponent,
    MoreInfosComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
