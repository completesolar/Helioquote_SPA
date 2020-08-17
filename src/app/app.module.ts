import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { SolarPageComponent } from './components/solar-page/solar-page.component';
import { CurrentSystemPageComponent } from './components/current-system-page/current-system-page.component';
import { SystemOverviewPageComponent } from './components/system-overview-page/system-overview-page.component';
import { EnergyOverviewPageComponent } from './components/energy-overview-page/energy-overview-page.component';
import { CashflowPageComponent } from './components/cashflow-page/cashflow-page.component';
import { AddersPageComponent } from './components/adders-page/adders-page.component';
import { EnvironmentalImpactPageComponent } from './components/environmental-impact-page/environmental-impact-page.component';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    SolarPageComponent,
    CurrentSystemPageComponent,
    SystemOverviewPageComponent,
    EnergyOverviewPageComponent,
    CashflowPageComponent,
    AddersPageComponent,
    EnvironmentalImpactPageComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    SharedModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
