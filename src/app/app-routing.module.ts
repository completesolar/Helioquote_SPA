import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { SolarPageComponent } from './components/solar-page/solar-page.component';
import { SystemOverviewPageComponent } from './components/system-overview-page/system-overview-page.component';
import { EnergyOverviewPageComponent } from './components/energy-overview-page/energy-overview-page.component';
import { CashflowPageComponent } from './components/cashflow-page/cashflow-page.component';
import { CurrentSystemPageComponent } from './components/current-system-page/current-system-page.component';
import { AddersPageComponent } from './components/adders-page/adders-page.component';
import { EnvironmentalImpactPageComponent } from './components/environmental-impact-page/environmental-impact-page.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: 'welcome-page', component: WelcomePageComponent },
  { path: 'solar-review-page', component: SolarPageComponent },
  { path: 'current-system-page', component: CurrentSystemPageComponent },
  { path: 'system-overview-page', component: SystemOverviewPageComponent },
  { path: 'energy-overview-page', component: EnergyOverviewPageComponent },
  { path: 'cashflow-page', component: CashflowPageComponent },
  { path: 'adders-page', component: AddersPageComponent },
  { path: 'environmental-impact-page', component: EnvironmentalImpactPageComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/welcome-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
