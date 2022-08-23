import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'about', component : AboutComponent},
  { path : 'demo', component : DemoComponent, children : [
    { path : 'demo1', component : Demo1Component},
    { path : 'demo2', component : Demo2Component},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
