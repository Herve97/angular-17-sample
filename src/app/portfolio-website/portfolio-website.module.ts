import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioWebsiteRoutingModule } from './portfolio-website-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PortfolioWebsiteRoutingModule
  ]
})
export class PortfolioWebsiteModule { }
