import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { ButtonComponent } from './ui-components/button/button.component';
import { ChipComponent } from './ui-components/chip/chip.component';
import { BannerComponent } from './ui-components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    ButtonComponent,
    ChipComponent,
    BannerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
