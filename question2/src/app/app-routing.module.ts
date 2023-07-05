import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { AppComponent } from './app.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [{
  path:'home',component:AppComponent},
 { path:'show' , component:ShowComponent},
 {path:'single',component:SingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
