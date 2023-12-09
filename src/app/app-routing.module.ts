import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AnalyticsComponent } from './components/pages/analytics/analytics.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent} ,
  {path: 'analytics', component: AnalyticsComponent},
  {path: 'about-us', component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
