import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SourcesComponent } from './components/pages/sources/sources.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sources', component: SourcesComponent},
  {path: 'about-us', component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
